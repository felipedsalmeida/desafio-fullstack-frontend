import {Route, Routes} from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { Home } from "../pages/Home"
import { SignUp } from "../pages/Register"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>            
        </Routes>
    )
}