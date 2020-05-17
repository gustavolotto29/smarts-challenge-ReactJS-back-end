import { Router } from 'express';
import ClientController from './app/controllers/ClientController';

const routes = new Router();

routes.get('/Customers', ClientController.index);
routes.post('/Customers', ClientController.store);
routes.delete('/Customers', ClientController.destroy);

export default routes;
