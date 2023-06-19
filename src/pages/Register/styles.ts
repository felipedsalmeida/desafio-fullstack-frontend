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
                padding-left: 12px;
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

