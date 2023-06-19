import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Menu } from "../../components/Menu"
import { Card } from "../../components/Cards"
import { MainContainer } from "./styles"
import { DivContact } from "../../components/Menu/style"
import { ModalAddContact } from "../../components/Modals/ModalAddContact"

export interface Contact {
    id: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    birthdate: string,
    telephone: string,
    profile_img: string,
    created_at: string,
    updated_at: string
}
export const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false)
    
    useEffect(() => {
        (async() => {
            const response = await api.get<Contact[]>("contacts")
            setContacts(response.data)
        })()
    }, [])

    const toggleModal = () => setIsOpenModal(!isOpenModal)
    

    return(
        <>
            <MainContainer>
                <Menu/>
                <DivContact>
                    <button type="button" onClick={toggleModal}>
                        Adicionar Contatos                     
                    </button>
                </DivContact>
                {
                    isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts}/>
                }
                
                <ul>
                    {
                        contacts.map(contact => <Card key={contact.id} contact={contact} setContacts={setContacts}/>)
                    }
                </ul>
            </MainContainer>
        </>
    )
}