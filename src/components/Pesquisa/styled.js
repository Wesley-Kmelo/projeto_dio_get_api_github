import styled from "styled-components";

export const DivPesquisa = styled.div`
    display:flex;
    margin: 10px;
    height: calc(80vh - 240px);
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(125, 189, 135);;
    border-radius: 12px;

    &
    .tit{
        background-color: rgb(125, 189, 135);
        font-size:18px;
        font-weight: 547;
        font-style: italic;
    }

    @media screen and (min-width: 200px) and (max-width: 680px){
        height: 80%;
        width: 86%;
        .tit{
            font-size: 18px;
        }
    }

`