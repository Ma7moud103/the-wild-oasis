import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UseCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,

        ...breakfast
      }),
    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked in `);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => toast.error("there was an error while checking in ")
  });

  return { checkin, isCheckingIn };
}
