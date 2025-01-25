import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MainNav from './MainNav'

const StyledSidebar = styled.aside`
    grid-row: 1/-1;
    background-color: var(--color-grey-0);

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        display: none;

    }
`

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />


        </StyledSidebar>
    )
}

export default Sidebar