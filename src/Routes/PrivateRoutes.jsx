import {Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Context/AppContext'

const PrivateRoutes = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
  
    return user? <Outlet /> : navigate("/signup")
    
  
}

export default PrivateRoutes