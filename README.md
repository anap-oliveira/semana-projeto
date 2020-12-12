### ***Pretas em Poesia***

*Banco de Dados para mulheres pretas que soltam o grito da sua resistência na poesia.*



![Badge](https://img.shields.io/github/issues/anap-oliveira/semana-projeto)

![Badge](https://img.shields.io/badge/deploy-heroku.com-orange)

![Badge](https://img.shields.io/badge/status-success-brightgreen)

![Badge](https://img.shields.io/github/license/anap-oliveira/semana-projeto)





<img src="public/images/pretas-em-poesia.png" width="300">



####  ***Sumário:*** 

- [Apresentação](#Apresentação)
- [Ferramentas Necessárias](#Ferramentas-Necessárias)
- [Features da API](#Features-da-API)

- [Rotas da API](#Rotas-da-Api)
- [Fonte de Dados e Referência](#Fonte-de-Dados-e-Referência)
- [Agradecimentos](#Agradecimentos)
- [Para o futuro](#Para-o-futuro)



#### ***Apresentação***

O Projeto tem o interesse em reunir mulheres negras enquanto um mecanismo de resistência em sua fala e seus escritos, buscando referenciar e resgatar a produção autoral de poetisas negras (brasileiras) como Conceição Evaristo, Carolina Maria de Jesus, Cristiane Sobral, Cidinha da Silva, Elisa Lucinda, dentre outras e, principalmente, incentivar e valorizar a produção autoral das mulheres negras.

Sendo assim, contribuir para um contexto do qual, cada vez mais, mulheres negras estão buscando e lutando por mais representatividade nos espaços institucionalizados, políticos, sociais e acadêmicos.

![foto](https://colecaomossoroense.org.br/site/wp-content/uploads/2019/04/slampoesia_logo.jpg)



#### ***Ferramentas Necessárias***

#### **<u>Para criar a API:</u>**

- **Node.js**, versão 12.18.3;

- Gerenciador de pacotes node **npm**, versão 6.14.6;

- As dependências node:

  - **Express** versão 4.17.1;
  - **Mongoose** versão 5.10.17;
  - **Dotenv-safe** 8.2.0;
  - **Bcrypt** 5.0.0;

- Banco de Dados NoSQL **MongoDB**;

- Editor de códigos **VSCode**.

  

#### **<u>Para usabilidade da API:</u>**

- **Postman**: para teste das funcionalidades (rotas) da API;
- **Heroku.com**: *deploy* da aplicação na web;
- **MongoDB Atlas**: hospedagem do banco de dados na nuvem.



#### ***Features da API***

- [x] Listar as participantes cadastradas.
- [x] Pesquisar participantes pelo ID.
- [x] Adicionar/Cadastrar nova participante.
- [x] Alterar dados cadastrais das participantes por ID.
- [x] Remover uma ou mais participante.



#### ***Rotas da API***

*Utilizaremos os seguintes métodos na construção da API:*

|  VERBO   |               DESCRIÇÃO                |       ROTAS        |
| :------: | :------------------------------------: | :----------------: |
|   GET    |    Listar todas as inscritas no BD.    |   /participantes   |
| GET ById |      Listar as inscritas por id.       | /participantes/:id |
|   POST   | Adicionar/Cadastrar nova participante. |   /participantes   |
|   PUT    |     Editar as informações pelo id.     | /participantes/:id |
|  DELETE  |   Remover uma ou mais participante.    | /participantes/:id |




#### ***Fonte de Dados e Referência:***

*Mulheres pretas e suas resistências poéticas:*

[Fonte Referencia](https://www.ufmg.br/prae/acoes-afirmativas/projetos-apoiados-em-2017/preta-e-poeta/)

A escrita e a declamação representam ferramentas de expressão importantes para aquelas que, sistematicamente, não tiveram acesso ao direito de fala e que, por meio da escrita, conseguem externar, codificar e, possivelmente, compartilhar a própria produção, se convencendo da potencialidade da própria escrita. Além de nos entendermos enquanto, autor e autoridade do que escreve, contando a própria história e não mais como mero sujeito sob o olhar analítico do outro. A intenção é integrar o processo de produção autoral com o de declamação mediante o Sarau, afim de dar voz àquilo que sempre esteve escrito mas que ainda não sabemos qual entonação a voz projetará ou qual expressão o corpo fará a partir do momento que, se possibiliza um espaço de compartilhamento para se expressar e historicamente marginalizado, que vem, cada vez mais, buscando e ressignificando os espaços políticos, institucionais e sociais a partir do momento da sua inserção e expressão das suas demandas específicas.



![foto](https://aestranhamente.com/wp-content/uploads/2017/03/slam-1568x882.jpg)



#### ***Agradecimentos***

*A Reprograma juntamente com o Porto Digital Minas que proporcionou estar presente nesse Grupo de mulheres incríveis, onde nos fortaleceu diariamente, sou grata a cada uma que compõe a nossa turma.*

*A nossa facilitadora Raíssa, nossas professoras, monitoras e orientadoras que sempre se dispuseram a nos ajudar.* 
*Gratidão!*  



#### **<u>Para o Futuro:</u>**

*Está API além de servir como Banco de Dados das poetas, irá ser alimentada futuramente para criação de SLAM ("Batalhas Poéticas"), inicialmente por bairros e estados.*