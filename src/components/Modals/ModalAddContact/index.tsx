import { createPortal } from "react-dom"
import { ModalContainer } from "./styles"
import {Dispatch, SetStateAction, useEffect, useRef} from "react"
import { useForm } from "react-hook-form"
import { AddContactData, AddContactSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Contact } from "../../../pages/Dashboard"
import { api } from "../../../services/api"

interface ModalAddContactProps {
    toggleModal: () => void
    setContacts: Dispatch<SetStateAction<Contact[]>>
}

export const ModalAddContact = ({toggleModal, setContacts}: ModalAddContactProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const {register, handleSubmit} = useForm<AddContactData>({
        resolver: zodResolver(AddContactSchema)
    })

    
    

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(!ref.current) {
                return
            }

            if(!event.target) {
                return
            }

            if(!ref.current.contains(event.target as HTMLElement)) {
                toggleModal()
            }
        }
        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [toggleModal])

    const CreateContact = async (data: AddContactData) => {
        console.log(data)
        const token = localStorage.getItem("client:token")
        const response = await api.post<Contact>("/contacts", data, {
            headers:{
              authorization: `Bearer ${token}` 
            }
        })        

        setContacts(previousContacts => [response.data, ...previousContacts])
        toggleModal()
    }

    return createPortal(
        <ModalContainer>
            <div ref={ref}>
                <form onSubmit={handleSubmit(CreateContact)}>
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
                        <label htmlFor="birthdate">Data de Nascimento</label>
                        <input type="date" id="birthdate" placeholder="Digite a data de nascimento aqui" {...register("birthdate")}/>
                    </div>

                    <div>
                        <label htmlFor="telephone">Telefone</label>
                        <input type="number" id="telephone" placeholder="Digite o número de telefone aqui" {...register("telephone")}/>
                    </div>

                    <div>
                        <label htmlFor="profile_img">Foto do Perfil</label>
                        <input type="text" id="profile_img" placeholder="Digite o link da imagem aqui" {...register("profile_img")}/>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>                
            </div>
        </ModalContainer>,
        document.body
    )
}