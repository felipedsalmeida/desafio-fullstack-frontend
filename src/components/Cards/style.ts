import styled from "styled-components"

export const CardContainer = styled.li`
    width: 350px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 24px;
    border: 2px solid #0a3d15;
    border-radius: 8px;
    background-color: #e9e9e9;
    color: black;
    margin: 10px;

    
`

export const DivContactInfo = styled.div`
    display: flex;
    justify-content: space-between;
    figure {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        text-align: right;
        gap: 6px;
        h2 {
            margin-bottom: 12px;
            font-size: 24px;
            color: #0a3d15;
        }
        p{
            font-size: 12px;
        }
    }
`
export const DivContactButton = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;

    button {
        background-color: transparent;
        color: aqua;
    }
`
