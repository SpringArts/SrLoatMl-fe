import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const token = Cookies.get('token')
    const user = Cookies.get('user')
    return !token && !user ? <Navigate to='/login' /> : <Outlet />
}
