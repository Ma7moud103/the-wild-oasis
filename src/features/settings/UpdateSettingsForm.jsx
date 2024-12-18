import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { UseSettings } from './UseSettings';
import Spinner from '../../ui/Spinner'
import { UseEditSetting } from './UseEditSetting';
function UpdateSettingsForm() {

  const { settings = {}, isLoading } = UseSettings()
  console.log(settings)
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice
  } = settings
  if (isLoading) return <Spinner />



  const { isUpdateing, updateSetting } = UseEditSetting()

  function handleBlur(e, field) {
    const { value } = e?.target
    if (!value) return;
    updateSetting({
      [field]: value
    })
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input disabled={isUpdateing} type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e => handleBlur(e, "minBookingLength")} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input disabled={isUpdateing} type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={e => handleBlur(e, "maxBookingLength")} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input disabled={isUpdateing} type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur={e => handleBlur(e, "maxGuestsPerBooking")} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input disabled={isUpdateing} type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e => handleBlur(e, "breakfastPrice")} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
