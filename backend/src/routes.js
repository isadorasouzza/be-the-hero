const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const CelebrateController = require ('./controllers/CelebrateController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',CelebrateController.ongsPost(), OngController.create);

routes.get('/incidents', CelebrateController.incidentsGet(),IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', CelebrateController.incidentsDelete() ,IncidentController.delete);

routes.get('/profile',ProfileController.index);

routes.put('/profile',IncidentController.update);

module.exports = routes;