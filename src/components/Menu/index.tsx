import { useEffect, useState } from "react"
import { HeaderContainer } from "./style"
import { api } from "../../services/api"
import logoutIcon from "../../assets/img/logout-icon.svg"
import { useNavigate } from "react-router-dom"
export interface Client {
    
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
export const Menu = () => {
    const navigate = useNavigate()
    const [client, setClient] = useState<Client>()
    useEffect(() => {
        (async () => {
            const response = await api.get<Client>("clients")
            setClient(response.data)
        })()
    }, [])

    const logout = () => {
        localStorage.removeItem("client:token")
        navigate("/")
    }
    

    return (
        <>
            <HeaderContainer>
                <div>
                    <figure>
                        <img src={client?.profile_img}/>
                    </figure>
                    <h2>{`Seja bem-vindo(a), ${client?.first_name} ${client?.last_name}.`}</h2>
                </div>
                <button type="button" onClick={logout}>
                    <img src={logoutIcon} />
                </button>
            </HeaderContainer>

            
        </>
    )
}