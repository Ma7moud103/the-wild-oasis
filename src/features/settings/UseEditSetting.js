import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function UseEditSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdateing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"]
      });

      toast.success("setting successfully updated");
    },
    onError: (err) => toast.error(err.message)
  });

  return { updateSetting, isUpdateing };
}
