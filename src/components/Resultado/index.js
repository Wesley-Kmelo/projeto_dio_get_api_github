import { useEffect, useState } from "react";
import { DivResultado } from "./styled";

import { Api } from "../../services/Api";

export const ResPerfil = ({ nmPesq, linkRepos }) => {
  const [nmPerfil, setNmPerfil] = useState("");
  const [img, setImg] = useState("");
  const [bio, SetBio] = useState("");
  const [tit, setTit] = useState();


  useEffect(() => {
    if (nmPesq === "" || nmPesq === null || !nmPesq) {
      setTit("Aguardando dados do perfil...");
      setNmPerfil("");
      setImg("");
      SetBio("");
      linkRepos("")

    } else {
      setTit("Esse é o perfil de ");
      Api.get(nmPesq)
        .then((res) => {
          setNmPerfil(res.data.name);
          setImg(res.data.avatar_url);
          SetBio(res.data.bio);
          linkRepos(res.data.repos_url)
          console.log(res);
        })
        .catch((e) => {
          console.log(e)
          setTit("Perfil não encontrado...");
          setNmPerfil("");
          setImg("");
          SetBio("");
          linkRepos("")
        });
    }
  }, [nmPesq]);
  

  return (
    <DivResultado>
      <h1 className="tit">{tit}</h1>
      <h2 className="prf">{nmPerfil}</h2>
      <img className="img_avtr" alt="" src={img} />
      <p className="desc">{bio}</p>
    </DivResultado>
  );
};
