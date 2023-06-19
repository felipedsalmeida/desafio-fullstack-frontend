import styled from "styled-components"

export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        background: url(../src/assets/img/bg-5.jpg) no-repeat bottom;
        background-repeat: no-repeat;
        inset: 0;
        top: 0; right: 0; bottom: 0; left: 0;
        background-size: cover;
        z-index: -1;
        opacity: 0.5;
    }
`

export const SectionContainer = styled.section`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #0a3d15 3px solid;
    border-radius: 16px;
    background-color: #729b79;
	position: absolute;
	overflow: hidden;
	width: 480px;
	min-height: 480px;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    > h2 {
        font-size: 64px;
        color: #0a3d15;
        font-family: 'Anton', sans-serif;
    }

    form {
        width: 100%;
        padding: 0 32px 0 32px;
        display: flex;
        gap: 16px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
            display: flex;
            gap: 16px;
            width: 100%;
            flex-direction: column;
            label{
                font-size: 16px;
                font-weight: 400;

                color: #0a3d15
            }
            input {
                width: 100%;
                padding-left:12px ;
                background-color: #bacdb0;
                height: 36px;
                border-radius: 4px;
            }
        }
        button {
            width: 50%;
            background-color: #0a3d15;
            height: 36px;
            border-radius: 4px;
            color: #bacdb0;
        }
    }
`

export const DivLogin = styled.div`
    display: flex;
    /* flex-direction: column; */
    background-color: rgba(4,9,30,0.7);
	width: 50%;
    gap: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        width: 100%;
        color: #FFFFFF;
        font-size: 3.2rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        div{
            width: 100%;
            display: flex;
            gap: 12px;
            flex-direction: column;
            align-items: center;

            label {
                display: flex;
                font-size: 1rem;
                font-weight: 400;
                color: #FFFFFF;
                width: 70%;
                justify-content: flex-start;
            }
            input {
                display: flex;
                width: 70%;
                height: 28px;
                border-radius: 8px;
                justify-content: center;
            }            
        }
        button {
                background-color: rgba(4,9,30,0.7);
                display: flex;
                width: 250px;
                height: 28px;
                border-radius: 8px;
                justify-content: center;
                align-items: center;
                color: #FFFFFF;
                
            }
    
    }
	
`

export const DivRegister = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
	width: 50%;
    justify-content: center;
    align-items: center;
    
    h2 {
        font-size: 16px;
        color: #0a3d15;
    }
    a {
        font-size: 12px;
        color: #0a3d15;
    }
`