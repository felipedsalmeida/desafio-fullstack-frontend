import { Link } from "react-router-dom"
import { Login } from "../../components/LoginForm"
import { DivRegister, MainContainer, SectionContainer } from "./styles"

export const Home = () => {
    return(
        <MainContainer>
                       
            <SectionContainer>                
                <h2>Login</h2>
                <Login/>                
                <DivRegister>
                    <h2>Ainda não é cadastrado?</h2>                    
                    <Link to={"/register"}>
                        Clique Aqui
                    </Link>                    
                </DivRegister>
            </SectionContainer>
            
        </MainContainer>
    )
}