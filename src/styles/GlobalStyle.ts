import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@900&family=Poppins:wght@900&display=swap');
    * {
            margin: 0;
            padding: 0;
            outline: 0;
            border: none;
            box-sizing: border-box;
            list-style: none;
            text-decoration: none;
            font-family: 'Poppins', sans-serif;
        }
        body, html {
            width: 100vw;
            height: 100vh;
        }
        :root{
            --color-primary: rgba(143, 94, 31, 0.849)
            --color-secondary: rgba(6, 35, 61, 0.7)
            --color-tertiary: rgba(4,9,30,0.7)
            --white: #FFFFFF


            font-size: 60%
        }
        button {
            cursor: pointer;
        }

        @media (min-width: 700px) {
            :root{
                font-size: 62.5%;
            }
        }
    
`

