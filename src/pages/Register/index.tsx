import { Link } from "react-router-dom"
import { Register } from "../../components/RegisterForm"
import { DivLogin, MainContainer, SectionContainer } from "./styles"

export const SignUp = () => {
    return(
        <MainContainer>            
            <SectionContainer>                
                <h2>Cadastre-se</h2>
                <Register/>                                
                <DivLogin>
                    <h2>Já é cadastrado?</h2>
                    
                        <Link to={"/"}>
                            Clique Aqui
                        </Link>
                    
                </DivLogin>
            </SectionContainer>
        </MainContainer>
    )
}