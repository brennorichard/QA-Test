# Projeto QA - Codex Travel

Este projeto contém um servidor local para servir o site estático e testes automatizados feitos com Cypress.



### Requisitos

- [Python 3 instalado;](https://www.python.org/downloads/)
- [Node.js e npm instalados;](https://nodejs.org/pt/download)
- Cypress instalado (via npm);



## :desktop_computer: Como rodar o projeto? ​​



### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA_CLONADA>
```



### 2. Rodar o servidor local

Entre na pasta do servidor e execute:

```bash
cd QA/servidor
python servidor.py
```

O servidor será iniciado em http://localhost:8000/testes/



### 3. Instalar dependências do projeto

Se ainda não tem o Node.js e npm instalados, instale-os primeiro.

Depois, no diretório **/testes** (onde está o package.json), rode:

```bash
npm install
```



### 4. Instalar o cypress (caso não esteja instalado) 

Caso o Cypress ainda não esteja instalado, rode o seguinte comando **também no diretório /testes**:

```bash
npm install cypress --save-dev
```



### 5. Executar testes automatizados

Com o servidor local em execução, abra o Cypress com:

```bash
npx cypress open
```

Na interface que abrir, selecione os testes na pasta QA/testes para rodar.

Ou, para rodar direto pelo terminal:

```bash
npx cypress run
```



### :eyes: Observações ​​

O servidor deve estar rodando para que os testes Cypress possam acessar o site em http://localhost:8000/testes/.

