import React from 'react'

import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'
import CabinTable from './CabinTable'



function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.open opens='cabin-form'>
                    <Button>
                        Add new Cabin
                    </Button>
                </Modal.open>
                <Modal.window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.window>


            </Modal>
        </div>)
}
// function AddCabin() {
//     const [isOpenModel, setisOpenModel] = useState(false)

//     return (
//         <>
//             <Button onClick={() => setisOpenModel(pre => !pre)}>Add new Cabin</Button>
//             {isOpenModel && <Modal setisOpenModel={setisOpenModel}>
//                 <CreateCabinForm onClose={() => setisOpenModel(prev => !prev)} />
//             </Modal>}
//         </>
//     )
// }




export default AddCabin

