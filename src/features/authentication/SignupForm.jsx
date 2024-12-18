import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import UseSignUp from "./UseSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm()
  const { errors } = formState
  const { singUp, isLoading } = UseSignUp()

  function onSubmit({ fullName, email, password }) {
    singUp({ fullName, email, password }, {
      onSettled: reset
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input disabled={isLoading} type="text" id="fullName" {...register("fullName", { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input disabled={isLoading} type="email" id="email"  {...register("email", { required: 'This field is required' })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input disabled={isLoading} type="password" id="password" {...register("password", {
          required: 'This field is required', minLength: { value: 6, message: "Password should be at least 6 characters." }
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input disabled={isLoading} type="password" id="passwordConfirm"  {...register("passwordConfirm", {
          required: 'This field is required',
          validate: (value) => value === getValues().password || "not valid"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={reset} disabled={isLoading} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
