import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, SignInSchema} from "./validator"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
    const {signIn} = useAuth()
    
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(SignInSchema)
    })

    return(
        
        <form onSubmit={handleSubmit(signIn)}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder="Digite seu email aqui" id="email" {...register("email")} />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Digite sua senha" id="password" {...register("password")} />
            </div>

            <button type="submit">Entrar</button>
        </form>
             
    )
}