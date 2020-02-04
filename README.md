# crud-node-mysql

Crud feito com Node e Mysql

Projeto simples para listar e inserir dados no mysql utilizando Node, Express e Knex
<pre>
create database crud;

CREATE TABLE usuario (
id int(11) NOT NULL auto_increment,
nome varchar(255) NOT NULL,
email varchar(150) NOT NULL,
PRIMARY KEY (id)
);
</pre>
