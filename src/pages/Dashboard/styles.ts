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

    ul{
        padding: 2% 8%;
        display: flex;
        gap: 36px;
        border-top: red 5px solid;
    }
`