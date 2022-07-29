# Consumindo api GitHub com React

Projeto desenvolvido para consumo da api do GITHub, utilizando conceitos aprendidos no curso [TQI FullStack ](https://www.dio.me/bootcamp/tqi-fullstack-developer)Developer ministrado na plataforma de cursos online da [Digital Innovation One](https://www.dio.me/)

## Scripts

Nesse projeto foram utilizados:

- create-react-app (*utilizando npm*)
- styled-components
- axios

Os styled-components foram utilizados para facilitar a criação de componentes estilizados através de códigos JavaScript.Sua documentação é bem rica e vale a pena dar uma conferida *[aqui](https://styled-components.com/docs)*.

O axios é um tipo de protocolo de comunicação para o navegador que facilita o consumo de api's. Embora o Javascript tenha um método nativo *(fetch)*, o axios tem uma grande vantagem justamente por incorporar o fetch e facilitar a conversão do JSON em formato que possa ser trabalhado.

Para criar a base do app, no terminal basta digitar : 
> *`npx create-react-app nome_do_app`*


Esse projeto tem 3  componentes encapsulados em uma div. O primeiro componente tem um campo com um input e um botão *( todos componentes reutilizáveis conforme as boas práticas do React )* solicitando que seja digitado o nome do perfil.

Já o segundo componente apresenta elementos nomeados com *"Aguardando ..."* até que um nome de perfil existente seja digitado . Com isso, esse componente recebe as infos do perfil, como nome , bio e avatar.

Já o terceiro componente recebe os repositórios do perfil com os links para os respectivos correspondentes.

Erros como usuário inexistente ou nenhum usuário digitado, já foram tratados.



Caso queira, pode fazer um clone deste repositório e executar em [http://localhost:3000](http://localhost:3000) pra ver em funcionamento.

Para usar o styled-components deverá instalar no seu projeto primeiro: 

com npm:
> *`npm install --save styled-components`* 

com yarn:
> *`yarn add styled-components`*



Em seguida , a instalação do axios...
>*`npm install axios`*

> *`yarn add axios`*


## Para saber mais 

Você pode acessar a documentação do  [ React App ](https://pt-br.reactjs.org/docs/getting-started.html).

Sobre os [Styled Components ](https://styled-components.com/docs).

Sobre o [Axios](https://axios-http.com/ptbr/docs/intro)