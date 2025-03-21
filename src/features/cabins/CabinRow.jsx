import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers"
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import { UseDeleteCabin } from "./UseDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { UseAddCabin } from "./UseAddCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;



function CabinRow({ cabin }) {
  const [showForm, setshowForm] = useState(false)
  const { id: cabinId, name, regularPrice, maxCapacity, discount, image, description } = cabin

  const { deleteCabin, isDeleteing } = UseDeleteCabin()
  const { isCreating, createCabin } = UseAddCabin()

  function handleDublicat() {
    createCabin({
      name: `copy from ${name}`,
      regularPrice,
      maxCapacity,
      discount,
      image,
      description
    })
  }
  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? <Discount>{formatCurrency(discount)}</Discount>
          : <span>&mdash;</span>}
        <div>



          <Modal>


            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button onClick={handleDublicat} icon={<HiSquare2Stack />}>Dubllicate</Menus.Button>

                <Modal.open opens={'edit'}>
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>

                </Modal.open>

                <Modal.open opens={'delete'}>
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.open>
              </Menus.List>
              <Modal.window name={'edit'}>
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.window>


              <Modal.window name={'delete'}>
                <ConfirmDelete
                  disabled={isDeleteing}
                  resourceName={'cabins'}
                  onConfirm={() => deleteCabin(cabinId)}
                />

              </Modal.window>

            </Menus.Menu>
          </Modal>




        </div>
      </Table.Row>

    </>
  )
}

export default CabinRow