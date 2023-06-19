import { Dispatch, SetStateAction, useState } from "react"
import { Contact } from "../../pages/Dashboard"
import { api } from "../../services/api"
import editIcon from "../../assets/img/edit_icon.svg"
import deleteIcon from "../../assets/img/delete_icon.svg"
import { CardContainer, DivContactButton, DivContactInfo } from "./style"
import { ModalEditContact } from "../Modals/ModalEditContact"

interface CardProps {
    contact: Contact
    setContacts: Dispatch<SetStateAction<Contact[]>>
}

export const Card = ({contact, setContacts}: CardProps) => {
    // const EditContact = async(data) => {
    //     const response = await api.patch(`/contacts/${contact.id}`, data)

    //     setContacts(response.data)
    // }
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const toggleModalEdit = () => setIsOpenModalEdit(!isOpenModalEdit)
    const DeleteContact = async () => {
        await api.delete(`/contacts/${contact.id}`)
        const response = await api.get<Contact[]>("contacts")
        setContacts(response.data)
        
    }
    return(
        <CardContainer>
            <DivContactInfo>
                <figure>
                    <img src={contact.profile_img}/>
                </figure>
                <div>
                    <h2>{contact.first_name} {contact.last_name}</h2>
                    <p>{`E-mail: ${contact.email}`}</p>
                    <p>{`Telefone: ${contact.telephone}`}</p>
                </div>
            </DivContactInfo>

            <DivContactButton>
                <button onClick={DeleteContact}>
                    <img src={deleteIcon} alt="Delete"/>
                </button>
                <button onClick={toggleModalEdit}>
                    <img src={editIcon} alt="Edit"/>
                </button>
            </DivContactButton>
            {
                isOpenModalEdit && <ModalEditContact toggleModalEdit={toggleModalEdit} setContacts={setContacts} contact={contact}/>
            }
        </CardContainer>
    )
}