import styled from "styled-components";

export const Botao = styled.button`
    margin: 10px;
    padding: 3px;
    border-radius:5px;
    font-weight: bold;
    color:rgb(22, 21, 21);
    background-color: rgb(165, 162, 185);
    transition: 0.23ms ease-in-out;
    
    &:hover{
        cursor: pointer;
        background-color: #aaa;
    }
`