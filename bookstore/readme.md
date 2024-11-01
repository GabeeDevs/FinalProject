# Documentação BookStore

**Nome do Projeto**: Bookstore

**Versão**: 1.0.0

**Data**: 31/10/2024

**Autor**: Gabriel Costa Ramos 

**Descrição**:  Desenvolvido apenas o backend, bookstore é um projeto no qual entrega  a autenticação de um usuario na livraria e a adição de livros dentro da livraria virtual.


**MODO DE USO**: 

Dentro da pasta do projeto (bookstore), inicialize o npm e instale as dependências básicas:  (É PRECISO DO NODE.JS)


**1-** npm install express pg dotenv

**2-** npm install --save-dev typescript jest @types/jest ts-jest supertest @types/express

**3-** Certifique-se que o banco de dados está na porta correta em src/config/database.ts

**4-** Vamos criar as tabelas dentro do banco de dados: src/migrations/migrations.ts (Criando a tabela de USERS), src/migrations/bookMigrations.ts (Criando a tabela de livros)

**5-** INICIANDO O SERVIDOR:   src/server.ts

**6-** REQUISIÇÕES: Dentro do arquivo ( resquets.http ) tem seus requests.  (OBS: É PRECISO TER A EXTENSÃO REST CLIENT)


