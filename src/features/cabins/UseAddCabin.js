import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function UseAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"]
      });
      toast.success("you successfully added new cabin ");
    },
    onError: (err) => toast.error(err.message)
  });

  return { createCabin, isCreating };
}
