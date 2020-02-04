const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const knex = require('./db.js')();
const errs = require('restify-errors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Listar todos os registros
app.get('/', (req, res, next) => {
  knex('usuario').then((dados) => {
    res.send(dados);
  }, next);
});

// Lista um registro
app.get('/show/:id', (req, res, next) => {
  const {id} = req.params;
  knex('usuario')
      .where('id', id)
      .first()
      .then((dados) => {
          if(!dados){
              return res.send(new errs.BadRequestError('Nada foi encontrado'));
          }
          res.send(dados);
      }, next);
});

// Adiciona um registro
app.post('/create', (req, res, next) => {
    knex('usuario')
    .insert(req.body)
    .then((dados) => {
        res.send(dados);
    }, next);
});

// Atualiza um registro
app.put('/update/:id', (req, res, next) => {
  const {id} = req.params;
  knex('usuario')
    .update(req.body)
    .where('id', id)
    .then((dados) => {
        if(!dados){
            return res.send(new errs.BadRequestError('Nada foi encontrado'));
        }
        res.send('Dados atualizados');
    }, next);
  
});

app.del('/delete/:id', (req, res, next) => {
  var {id} = req.params;
  knex('usuario')
    .delete()
    .where('id', id)
    .then((dados) => {
        if(!dados){
            return res.send(new errs.BadRequestError('Nada foi encontrado'));
        }
        res.send('Dados excluidos');
    }, next);
});

app.listen('8080');