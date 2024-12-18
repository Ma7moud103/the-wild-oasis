import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function UseBooking() {
  const { bookingId } = useParams();
  const {
    data: booking,
    isLoading,
    error
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false
  });

  return { booking, isLoading, error };
}
