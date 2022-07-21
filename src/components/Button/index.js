import React from 'react';
import { Botao } from './styled';



const Button = ({nomeBotao, onClick}) => {
    return ( 
         <Botao onClick={onClick}>
            {nomeBotao}
         </Botao>
    );
}
 
export default Button;