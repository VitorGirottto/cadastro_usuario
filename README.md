# Crud para cadastro de clientes

Este projeto utiliza **Node.js**, **Express**, **MongoDB** e **EJS** para criar um sistema simples de cadastro, edição e exclusão de clientes. É um exemplo prático de como integrar um banco de dados MongoDB com uma aplicação Express.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução para JavaScript no servidor.
- **Express** - Framework web para Node.js.
- **MongoDB** - Banco de dados NoSQL utilizado para armazenar os dados.
- **EJS** - Motor de templates para renderizar páginas HTML com dados dinâmicos.
- **dotenv** - Gerenciar variáveis de ambiente para configuração do banco de dados.

## Configuração

### Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado na sua máquina. Você pode verificar a instalação com o seguinte comando:

  `node -v`
  
MongoDB: Este projeto requer uma instância do MongoDB. Você pode usar um banco de dados local ou configurar uma conexão com o MongoDB Atlas, como feito no arquivo .env.


## 1. Clone este repositório:

`git clone https://github.com/itorGirottto/cadastro_usuario`

## 2. Acesse o diretório do projeto:

`cd mongodb-express`

## 3. Instale as dependências:

`npm install`

## 4. Configuração do Banco de Dados

Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias para conectar ao MongoDB.

MONGO_HOST=mongodb+srv://seu-usuario:senha@cluster.mongodb.net/
MONGO_DATABASE=nome-do-banco

Substitua seu-usuario, senha, e nome-do-banco com as informações da sua instância MongoDB.
Rodando o Projeto

## 5. Após instalar as dependências e configurar o MongoDB, execute o comando abaixo para iniciar o servidor:

`npm start`
O servidor estará disponível em http://localhost:3000.

### Funcionalidades

Cadastro: Você pode adicionar novos clientes fornecendo o nome e a idade.
Edição: Você pode editar o nome de um cliente existente.
Exclusão: Você pode excluir um cliente pelo seu ID.

#### Endpoints
GET /: Exibe a lista de clientes cadastrados.

POST /save: Salva um novo cliente no banco de dados.

POST /edit: Edita um cliente existente (com base no ID).

POST /delete: Exclui um cliente (com base no ID).
