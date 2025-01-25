import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../features/authentication/UserAvatar'
import { useDispatch, useSelector } from 'react-redux'
import { NavList, StyledNavLink } from './MainNav'
import { HiCalendarDays, HiHomeModern, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2'
import { handleDisplayingMenu } from '../redux/UiSlice'
import Logout from '../features/authentication/Logout'

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.2rem;
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    gap:2.3rem;
    align-items: center;
    justify-content:flex-end;
     @media (max-width:${({ theme }) => theme.breakpoints.desktop}) {
        justify-content: space-between;
        padding-inline:.9rem;
        position: relative;
  }
`
const Container = styled.div`
    background-color: inherit;
    display: none;
    @media (max-width:${({ theme }) => theme.breakpoints.desktop}) {
        display: flex;
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        right: 0%;
        overflow: hidden;
        z-index: 1;
        gap: 0;
        
        /* this for disabled style */
        max-height: ${({ isMenuOpened }) => (isMenuOpened ? "50rem" : "0%")};
    
        transition: all 0.5s;
        border-bottom: 1px solid var(--color-grey-100);
    }

`
function Header() {
    const { isMenuOpened } = useSelector((state) => state.ui)
    const dispatch = useDispatch()
    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
            <Container isMenuOpened={isMenuOpened}>
                <NavList>
                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <StyledNavLink to="/dashboard">

                            <HiOutlineHome />
                            <span>Dashboard</span>

                        </StyledNavLink>
                    </li>

                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <StyledNavLink to="/bookings">
                            <HiCalendarDays />
                            <span>Bookings</span>

                        </StyledNavLink>
                    </li>
                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <StyledNavLink to="/cabins">

                            <HiHomeModern />
                            <span>Cabins</span>

                        </StyledNavLink>
                    </li>
                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <StyledNavLink to="/users">

                            <HiOutlineUsers />
                            <span>Users</span>

                        </StyledNavLink>
                    </li>
                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <StyledNavLink to="/settings">

                            <HiOutlineCog6Tooth />
                            <span>Settings</span>

                        </StyledNavLink>
                    </li>
                    <li onClick={() => dispatch(handleDisplayingMenu(false))}>
                        <Logout />
                        <span>Logout</span>
                    </li>

                </NavList>
            </Container>
        </StyledHeader>
    )
}

export default Header