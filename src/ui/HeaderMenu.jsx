import React from 'react'
import styled from 'styled-components'
import Logout from '../features/authentication/Logout'
import ButtonIcon from './ButtonIcon'
import { useNavigate } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";
import DarkModeToggle from './DarkModeToggle'
import { CiMenuKebab } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { handleDisplayingMenu } from '../redux/UiSlice'

const StyledHeaderMenu = styled.ul`
    display: flex;
    gap:.4rem;
`

const Menu = styled.li`
@media(min-width:${({ theme }) => theme.breakpoints.desktop}){
    display: none;
}
`

const StyledLogout = styled.li`
@media(max-width:${({ theme }) => theme.breakpoints.desktop}){
    display: none;
}
`

function HeaderMenu() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={() => navigate("/account")}>
                    <FaUsers />
                </ButtonIcon>
            </li>
            <li>
                <DarkModeToggle />
            </li>
            <Menu>
                <ButtonIcon onClick={() => dispatch(handleDisplayingMenu("toggle"))}>
                    <CiMenuKebab />
                </ButtonIcon>
            </Menu>
            <StyledLogout>
                <Logout />
            </StyledLogout>

        </StyledHeaderMenu>
    )
}

export default HeaderMenu