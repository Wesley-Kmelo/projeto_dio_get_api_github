import React, { useState } from 'react';
import { EntradaDados } from './styled';


const PesqDados = ({placeholder, Dados}) => {


    return(
        <EntradaDados 
            onChange={Dados}
            placeholder={placeholder}            
            >
        </EntradaDados>
 );
}

export default PesqDados;