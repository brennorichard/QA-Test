# Projeto QA - Codex Travel

Este projeto contém um servidor local para servir o site estático, onde serão executados os testes automatizados feitos com Cypress.



### Requisitos:

- [Python 3 instalado;](https://www.python.org/downloads/)
- [Node.js e npm instalados;](https://nodejs.org/pt/download)
- Cypress instalado (via npm).

--------------



## :desktop_computer: Como rodar o projeto? ​​



### 1. Clonar o repositório :cat:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA_CLONADA>
```

-------------------------



### 2. Rodar o servidor local :lock:

Acesse o diretório **\servidor**:

```bash
cd .\servidor
```

 E execute:

```bash
python servidor.py
```

O servidor será iniciado em http://localhost:8000/testes/

-----------------------



### 3. Instalar dependências do projeto :arrow_down:

- Abra um **novo terminal**

Acesse o **diretório clonado**:

````bash
cd <NOME_DA_PASTA_CLONADA>
````

E execute:

```bash
npm install
```

-------------



### 4. Instalar o cypress (caso não esteja instalado) :arrow_down:

- Acesse o diretório **Testes**:

````bash
cd .\testes
````

Caso o Cypress ainda não esteja instalado, rode o seguinte comando **no diretório \testes**:

```bash
npm install cypress --save-dev
```

----------------



### 5. Executar testes automatizados :arrows_counterclockwise:

- Ainda no diretório **\testes** abra o Cypress com:

```bash
npx cypress open
```

Na interface do Cypress, selecione as seguintes opções:

- **1** - E2E Testing;

- **2** - Selecionar o navegador (recomendável: Chrome ou Edge);

- **3** - Clicar em "Star E2E Testing in...";

- **4** - Selecione o teste que deseja executar.

Ou, para rodar direto pelo terminal

```bash
npx cypress run
```

-------------------



### :eyes: Observações ​​

O servidor deve estar rodando para que os testes Cypress possam acessar o site em http://localhost:8000/testes/.

