
import { EntradaDados } from './styled';


const PesqDados = ({value,placeholder, Dados}) => {


    return(
        <EntradaDados 
            value={value}
            onChange={Dados}
            placeholder={placeholder}            
            >
        </EntradaDados>
 );
}

export default PesqDados;