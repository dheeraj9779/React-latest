import { Navigate, Outlet } from "react-router"

export const PrivateRoute = ({children}) => {
    const user = localStorage.getItem('users')

    return user ? children : <Navigate to="/"/>
}