import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function UseCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out"
      }),
    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked in `);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("there was an error while checkoutg in ")
  });

  return { checkout, isCheckingOut };
}
