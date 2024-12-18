import { useMutation } from "@tanstack/react-query";

import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function UseSignUp() {
  const { mutate: singUp, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("account successfully created");
    }
  });

  return { singUp, isLoading };
}

export default UseSignUp;
