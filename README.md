# Projeto módulo 2 - Cubos Bank
## API REST - Sistema Bancário
Criação de uma API no padrao Rest para um sistema bancário de um banco digital Cubos Bank.

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaowatanabe/apirest-bank-system?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joaowatanabe/apirest-bank-system">
  
  <a href="https://github.com/joaowatanabe/apirest-bank-system/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/joaowatanabe/apirest-bank-system">
  </a>
  
  <!-- <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> -->
  
 
</p>
<h4 align="center"> 
	🚧 Cubos Bank - API REST 🚧
</h4>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green">
	<!-- <img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen"> -->
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

📄 Cubos Bank - é uma API desenvolvida no padrao REST 


Projeto desenvolvido durante o curso de desenvolvimento de software fullstack, onde ao finalizar o módulo 2 foi passado esse desafio de criar uma API para um Banco Digital, atendendo a todos requisitos do padrao REST, utilizando a biblioteca express e junto com o JavaScript e o Node.js.

---

## ⚙️ Funcionalidades

- [x] Listagem de contas bancárias
- [x] Criar conta bancária
- [x] Atualizar os dados do usuário da conta bancária
- [x] Excluir uma conta bancária
- [x] Depósitar em uma conta bancária
- [x] Sacar de uma conta bancária
- [x] Transferir valores entre contas bancárias
- [x] Consultar saldo da conta bancária
- [x] Emitir extrato bancário

---

## 🛣️ Como executar o projeto

Este projeto é divido em :
1. Backend


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Nodemon](https://nodemon.io/), [Insomnia](https://insomnia.rest/download).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:joaowatanabe/apirest-bank-system.git

# Acesse a pasta do projeto no terminal/cmd
$ cd apirest-bank-system

# Vá para a pasta src
$ cd src

# Instale as dependências
$ npm install express
$ npm install -D nodemon

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000 a seguir das rotas desejadas (todas estão na pasta /routes) através do insomnia. 

```
<p align="center">
  <a href="https://github.com/joaowatanabe/apirest-bank-system" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### [](https://github.com/joaowatanabe/apirest-bank-system#server-nodejs--typescript)**Server**  ([Node.js](https://nodejs.org/en)  +  [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

-   **[Express](https://expressjs.com/)**
-   **[Nodemon](https://expressjs.com/)**

> Veja o arquivo  [package.json](https://github.com/joaowatanabe/apirest-bank-system/package.json)


#### [](https://github.com/cubos-academy/academy-template-readme-projects#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🧙‍♂️ Autor

 <sub><b>João Vicente Watanabe</b></sub></a>
 <br />

---

## 📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito por João Vicente [Entre em contato!](https://www.linkedin.com/in/joaowatanabe/)

