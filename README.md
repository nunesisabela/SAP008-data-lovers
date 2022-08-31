# #02 Projeto Laboratória - Data Lovers

## Prefácio
* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição do produto](#2-definição-do-produto)
* [3. Aplicação](#3-aplicação)
* [4. Repositório](#4-repositório)
* [5. Deploy](#5-deploy)
* [6. Checklist](#6-checklist)
* [7. Desenvolvedoras](#7-desenvolvedoras)

## 1. Resumo do projeto
Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read), 90% dos dados que existem hoje foram gerados durante os últimos dois anos. São gerados 2.5 milhões de terabytes de dados diariamente. Apesar disso, os dados por si só são de pouca utilidade. Para que sejam convertidos em **informação** compreensível para os usuários, é preciso entender e processar esses dados. Uma forma simples de fazer isso é criando _interfaces_ e _visualizações_.

Neste projeto, foi criada a segunda aplicação web do bootcamp Laboratória, de interface amigável e compreensível. Nela, o usuário pode fazer suas pesquisas acerca do tema Rick and Morty de acordo com os filtros que prefira (gênero ou status), acessar a resposta à pequisa realizada por ordem alfabética, ordem alfabética reversa e por episódio e obter a porcentagem que o resultado dos filtros aplicados representa em relação à série.

### Rick and Morty
Rick and Morty é uma série de televisão de animação americana para adultos que traz as experiências do cientista Rick e seu neto,
Morty, nas infinitas possibilidades que o universo permite, abordando moralidade, ética, aspectos sociais, física, química, entre outros. 

## 2. Definição do produto
A série é muito bem recebida mundialmente, e de todo esse grupo de fãs, há uma parte que deseja acessar as informações dos personagens e da série, em geral. Assim sendo, as informações mais interessantes para acessar e satisfazer esse público são:
  - nome dos personagens;
  - imagem dos personagens;
  - gênero;
  - espécie;
  - local de origem;
  - episódios em que aparecem.
    
Tais informações podem ser entregues ao usuário por intermédio de uma lista de personagens que pode ser filtrada pelo item que melhor lhe atenda. 
### História do usuário
Foram definidas 02 histórias de usuário para este projeto:
  01. "A fim de não receber spoilers, como um novo espectador da série, quero poder pesquisar somente sobre os personagens que estão vivos na trama."
  02. "Como uma estudante de sociologia, eu posso filtrar os episódios por em quais aparecem mulheres, a fim de desenvolver uma pesquisa sobre representação de personagens femininas em animações adultas."

### Definição de pronto
A fim de definir a aplicação, a partir das histórias de usuário, obtem-se a definição de pronto referente a cada uma delas
  01. Para que esta história seja atendida, é necessário:
  - Um campo de pesquisa com palavra-chave;
  - Uma seção de filtragem com opção de selecionar o filtro de “status” (vivo/morto/desconhecido) que deseja aplicar, por intermédio de selects;
  - Botão “Buscar” para disparar a função de filtragem;
  - Exibição de CARDS contendo as informações principais (imagem, nome e local de origem) dos personagens que atendem à filtragem.

02. Para que esta história seja atendida, é necessário:
  - Um campo de pesquisa com palavra-chave;
  - Uma seção de filtragem com opção de selecionar o filtro de “gênero” (feminino/masculino/sem gênero) que deseja aplicar, por intermédio de selects;
  - Botão “Buscar” para disparar a função de filtragem;
  - Exibição de CARDS contendo as informações principais (imagem, nome e local de origem) dos personagens que atendem à filtragem.
  
## 3. Aplicação 
Para este projeto, imaginou-se uma aplicação condizente com o tema da série, considerando aspectos intergalácticos e tecnológicos. As tipografias escolhidas foram [K2D](https://br.maisfontes.com/k2d-bold.fonte), para textos corridos e informações mais extensas, e [Atma](https://br.maisfontes.com/atma.fonte) com stroke, para os nomes dos personagens e para os botões "Filtrar" e "Buscar", além do botão "Recomeçar". 

O layout conta com a [logo](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/rick_and_morty_header.png) de Rick and Morty na `<main>`, em conjunto com um texto introdutório. Abaixo do texto, a tag `<form>` delimita o `<input>` de texto com o `placeholder` "Palavras-chave" com os `<buttons>` de filtragem, recomeço e busca. Ao clicar em "Filtrar", uma `<section>` com `<select>` é exibida, contendo as `options` filtradoras Status (vivo/morto/desconhecido) e Gênero (feminino/masculino/sem gênero). Os cards e os botões "Filtrar", "Recomeçar" e "Buscar" utilizam as cores `#73D8CC` e `#78C742`

### Prototipagem
O processo de prototipagem foi dividido em duas etapas; na primeira, em baixa fidelidade, foram feitos sketches para visualizar a ideia, com cada elemento imaginado desenhado à parte para que fosse possível movimentá-los, visualizar possibilidades e chegar ao melhor layout. Já na segunda, em alta fidelidade, foi utilizada a ferramenta Figma. O resultado segue abaixo:
  - Baixa fidelidade
  
  ![baixa_fidelidade_web](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/low_web.gif) 
  
  ![baixa_fidelidade_mobile](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/low_mobile.gif)
  
  - Alta fidelidade
  
  ![alta_fidelidade_web](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/high_web.gif)
  
  ![alta_fidelidade_mobile](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/high_mobile.gif)
### Paleta de cores e imagens externas
A paleta de cores foi feita por intermédio da ferramenta [Adobe Color](https://color.adobe.com/pt/create/color-wheel) e resultou no seguinte:
![paleta_data_lovers](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/paleta_data_lovers.png?raw=true)
Também foram utilizadas a imagem de uma [galáxia](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/bg_img_galaxy.jpg) para o background e um gif do [portal](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/portal_gif.gif) de teletransporte contido na série.

## 4. Repositório
O repositório é o espaço digital que armazena um código e as versões que podem advir dele. Neste caso, o repositório está hospedado no GitHub, onde é possível criar um perfil - um espaço próprio do usuário para guardar códigos. O ideal é ter um repositório por projeto. Para tanto, é possível criar um repositório e nomeá-lo ou forkar um repositório já existente (de outro perfil) para fazer as próprias mudanças sem alterar o arquivo original. No caso de um novo repositório criado, é importante acessar a pasta do computador onde o repositório está por meio do terminal e usar o comando `git init` (no caso de GitBash, terminal do Linux, terminal do Ubuntu). Para este repositório cujo README vos fala, isso não é necessário.

### Fork
`Fork` é a ação de bifurcar um repositório, ou seja, é como se o repositório original fosse um bonde com passageiros dentro (códigos) que trilha um caminho que, em dado momento, é bifurcado (fork) e agora segue dois caminhos distintos, porém com um passado em comum. Da mesma forma, o repositório disponibilizado por um Usuário A possui arquivos e códigos que, quando "forkados" por outro Usuário B, seguem o caminho que o Usuário B determinar sem afetar o repositório original, disponibilizado pelo Usuário A. Para acessar este repositório, cujo README vos fala, é preciso forká-lo. Para isso, basta clicar em `Fork`, no canto direito superior da página deste repositório no GitHub.

### Clone
`Clone` é a ação de clonar o repositório forkado para a máquina na qual o(s) código(s) é(são) alterado(s). Clonar o repositório forkado permite que o computador acesse todos os arquivos dentro do repositório clonado. Para clonar o repositório forkado, que, agora, pertence ao usuário que forkou, basta:
- Clicar no botão `Code` **na página do repositório do usuário que forkou**;
- Copiar a url-do-repositório ali disponibilizado; 
- Abrir o Terminal;
- Acessar a pasta para onde deseja clonar o repositório;
- Rodar o comando `git clone <url-do-repositório>`.

### Fork and Knife
No caso deste projeto, que foi realizado em dupla, o `fork` foi feito por apenas uma das partes da dupla. Após somente a integrante Érica forkar, ela e a integrante Isabela clonaram o mesmo [repositório](https://github.com/blericalopes/SAP008-data-lovers) para suas respectivas máquinas. A integrante Isabela não precisou forkar o [repositório](https://github.com/Laboratoria/SAP008-data-lovers) advindo da página da Laboratória no GitHub.

## 5. Deploy
`Deploy` é a ação de colocar o código no ar. Quando um código/aplicação é "deployado", significa que ele já está disponível para ser acessado como qualquer outro site, por intermédio da URL colocada na barra de endereço do navegador. Para "deployar", basta:
- Acessar a pasta com os arquivos a serem adicionados no Terminal;
- Rodar o comando `npm run deploy` no Terminal.

## 6. Checklist
* [✓] Uso de HTML Semântico
* [✓] CSS
  - Uso de seletores
  - Empregar Box Model
  - Uso de Flexbox
* [✓] Web APIs
  - Seletores DOM
  - Manipulação de eventos DOM
  - Manipulação dinâmica DOM
* [✓] JavaScript
  - Diferenciar dados primitivos de dados não primitivos
  - Manipular Arrays
  - Manipular Objects
  - Variáveis
  - Uso de condicionais
  - Uso de laços
  - Uso de funções
  - Testes unitários
  - Modelo de ECMAScript
  - Uso de linter (ESLINT)
  - Uso de identificadores descritivos (nomenclatura semântica)
  - Expression x Statements
* [✓] Controle de versões Git e GitHub
  Git:
  - Instalação e configuração
  - Controle de versão com Git (init, clone, add, commit, push, status, pull, remote)
  - Interação de mudanças entre ramos (branch checkout, merge, reset, rebase, tag, fetch)
  GitHub:
  - Criação de contas e repositórios
  - Configuração da chave SSH
  - Implementação com GitHub Pages
  - Colaboração por GitHub (branches, forks, pull requests, code review, tags)
* [✓] User-centricity
  - Idealizar a aplicação de acordo com a necessidade do usuário  
* [✓] Product-design
  - Criar protótipos para obter feedback e iterar
  - Aplicar princípios de desenho visual (contraste, alinhamento, hierarquia)
* [✓] Research
  - Planejar e executar testes de usabilidade
## 7. Desenvolvedoras
Projeto desenvolvido por Érica Lopes e Isabela Nunes - Laboratória SAP-008 - 2022
<table>
  <tr>
    <td alig="center">
      <a href="https://github.com/blericalopes">
        <img align="center" src="https://avatars.githubusercontent.com/u/108770517?v=4" width="100px" alt="Foto de Érica Lopes"/><br>
        <sub>
          <b>Érica Lopes</b>
        </sub>
      </a>
    </td>
    <td alig="center">
      <a href="https://github.com/nunesisabela">
        <img align="center" src="https://avatars.githubusercontent.com/u/107049807?v=4" width="100px" alt="Foto de Isabela Nunes"/><br>
        <sub>
          <b>Isabela Nunes</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
