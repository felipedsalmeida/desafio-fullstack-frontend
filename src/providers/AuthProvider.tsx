import { ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginData } from "../components/LoginForm/validator"
import {SignUpData} from "../components/RegisterForm/validator"
import { api } from "../services/api"

interface AuthProviderProps {
    children: ReactNode
}
interface AuthContextValues {
    signIn: (data: LoginData) => void
    signUp: (data: SignUpData) => void
    loading: boolean
}
export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("client:token")

        if(!token) {
            setLoading(false)
            return
        }
        api.defaults.headers.common.Authorization = `Beared ${token}`
        setLoading(false)
    }, [])

    const signIn = async (data: LoginData) => {
        
        try {
            const response = await api.post("/login", data)
            const {token} = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("client:token", token)

            navigate("dashboard")
        } catch (error) {
            console.log("error")
        }
    }
    const signUp = async(data: SignUpData) => {
        console.log(data)
        try {
            await api.post("/clients", data)
            console.log("Cadastro Realizado com sucesso")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <AuthContext.Provider value={{signIn, signUp, loading}}>
            {children}
        </AuthContext.Provider>
    )
}