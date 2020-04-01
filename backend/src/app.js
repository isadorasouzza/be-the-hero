const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes'); /* ./ para identificar que routes é um arquivo e não um pacote */


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, Oracle
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: Select * from users
    * Query Builder: table{'users}.select{'*'} 
    */


module.exports = app;