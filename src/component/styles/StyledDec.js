import styled from "styled-components";

export const StyledDec = styled.div`
padding: 2rem;

div:first-child{
    display: flex;
   
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Times New Roman', Times, serif;
    p{
        color:	rgb(0, 150, 255);
        font-size: 1.4rem;
    }
}

div:nth-child(2){
    padding: 30px 0;
    span{
        color:purple;
        cursor: pointer;
        font-size: 1.3rem;
    }
}
`