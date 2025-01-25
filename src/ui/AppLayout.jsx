import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import styled from "styled-components"


const Main = styled.main`
    padding: 4rem 4.8rem 6.4rem;
    background-color: var(--color-grey-50);
    overflow: scroll;
`

const StyledApp = styled.div`
    display: grid;
    grid-template-columns:26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;

    /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px;
    } */

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction:column;
    height: 100vh;
    }

`
const Container = styled.div`
    max-width: 110rem;
    margin:0 auto;
    display: flex;
    flex-direction:column;
    gap:3.2rem;
`

function AppLayout() {
    return (
        <StyledApp>
            <Header />
            <Sidebar />

            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </StyledApp>
    )
}

export default AppLayout