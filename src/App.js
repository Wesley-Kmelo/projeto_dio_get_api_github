import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from './components/Button';
import PesqDados from './components/InputNome';

import api from './services/UrlData';



function App() {

const [usuario, SetUsuario] = useState('(Aguardando usuario...)');
const [nome, setNome] = useState("???");
const [msgrepos, setMsgRepos] = useState('...');
const [img, setImg] =useState('');
const [bio, setBio ] = useState("Descrição...");
const [repos, setRepos] = useState('');
const [itemrepo, setItemRepo]= useState([])
const [titulo, setTitulo] = useState("Repositórios do perfil de")

   function getUser () {
    const res =  axios.get (api+usuario)
    .then((res)=>{      
      setNome(res.data.name);
      setMsgRepos("Este perfil tem " + res.data.public_repos + " repositórios")
      setImg(res.data.avatar_url)
      setBio(res.data.bio)
      setRepos(res.data.repos_url)
    })
    .catch(()=>{
      setTitulo("Nenhum perfil")
      setNome("encontrado...")
      setMsgRepos("Sem repositórios...")
      setImg("")
      setBio("Sem descrição")
      setRepos('')
      setItemRepo([])
    })
}; 
          
    useEffect(() => {  
      repos===''?console.log(''):getRepos()
    }, [repos]);


    function getRepos () {
      axios.get(repos)
      .then((res)=>{
        const rep = (res.data)
        setItemRepo(rep)
      })};



  return (
    <>
      <div className='divRepos'>
        <div className='bloco'>
            <div className='pesquisar'>                        
              <p>Digite o nome exato do perfil</p>
                <PesqDados 
                placeholder={"Digite um username válido"} 
                Dados={(e)=>{SetUsuario(e.target.value)}}
                />
                
                <Button nomeBotao={"Pesquisar Perfil"}
                        onClick={getUser}/>
            </div>

            <div className='resultado'>
              <h1>{titulo} </h1>
              <p>{nome}</p>
              <img src= {img} alt='... Aguardando imagem do Perfil...'></img>
              <p className='bio'>{bio}</p>
            </div>        
          </div>

          <div className='msg-repos'>
            <h2>{msgrepos}</h2>       
          </div>

          <div className="card-repos"> 
            {itemrepo.map(item=>
              <div className="card" key= {item.id}>              
                <li>
                  {item.name} 
                  <p>
                  <p>{item.description}</p>
                    <a href={item.html_url}
                       target = "blank">
                    Saiba mais...</a>                     
                  </p>
               </li>
              </div>
            )}   

          </div>
      </div>
    </>
  )
    
};

export default App;