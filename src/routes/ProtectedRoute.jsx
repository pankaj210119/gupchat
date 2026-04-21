import {useAuth} from "../context/authContext"
import {Navigate} from "react-router-dom"
const ProtectedRoute = ({children}) => {
    const {user} = useAuth();
    return user ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;