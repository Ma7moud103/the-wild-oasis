import React, { useEffect } from 'react'
import UseUser from '../features/authentication/UseUser'
import Spinner from '../ui/Spinner'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const FullPage = styled.div`
    height: 100vh;
    background-color:var(--color-grey-50);
    display: flex;
    align-items:center;
    justify-content:center;
`
function ProtectedRoute({ children }) {

    const navigate = useNavigate()
    const { isLoading, user, isAuthenticated } = UseUser()




    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login")
    }, [isAuthenticated, isLoading, navigate]);





    if (isLoading) return (<FullPage>
        <Spinner />
    </FullPage>)




    if (isAuthenticated) return children


}

export default ProtectedRoute