import axios from "axios";
import { useEffect, useState } from "react";
import { DivRepositorios } from "./styled";

export const Repos = ({ lnkRps }) => {

  const [repos, setRepos] = useState([]);
  const [resp, setResp] = useState([]);
  const [msgRep, SetMsgRep] = useState("");


  useEffect(() => {
    if (lnkRps === "") {
       SetMsgRep("Aguardando dados de repositório ...");
       setRepos([])

    } else {
      axios
        .get(lnkRps)
        .then((res) => {
          setResp(res.data);
        })
        .catch(() => {
          setResp([]);
          SetMsgRep("Perfil não encontrado...");
        });
    }
  }, [lnkRps]);



  useEffect(() => {
    if (!resp || resp.length === 0) {      
          SetMsgRep("Sem dados de repositório...");
          setRepos([])  
      
    } else {
      SetMsgRep(`Este perfil tem ${resp.length} repositórios`);
      setRepos(resp?.map((item) => 
        <div className="repos">
            <li className="item" key={item.id}>{item.name}</li>
            <p className="desc">{item.description}</p>
            <a className="link"
               href={item.html_url} 
               target="_blank"
               rel="noopener noreferrer">Para saber mais... </a>
        </div>
        ));
    }
  }, [resp]);


  return (
    <DivRepositorios>
      <p className="msg">{msgRep}</p>
      <p className="card-repos">{repos}</p>
    </DivRepositorios>
  );
};
