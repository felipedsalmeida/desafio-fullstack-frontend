import styled from "styled-components"

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;


    > div {
        border: #0a3d15 3px solid;
        border-radius: 16px;
        background-color: #729b79;
        padding: 20px;
        
        width: 100%;
        max-width: 480px;

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
    }
`