import { DivPesquisa } from "./styled";
import { useState } from "react";

import Button from '../Button'
import PesqDados from "../InputNome";



export const Pesquisa = ({nmPlchdr, nmBtn, nmInpt})=>{
    
    const[inptPrf, setInptPrf]=useState('');

    const getUser = ()=>{
        nmInpt(inptPrf)
        setInptPrf('')
    }

    return (
        <DivPesquisa>
            <p className="tit">Encontre o perfil...</p>

            <PesqDados
                value={inptPrf}
                placeholder={nmPlchdr}
                Dados={(e)=> setInptPrf(e.target.value)}
            />

            <Button
                onClick={getUser} 
                nomeBotao={nmBtn}/>
        
        </DivPesquisa>
    )
}