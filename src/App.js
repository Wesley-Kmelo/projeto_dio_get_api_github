import './App.css';
import { useState } from 'react';

import { Pesquisa } from './components/Pesquisa';
import { ResPerfil } from './components/Resultado';
import { Repos } from './components/Repositorios';


function App() {

  const [nmInptPrf, setnmInptPrf] = useState("");
  const [lnkrepos, setLnkRepos] =useState('')


   function getInpt (nome){
      setnmInptPrf(nome)    
  }    

   function getLinkRepos (lkrps){
    setLnkRepos(lkrps)
   }



  return (
  
      <div className='divRepos'>
       
        <div className='bloco'>

            <Pesquisa 
                nmPlchdr={"Digite o perfil"}
                nmBtn={"Pesquisar perfil..."}
                nmInpt={getInpt}/>

            <ResPerfil 
                nmPesq={nmInptPrf}
                linkRepos={getLinkRepos}/>

        </div>
            <Repos lnkRps={lnkrepos} />
      </div>
  
  )
};

export default App;