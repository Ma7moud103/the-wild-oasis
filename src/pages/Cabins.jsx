import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from '../ui/Button'
import CreateCabinForm from '../features/cabins/CreateCabinForm'
import { useState } from "react";

function Cabins() {
  const [showForm, setshowForm] = useState(false)
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setshowForm(pre => !pre)}>Add new Cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
