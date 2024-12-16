
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import { UseAddCabin } from "./UseAddCabin";
import { UseUpdateCabin } from "./UseUpdateCabin";



function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {}
  })
  const { errors } = formState

  const { createCabin, isCreating } = UseAddCabin()

  const { editCabin, isEditing } = UseUpdateCabin()




  const isWorking = isCreating || isEditing

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId })

    else createCabin({ ...data, image: image }, {
      onSuccess: () => {
        onClose?.()
        reset()
      }
    })
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={onClose ? "model" : "regular"}>
      <FormRow label={'Cabin name'} error={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register('name', {
          required: "input is required"
        })} />
      </FormRow>

      <FormRow label={'Maximum capacity'} error={errors?.maxCapacity?.message}>

        <Input disabled={isWorking} type="number" id="maxCapacity" {...register('maxCapacity', {
          required: "input is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })} />
      </FormRow>

      <FormRow label={'Regular price'} error={errors?.regularPrice?.message}>

        <Input disabled={isWorking} type="number" id="regularPrice" {...register('regularPrice', {
          required: "input is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })} />
      </FormRow>

      <FormRow label={'Discount'} error={errors?.discount?.message}>
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register('discount', {
          required: "input is required",
          validate: (value) => value <= getValues().regularPrice || 'discount should be less than regular price'
        })} />
      </FormRow>

      <FormRow disabled={isWorking} label={'Description'} error={errors?.description?.message}>
        <Textarea disabled={isWorking} type="number" id="description" defaultValue="" {...register('description', {
          required: "input is required"
        })} />
      </FormRow>

      <FormRow label={'Cabin photo'}>
        <FileInput id="image" accept="image/*"   {...register('image', {
          required: isEditSession ? false : "input is required"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={() => onClose?.()} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit Cabin" : "Create new cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
