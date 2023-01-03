# Desafio RD Station
<p>
Esta API foi desenvolvida como parte do processo seletivo da RD Station. Sua funcionalidade principal é busca de informações sobre os lançamentos efetuados e programados da empresa SpaceX disponíveis em sua API Pública.

A documentação da API da SpaceX pode ser encontrada neste link: https://github.com/r-spacex/SpaceX-API
<p>

<br>

# Stack
Para a cons trução dessa API foram utilizadas as seguinte bibliotecas:

<br>

## NestJS
<img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="NestJS framework" width="24" />

<br>
Framework em JavaScript para o desenvolvimento de aplicações da web, utilizando o Node.js.
Dentre os benefícios em utilizar este framework que levaram à sua escolha, estão:
* Estrutura de aplicação clara e consistente que permite criação e gerenciamento de aplicações de maneira facilitada;
* Boa integração com bibliotecas e frameworks populares;
* Uma biblioteca de ferramentas próprias que facilitam muito os trabalhos mais corriqueiros no dia-a-dia como logs, autenticação e permissões, testes, etc.
* Boa e rica documentação, o que facilita muito o aprendizado e uso do framework.

<br>

## Axios
<img src="https://axios-http.com/assets/logo.svg" width="100" />

<br>
Uma biblioteca JavaScript que permite o uso de solicitações HTTP assíncronas, utilizada principalmente para conexão e consumo de API's. É uma ferramenta de fácil utilização com uma sintaxe clara e intuitiva. Além disso, suporta o cancelamenteo de solicitações, envio de cookies, autenticação e muito mais. Seu uso tem se tornado bastante popular principalmente por ser compatível com a maioria dos navegadores e poder ser utilizada tanto no lado do cliente quanto no servidor.

<br>

## Swagger
<img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" width="100" />

Ferramenta de documentação de API's que permite a criação e manutenção de documentações de maneira simplificada. É utilizada para descrever a interface de API's, incluindo os endpoints disponíveis, os parâmetros de entrada e os tipos de dados de retorno.

Além disso, ainda fornece ferramentas para testar as API's diretamente na documentação.
<br>
<br>

# Estrutura
A aplicação está distribuiída na seguinte estrutura:
* ```src``` <br>
    diretório onde encontram-se as funcionalidades da aplicação
  * ```src/main.ts``` <br>
  é o primeiro arquivo a ser executado, é nele que a aplicação será criada, configurada e o servidor é iniciado.
  * ```src/app.module.ts``` <br> 
  o arquivo do módulo principal da aplicação. É o arquivo responsável por importar todos os módulos e disponibilizar os serviços que serão compartilhados pela aplicação.
  * ```src/launches/``` <br> 
  nesta pasta estão todos os arquivos do módulo `launches`, responsável pelos recursos de busca e gerenciamento de lançamentos da SpaceX.
    * ```src/launches/launches.module.ts``` <br> 
    arquivo responsável pela criação, * configuração e gerenciamento do módulo de `launches` da API
    * ```src/launches/launches.controller.ts``` <br> 
    o controller responsável por expôr os endpoints da funcionalidade
    * ```src/launches/launches.services.ts``` <br>
    o service responsável por fazer a conexão com a API pública da SpaceX, buscar os dados e gerenciar os erros de conexão
  
  
  <br>

# Instalação e uso local
Para baixar, instalar e utilizar a API localmente verifique primeiro se o computador possui instalados o `NodeJS` (versão 12 ou superior) e o `npm` (versão 6 ou superior).

Cumpridos estes pré-requisitos, basta seguir os seguintes passos:

1. Faça o clone do repositório: 
  ```bash
  git clone https://github.com/luizheming/rd-challenge-api
  ```

2. Acesse a pasta do projeto
  ```bash
  cd rd-challenge-api
  ```

3. Instale as dependências do projeto
  ```bash
  npm install
  ```
4. Crie o arquivo `.env` baseado no `.env.example` 
  ```bash
  cp .env.example .env
  ```
5. Execute a API
  ```bash 
  npm run start:dev
  ```

# Documentação

A documentação construída com o Swagger pode ser acessada através link abaixo. Lá você encontrará uma descrição dos endpoints da API, incluindo os parâmetros de entrada e saída de cada um deles. Após rodar a aplicação localmente, a documentação poderá ser acessada através do link:

http://localhost:8080
