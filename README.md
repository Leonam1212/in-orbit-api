

**In-Orbit API**
================

**Resumo**
--------

O In-Orbit API é um sistema de gerenciamento de metas e objetivos, desenvolvido para ajudar usuários a alcançar seus objetivos pessoais e profissionais. O sistema permite que os usuários criem, gerenciem e monitorem suas metas, além de fornecer recursos para ajudá-los a alcançar essas metas.

**Tecnologias Usadas**
--------------------

* **Node.js**: Linguagem de programação utilizada para desenvolver o sistema.
* **TypeScript**: Linguagem de tipagem utilizada para melhorar a segurança e a manutenção do código.
* **Fastify**: Framework de API utilizado para criar a API RESTful.
* **Drizzle-ORM**: ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados.
* **PostgreSQL**: Banco de dados relacional utilizado para armazenar as metas e conclusões de metas.
* **Zod**: Biblioteca de validação de dados utilizada para garantir a consistência dos dados.
* **Tanstack Query**: Gerenciamento de estado assíncrono poderoso para TS/JS, React, Solid, Vue, Svelte e Angular.

**Endpoints**
------------

A API possui os seguintes endpoints:

* **GET /completions**: Retorna uma lista de conclusões de metas do usuário.
* **GET /summary**: Retorna uma lista de metas concluídas por semana.
* **GET /pending-goals**: Retorna uma lista de metas pendentes durant.
* **POST /completions**: Cria uma nova conclusão de meta.
* **POST /goals**: Cria uma nova meta.
* **DELETE /completions/:id**: Deleta uma conclusão de meta específica.

**Banco de Dados**
-----------------

O sistema utiliza um banco de dados PostgreSQL para armazenar as metas e conclusões de metas. O banco de dados é estruturado da seguinte forma:

* **goals**: Tabela que armazena as metas dos usuários.
* **goal_completions**: Tabela que armazena as conclusões de metas dos usuários.

**Instalação**
-------------

Para instalar o sistema, é necessário seguir os seguintes passos:

1. Instalar o Node.js e o TypeScript.
2. Instalar as dependências do sistema utilizando o comando `npm install` ou  `yarn`.
3. Configurar o banco de dados PostgreSQL.
4. Iniciar o sistema utilizando o comando `npm run dev` ou `yarn dev` .

**Uso**
-----

Para usar o sistema, é necessário seguir os seguintes passos:

1. Acessar o endpoint `/goals` para criar uma nova meta.
2. Acessar o endpoint `/goal-completions` para criar uma nova conclusão de meta.
4. Acessar o endpoint `/goal-completions/:id` para atualizar ou deletar uma conclusão de meta específica.

**Conclusão**
----------

O In-Orbit API é um sistema de gerenciamento de metas e objetivos que permite que os usuários criem, gerenciem e monitorem suas metas de forma eficiente. O sistema utiliza tecnologias modernas e é fácil de usar, tornando-o uma ferramenta útil para qualquer pessoa que deseje alcançar seus objetivos.
