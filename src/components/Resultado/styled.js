import styled from "styled-components";

export const DivResultado = styled.div`
    display:flex;
    margin: 5px;
    padding: 10px;
    margin-top: 10px;
    height: calc(80vh - 240px);
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(125, 189, 135);
    border-radius: 12px;
    
    & 
    .tit{
        font-size: 20px;
        background-color: rgb(125, 189, 135);
    };
    .prf{
        background-color:rgb(125, 189, 135);
        color: #352;
        text-shadow: 2px 2px  gray;
    }
    .img_avtr{
        background-color: rgb(125, 189, 135);
        margin: auto;
        padding: 10px;
        width:120px;
        height:123px;
        border-radius: 50%;
    }
    .desc{
        background-color: rgb(125, 189, 135);
        color: black;
        font-size: 15px;
    }
    @media screen and (min-width: 200px) and (max-width: 680px){
        height: 80%;
        width: 86%;
        .tit{
            font-size: 18px;
        }
        .img_avtr{
            height: 60%;
            width: 40%;
        }
        .prf{
            font-size: 22px;
        }
        .desc{
            font-size: 12px;
            font-weight: 450;
        }
    }

`