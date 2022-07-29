import styled from "styled-components";

export const DivRepositorios= styled.div`
    display:flex;
    flex-direction: column;
    margin: 1% 9%;
    padding: 17px;
    height: 30px;
    color: rgb(57, 52, 126);
    font-size: 18px;
    font-weight: 900;
    border-radius: 12px;
    
    .repos{
        background-color: gray;
        padding: 3px 3px 3px 16px;
        align-items: left;
        margin: 8px 0px 23px 0px;
        border-radius: 9px;
    }
    
    .desc, .link, .item{
        border-radius: 9px;
        background-color: gray;
        position: relative;
    }
    .item{
        text-transform:uppercase;
        font-style: italic;
        text-decoration: underline;
    }
    .link{
        text-align:center;
        text-decoration: none;
        color: red;
        :hover{
            color: white;
            font-style: italic;
            transition: .3ms ease-in-out;
        }
    }
    .desc{
        margin: 2px 0px 4px 37px;
        word-wrap: break-word;
    }
    .msg{
        margin: 0px 0px 10px 0px;
        text-align: center;
        color:rgb(57, 52, 126);
        font-size: 23px;
    }
`