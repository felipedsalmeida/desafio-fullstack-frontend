import styled from "styled-components"

export const HeaderContainer = styled.header`
    padding: 2% 8%;
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ecfeaa;
    
    div {
        display: flex;
        align-items: center;
        gap: 32px;
        figure {
            width: 64px;
            height: 64px;
            border-radius: 12px;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        h2 {
            color: #0a3d15;
        }
    }

    button {
        height: 32px;
        background-color: transparent;
    }
        
        
`

export const DivContact = styled.div`    
    width: 100%;
    padding: 1% 8%;
    display: flex;
    background-color: rgb(226, 222, 132);
    border-top: 1px solid rgba(143, 94, 31, 0.847);
    border-bottom: 1px solid rgba(143, 94, 31, 0.847);

    button{        
    width: 240px;
    display: flex;
    justify-content: center;
    padding: 6px 6px;
    background: rgb(10, 61, 21);
    color: rgb(255, 255, 255);
    border: 2px solid rgb(134, 131, 109);
    border-radius: 4px;
    }
`