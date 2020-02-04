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
