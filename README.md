### Introdução
Nesse trabalho, vamos dar vida ao layout desenvolvido no trabalho anterior, apresentando informações reais sobre series de TV obtidas dinamicamente a partir da integração com a API The Movie DB (v3) e outras informações obtidas OBRIGATORIAMENTE a partir de um servidor JSON ServerLinks to an external site. que oferece uma API RESTful e servirá como back end da aplicação. 

Você pode evoluir o código para o layout feito no Trabalho Prático 1 ou começar um projeto do zero. Essa decisão fica a cargo de cada um, porém você deve seguir o wireframe que foi simplificado a partir do Trabalho Prático 1 e apresentar as funcionalidades que são apresentadas neste enunciado.

⚠️ IMPORTANTE: O trabalho deve ter foco obrigatoriamente na construção de um portal de séries com informações obtidas do The Movie DB e do JSONServer.  NÃO SERÃO ACEITOS TRABALHOS COM OUTRA TEMÁTICA E COM OUTRAS API. 

## JSONServer
O JSONServer oferece uma API baseada no padrão RESTful para acesso e manipulação de dados dispostos em um arquivo JSON no servidor.

Um exemplo funcional do JSONServerLinks to an external site. está acessível no ambiente do Replit e recomendamos fortemente que você utilize como base para o seu trabalho. Para isso, basta clonar (procedimento de FORK no Replit) e alterar o arquivo db.json, colocando estruturas de dados para sua aplicação.  

## API do The Movie DB
A API do The Movie DB fornece informações sobre filmes e séries de TV. Você precisará criar uma conta no site do The Movie DB e disponibilizamos um tutorial que te orienta como obter uma chave (API Key) utilizada em todas as requisições.

Dentre as funcionalidades providas pela API do The Movie DB, destacamos os seguintes recursos que serão utilizados nesse projeto:  

Search TVLinks to an external site. - pesquisa por séries de TV;
Detalhes de sériesLinks to an external site. - recupera informações detalhadas sobre uma série de TV específica, como título, sinopse, data de lançamento, e informações adicionais;
CréditosLinks to an external site.: retorna o elenco e a equipe de uma série, permitindo visualizar os atores principais e profissionais envolvidos na produção;
Top ratedLinks to an external site. - fornece uma lista das séries de TV mais bem avaliadas pelos usuários no TMDb.
Navegue pela documentação da API do The Movie DB e encontre outras informações que você poderá utilizar na montagem do seu portal de séries.

Para exibir as imagens corretamente, você precisará ler as orientações básicas sobre como adicionar a URLLinks to an external site. base à informação de imagens obtidas nos diversos endpoints da API The Movie DB.

 

### Detalhamento do escopo
O trabalho deve contemplar as seguintes telas e suas funcionalidades descritas em seguida.

Funcionalidades
O trabalho será avaliado com base nas funcionalidades que são descritas para cada uma das telas a seguir:

# Tela 1 - Home-Page (index.html)
A tela deve apresentar um cabeçalho com logo identificando o site e um menu do site 
A tela deve ter uma Seção 1 - Carrosel de séres populares
Deve apresentar as séries mais populares com foto, nome e descritivo em uma estrutura de carrosel (slider).
Os dados das séries devem ser obrigatoriamente obtidas a partir da API The Movie DB.
Deve ter botões para acessar as demais séries em destaque (próxima e anterior)
Ao clicar em uma série, deve direcionar o usuário para a Tela de Detalhes da Série
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
A tela deve ter uma Seção 2 - Cards de séries novas
Deve apresentar um grupo de cards com informações (pelo menos, imagem, nome e detalhes) das séries mais recentes
Os dados das séries devem ser obrigatoriamente obtidos a partir da API The Movie DB.
Ao clicar em uma série, deve direcionar o usuário para a Tela de Detalhes da Série
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
A tela deve ter uma Seção 3 - Informações do autor
Deve apresentar dados que descrevam o aluno autor do projeto. O layout deve ser personalizado pelo aluno e apresentar pelo menos 5 informações.
Os dados devem ser obtidos obrigatoriamente a partir do JSONServer 
Os dados devem apresentar o(a) aluno(a) responsável pelo projeto (pelo menos nome, avatar/foto, minibio, curso, turma, dados de redes sociais) 
A tela deve ter uma Seção 4 - Cards de séries favoritas
Deve apresentar um grupo de cards com informações (pelo menos, imagem, nome e detalhes) das sérias favoritas. As séries serão assinaladas como favoritas pelo usuário ao acessar uma série na tela de detalhes da série. 
Os dados devem ser obtidos obrigatoriamente a partir do JSONServer
Ao clicar em uma série, deve direcionar o usuário para a Tela de Detalhes da Série 
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
 

# Tela 2 - Explorador (explorer.html)
A tela deve apresentar um cabeçalho com logo identificando o site e um menu do site  (mesmo da tela 1 - Home-Page)
A tela deve ter uma Caixa de pesquisa 
Deve permitir que o usuário informe um texto para pesquisar séries
Assim que o usuário informar o texto de pesquisa, e clicar no botão, a tela deve obter as séries que tenham o texto informado no nome e apresentar na seção de cards de resultado.
Os dados das séries devem ser obrigatoriamente obtidos a partir da API The Movie DB.
Ao clicar em uma série, deve direcionar o usuário para a Tela de Detalhes da Série
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
A tela deve ter uma Seção de Cards de séries de resultado
Deve apresentar um grupo de cards com informações (pelo menos, imagem, nome e detalhes) das séries retornadas a partir da pesquisa
Os dados das séries devem ser obrigatoriamente obtidos a partir da API The Movie DB.
Ao clicar em uma série deve direcionar o usuário para a Tela de Detalhes da Série
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
 

# Tela 3 - Detalhe da série (detalhes.html)
A tela deve apresentar um cabeçalho com logo identificando o site e um menu do site  (mesmo da tela 1 - Home-Page)
A tela deve receber a identificação da série a ser exibida por meio de um parâmetro de query string. Ex.: http://servidor/detalhes.html?id=43
A tela deve ter uma Seção 1 - Visão Geral
O layout da seção deve ser personalizado pelo aluno autor do trabalho que deverá escolher pelo menos 5 itens de informação distintos para exibí-los para a série informada via parâmetro na query string.
Deve ser disponibilizado um botão para tornar a série uma favorita, salvando essa informação no JSONServer
Os dados das séries devem ser obrigatoriamente obtidos a partir da API The Movie DB.
A tela deve ter uma Seção 2 - Cards do Elenco
Deve apresentar um grupo de cards com informações do elenco da série (pelo menos imagem e nome)
Os dados das séries devem ser obrigatoriamente obtidos a partir da API The Movie DB.
ORIENTAÇÃO: use componente do bootstrap (detalhes no link)
 

## Estruturas de Dados - JSONServer
Para desenvolvimento desse trabalho, você deve criar estruturas de dados para armazenar os dados do aluno autor e as séries favoritas (Minhas séries). Utilize o projeto de exemplo do JSONServer para se inspirar, faça uma cópia para o seu trabalho. Você deve editar o arquivo db.json e montar as suas estruturas de dados. 

Para a montagem do seu trabalho, deve haver, pelo menos, duas estruturas distintas: (1) perfil do usuário e (2) séries favoritas. As informações básicas e OBRIGATÓRIAS de cada uma das estruturas mencionadas são apresentadas a seguir

# ESTRUTURA DE PERFIL DO USUÁRIO

Identificador do perfil (número sequencial)
Nome do Usuário
Curso do usuário
e-mail
Link Facebook
Link Twitter
Link Instagram
Mini biografia
OBS: Essa estrutura poderá ter um único registro com informações do aluno autor do trabalho. 

 

# ESTRUTURA SÉRIES PREFERIDAS

Identificador do conteúdo (número sequencial)
Identificador da serie preferida (código do The Movie DB)
Identificador do usuário associado ao item preferido 
 

Fluxo das Telas | Wireframe
O fluxo de telas que deve ser implementado na aplicação entregue e os wireframes com os detalhes do escopo são apresentados na imagem a seguir.

IMPORTANTE: Observe que o wireframe fornecido no trabalho prático 1 foi simplificado. Não há mais uma seção de filtro na tela 2 do explorador e nem informações sobre temporadas e episódios na tela de detalhes da série. Essa parte está fora do trabalho prático 2.  

Wireframe - Portal de Séries - 2.png

 

Entrega
Você deve, OBRIGATORIAMENTE, enviar um arquivo compactado no formato ZIP com os arquivos necessários para a execução do site. Você poderá também, em caráter ADICIONAL e OPCIONAL, enviar um link para o site publicado no Replit. A entrega do arquivo ZIP é obrigatória e deve conter a seguinte estrutura, conforme projeto JSONServer, disponibilizado no Replit.

/db
   db.json           ------ Arquivo com as estruturas de dados e os respectivos dados da aplicação
/public              ------ Pasta onde ficam os arquivos da parte frontend do projeto
   index.html
   explorer.html
   detalhes.html
   /assets
       /css
            styles.css
       /img
            img1.jpg
            img2.jpg
            img3.jpg
       /scripts
            app.js
index.js            ------ Arquivo utilizado para executar o JSONServer de forma alternativa
package.json        ------ Configuração do projeto, utilizado pelo node.js na parte de backend
.gitignore          ------ Arquivo de configuração do git com lista de arquivos a serem ignorados 
A orientação necessária para executar e testar o JSONServer e a parte de front end no seu próprio computador está disponível na forma de uma videoaula. Verifique para facilitar o processo de desenvolvimento. 

 

Avaliação por pares
O trabalho será avaliado no esquema de avaliação por pares. Nesse processo, você deve avaliar 3 projetos de outros alunos e isso é obrigatório e impacta na sua pontuação desse trabalho.  

IMPORTANTE: Os trabalhos devem ter identidade visual própria e código fonte original. Cada aluno deve se identificar na Home-Page e fazer o seu trabalho de forma independente. Será realizada uma verificação de originalidade do código fonte e os trabalhos que tiverem partes significativas de código copiado dos demais colegas serão penalizados na nota. 

Para avaliar os trabalhos e atribuir pontos, siga os critérios apresentados abaixo. Seja honesto na avaliação. A nota final será a média das avaliações dos 3 outros colegas, sendo chancelada pelos professores envolvidos. 

CRITÉRIO 1: Formato e responsividade (2 pontos)

2 pontos - Responsividade funcional: O site apresenta adaptação e adequação de conteúdos para a versão mobile e desktop. Componentes se adaptam ao tamanho, imagem segue o padrão do grid, conteúdo ajusta a resolução com uso correto de media queries.
1 pontos - Responsividade parcial: Somente alguns componentes ou elementos HTML se adaptam ao formato móvel, mas o sistema de Grid do Bootstrap está funcional no Desktop.
0 pontos - Sem responsividade - O site não apresenta recuros de responsividade.
 

CRITÉRIO 2: Carrousel de conteúdos sugerido (index.html)  (3 pontos)

3 pontos - Seção de conteúdos dinâmica com dados da API The Movie DB
Carrousel de conteúdos com carga dinâmica dos dados, integrada à API The Movie DB, e apresentando: imagem, título, descrição e com link funcional direcionando para página de detalhes da série;
1,5 ponto - Seção de conteúdos dinâmica, porém incompleta ou com alguns defeitos.
Carrousel de conteúdos com carga dinâmica dos dados, integrada à API The Movie DB, incompleta em termos dos dados apresentados no layout proposto ou com alguns problemas de funcionamento. 
0 ponto - Seção do conteúdos apresentada de forma estática 
Carrousel de conteúdos não integrado à API The Movie DB ou apresentando mensagens de erro.
 

CRITÉRIO 3: Cards de Novas Séries (index.html)  (3 pontos)

3 pontos - Seção de novas séries dinâmica com dados da API The Movie DB
Relação dos novas séries com carga dinâmica dos dados, integrada com a API The Movie DB, apresentando imagem, nome e descrição e com link funcional direcionando para página de detalhes da série;
1,5 ponto - Seção de novas séries dinâmica, porém incompleta ou com alguns defeitos.
Relação dos novas séries com carga dinâmica dos dados, integrada com a API The Movie DB, incompleta em termos dos dados apresentados no layout proposto ou com alguns problemas de funcionamento. 
0 ponto - Seção de novas séries apresentada de forma estática 
Relação dos novas séries não integrado com API The Movie DB ou apresentando mensagens de erro.
 

CRITÉRIO 4: Informações do aluno (index.html)  (3 pontos)

3 pontos - Seção de Informações do aluno dinâmica com dados do perfil carregados via JSONServer
Dados do aluno com carga dinâmica integrada ao JSONServer, e apresentando imagem do perfil, nome do usuário, descritivo do perfil (bio), links das redes sociais;
1,5 ponto - Seção de Informações do aluno dinâmica, porém incompleta ou com alguns defeitos.
Dados do aluno com carga dinâmica integrada ao JSONServer, incompleto em termos dos dados apresentados no layout proposto ou com alguns problemas de funcionamento. 
0 ponto - Seção de Informações do aluno do usuário apresentada de forma estática 
Dados do usuário não integrado com JSONServer ou apresentando mensagens de erro.
 

CRITÉRIO 5: Cards de séries favoritas (index.html)  (3 pontos)

3 pontos - Seção de séries favoritas dinâmica com dados do JSONServer
Cards das séries com carga dinâmica dos dados, integrada com JSONServer, e apresentando: imagem, título, descrição e com link funcional direcionando para página de detalhes da série;
1,5 ponto - Seção de séries favoritas dinâmica, porém  incompleta ou com alguns defeitos.
Cards das séries com carga dinâmica dos dados, integrada com JSONServer, incompleta em termos dos dados apresentados no layout proposto ou com alguns problemas de funcionamento. 
0 ponto - Seção de séries favoritas apresentada de forma estática 
Cards das séries não integrado com JSONServer ou apresentando mensagens de erro.
 

CRITÉRIO 6: Tela de pesquisa (explorer.html)  (4 pontos)

4 pontos - Página de Pesquisa totalmente funcional com link para página externa 
Página de pesquisa que permite ao usuário informar um texto e obter os resultados a partir da API The Movie DB, apresentando os itens com a imagem representativa de cada item e os textos descritivos. Ao clicar em um item dos resultados o usuário é direcionado para uma página externa associada ao item;
2 pontos - Funcionalidade de pesquisa com alguns problemas na montagem dos itens ou no link
Página de pesquisa funcionando integrada à API The Movie DB, porém com alguns problemas na exibição dos itens ou sem o link do item para página externa
0 ponto - Site sem funcionalidade de pesquisa: Nenhuma funcionalidade de pesquisa no site ou estrutura completamente estática.
 

CRITÉRIO 7: Página de detalhes da série (detalhes.html)  (7 pontos)

7 pontos - Página de detalhes completa, totalmente funcional e integrada com API The Movie DB e JSONServer
Página de detalhes com passagem de parâmetro corretamente implementada via query string, carga dinâmica dos dados a partir da API The Movie DB, botão de salvar série como favorita e apresentando todas as informações apresentadas em layout personalizado proposto para a série, com a relação de pessoas do elenco;
4 pontos - página de detalhes dinâmica parcialmente completa, integrada com API The Movie DB
 Página de detalhes com passagem de parâmetro corretamente implementada via query string, carga dinâmica dos dados a partir da API The Movie DB apresentando informações da série em layout personalizado, porém faltando botão para salvar série como favorita ou faltando relação de pessoas do elenco;
2 pontos - Página de detalhes dinâmica, porém incompleta ou com alguns defeitos.
Página de detalhes com passagem de parâmetro corretamente implementada via query string, carga dinâmica dos dados a partir da API The Movie DB, porém incompleta em termos dos dados (sem o elenco / botão de salvar série como favorita) ou com alguns problemas de funcionamento. 
0 ponto - Página de detalhes apresentada de forma estática 
Página de detalhes não integrada com API The Movie DB ou apresentando mensagens de erro.
