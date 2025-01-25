import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GlobalStyles from "./styles/GlobalStyles"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Account from './pages/Account'
import Settings from './pages/Settings'
import NewUsers from './pages/Users'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import AppLayout from './ui/AppLayout'
import { Toaster } from 'react-hot-toast'
import Booking from './pages/Booking'
import CheckIn from './pages/CheckIn'
import ProtectedRoute from './ui/ProtectedRoute'
import { DarkModeProvider } from './context/DarkModeContext'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Store } from './Store'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

const theme = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};
function App() {

  return (

    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Provider store={Store}>
            <BrowserRouter>
              <Routes>
                <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='cabins' element={<Cabins />} />
                  <Route path='bookings' element={<Bookings />} />
                  <Route path='bookings/:bookingId' element={<Booking />} />
                  <Route path='checkin/:bookingId' element={<CheckIn />} />
                  <Route path='users' element={<NewUsers />} />
                  <Route path='settings' element={<Settings />} />
                  <Route path='account' element={<Account />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 2000
            },
            error: {
              duration: 4000
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)"
            }
          }}
        />
      </QueryClientProvider>

    </DarkModeProvider>
  )
}

export default App