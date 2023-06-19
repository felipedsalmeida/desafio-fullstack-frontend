import { createPortal } from "react-dom"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import {useForm} from "react-hook-form"
import { Contact } from "../../../pages/Dashboard"
import { ModalContainer } from "../ModalAddContact/styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../../services/api"
import { EditContactData, EditContactSchema } from "./validator"
interface ModalEditContactProps {
    toggleModalEdit: () => void
    setContacts: Dispatch<SetStateAction<Contact[]>>
    contact: Contact
}
export const ModalEditContact = ({toggleModalEdit, setContacts, contact}:ModalEditContactProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const {register, handleSubmit, formState:{errors}} = useForm<EditContactData>({
        resolver: zodResolver(EditContactSchema)
    })
    console.log(errors)
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(!ref.current) {
                return
            }

            if(!event.target) {
                return
            }

            if(!ref.current.contains(event.target as HTMLElement)) {
                toggleModalEdit()
            }
        }
        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [toggleModalEdit])

    const EditContact = async(data: EditContactData) => {
        const token = localStorage.getItem("client:token")
        await api.patch<Contact>(`/contacts/${contact.id}`, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        console.log(data)
        
        const response = await api.get<Contact[]>("contacts")
        setContacts(response.data)
        toggleModalEdit()
        
    }

    return createPortal(
        <ModalContainer>
            <div ref={ref}>
                <form onSubmit={handleSubmit(EditContact)}>
                    <div>
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" placeholder={contact.username} {...register("username")}/>
                    </div>
                    <div>                        
                        <label htmlFor="first_name">Nome</label>
                        <input type="text" id="first_name" placeholder={contact.first_name} {...register("first_name")}/>
                    </div>

                    <div>
                        <label htmlFor="last_name">Sobrenome</label>
                        <input type="text" id="last_name" placeholder={contact.last_name} {...register("last_name")}/>
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder={contact.email} {...register("email")}/>
                    </div>

                    <div>
                        <label htmlFor="birthdate">Data de Nascimento</label>
                        <input type="date" id="birthdate" placeholder={contact.birthdate} {...register("birthdate")}/>
                    </div>

                    <div>
                        <label htmlFor="telephone">Telefone</label>
                        <input type="number" id="telephone" placeholder={contact.telephone} {...register("telephone")}/>
                    </div>

                    <div>
                        <label htmlFor="profile_img">Foto do Perfil</label>
                        <input type="text" id="profile_img" placeholder={contact.profile_img} {...register("profile_img")}/>
                    </div>

                    <button type="submit">Editar</button>
                </form>
            </div>
        </ModalContainer>,
        document.body
    )

}