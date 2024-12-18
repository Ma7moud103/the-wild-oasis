import React from 'react'
import ButtonIcon from '../../ui/ButtonIcon'
import UseLogout from './UseLogout'
import SpinnerMini from '../../ui/SpinnerMini'
import { IoLogOutOutline } from "react-icons/io5";
function Logout() {
    const { logout, isLoading } = UseLogout()
    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            {!isLoading ? <IoLogOutOutline /> : <SpinnerMini />}
        </ButtonIcon>
    )
}

export default Logout