# CRUD feito com Node e Mysql

Projeto simples para listar e inserir dados no mysql utilizando Node, Express e Knex

### Tabela de exemplo

```
create database crud;

CREATE TABLE usuario (
id int(11) NOT NULL auto_increment,
nome varchar(255) NOT NULL,
email varchar(150) NOT NULL,
PRIMARY KEY (id)
);
```

### Instalação das dependências

```sh
$ npm i

```

Utilizar um cliente Rest como por exemplo, o Insomnia ou o Postman para realizar as requisições

## Rotas
- #### Adicionar um Registro
```
   POST localhost:8080/create 
```
```
{
 "nome" : "Fulano da Silva",
 "email" : "fulano.silva@email.com"	
}
```

- ####  Listar todos os registros
```
GET localhost:8080
```

- ####  Listar um registro
```
GET localhost:8080/show/1
```
- #### Alterar um registro
```
PUT localhost:8080/update/1
```
```
{ 
 "nome" : "Fulano de Souza",
 "email" : "fulano.souza@email.com"	
}
```
- #### Remover um registro
```
DELETE localhost:8080/delete/1
```
