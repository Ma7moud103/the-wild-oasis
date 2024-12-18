import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { UseBooking } from "../bookings/UseBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import UseCheckin from "./UseCheckin";
import { UseSettings } from "../settings/UseSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {

  const [addBreakFast, setaddBreakFast] = useState(false)

  const [confirmPaid, setconfirmPaid] = useState(false)
  const { booking, isLoading } = UseBooking()

  useEffect(() => setconfirmPaid(booking?.isPaid ?? false), [booking])


  const moveBack = useMoveBack();

  const { checkin, isCheckingIn } = UseCheckin()
  const { settings, isLoading: isLoadingSettings } = UseSettings()

  if (isLoading || isLoadingSettings) return <Spinner />
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBrackfastPrice = settings?.breakfastPrice * numNights * numGuests
  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakFast) {
      checkin({
        bookingId, breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBrackfastPrice,
          totalPrice: totalPrice + optionalBrackfastPrice
        }
      })
    } else {

      checkin({ bookingId, breakfast: {} })
    }
  }



  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (<Box>
        <Checkbox checked={addBreakFast} onChange={() => {
          setaddBreakFast(pre => !pre)
          setconfirmPaid(false)
        }}
          id={'breakfast'}>
          Want to add the breakfast for {formatCurrency(optionalBrackfastPrice)} ?
        </Checkbox>
      </Box>)}

      <Box>
        <Checkbox disabled={confirmPaid || isCheckingIn} checked={confirmPaid} onChange={() => setconfirmPaid(pre => !pre)} id={'confirm'}>confirm that {guests.fullname} has paid the total price of {!addBreakFast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + optionalBrackfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBrackfastPrice)})`}</Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckingIn} onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
