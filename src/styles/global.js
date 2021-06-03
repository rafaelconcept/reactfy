import { createGlobalStyle } from 'styled-components'
import RobotoBold from "../fonts/Roboto-Bold.ttf"

export default createGlobalStyle`
  

  @font-face {
        font-family: "Roboto-Bold";
        src: local("Roboto-Bold"),
        url(${RobotoBold}) format("truetype");
    }


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Roboto-Bold', serif;
        font-size: 14px;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiased !important;

    }

    ul {
        list-style: none;
    }
`;
