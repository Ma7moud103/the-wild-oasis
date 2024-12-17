import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from '../data/Uploader'
const StyledSidebar = styled.aside`
    grid-row: 1/-1;
    background-color: var(--color-grey-0);
`

function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />

            <Uploader />
        </StyledSidebar>
    )
}

export default Sidebar