import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUpData, SignUpSchema } from "./validator"
import { useAuth } from "../../hooks/useAuth"


export const Register = () => {
    const {signUp} = useAuth()
    
    

    const {register, handleSubmit} = useForm<SignUpData>({
        resolver: zodResolver(SignUpSchema)
    })


    return(
        <form onSubmit={handleSubmit(signUp)}>
            <div>
                <label htmlFor="username">Usuário</label>
                <input type="text" id="username" placeholder="Digite o usuário aqui" {...register("username")}/>
            </div>

            <div>
                <label htmlFor="first_name">Nome</label>
                <input type="text" id="first_name" placeholder="Digite o nome aqui" {...register("first_name")}/>
            </div>

            <div>
                <label htmlFor="last_name">Sobrenome</label>
                <input type="text" id="last_name" placeholder="Digite o sobrenome aqui" {...register("last_name")}/>
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite o e-mail aqui" {...register("email")}/>
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite a senha aqui" {...register("password")}/>
            </div>

            <div>
                <label htmlFor="birthdate">Data de Nascimento</label>
                <input type="date" id="birthdate" placeholder="Digite a data aqui" {...register("birthdate")}/>
            </div>

            <div>
                <label htmlFor="telephone">Telefone</label>
                <input type="number" id="telephone" placeholder="Digite o número aqui" {...register("telephone")}/>
            </div>

            <div>
                <label htmlFor="profile_img">Foto do Perfil</label>
                <input type="text" id="profile_img" placeholder="Digite o link aqui" {...register("profile_img")}/>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
                
        
    )
}