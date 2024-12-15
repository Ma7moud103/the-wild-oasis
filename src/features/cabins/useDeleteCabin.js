import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function UseDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabin"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { deleteCabin, isDeleteing };
}
