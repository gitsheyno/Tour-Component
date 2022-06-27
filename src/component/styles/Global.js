import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
  padding:5rem 20px;
  background-color: rgba(230,230,230);
  font-family: 'poppins';
  position: relative;
}
header{
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 80px;
    h1{
        position: relative;
        &:after{
            position: absolute;
            left:50%;
            bottom: -20%;
            transform: translateX(-50%);
            content:'';
            height: 3px;
            display: block;
            width: 10%;
            background-color: rgb(0, 150, 255); 
        }
    }
}
p.alert{
    color:red;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
}
`