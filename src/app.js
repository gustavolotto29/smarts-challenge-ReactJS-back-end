import 'dotenv/config';

import express from 'express';
const mongoose = require('mongoose');
const cors = require('cors');

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      'mongodb+srv://gustavo:248248@cluster0-fisto.gcp.mongodb.net/week10?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: 'http://localhost:3000',
        exposedHeaders: ['X-Total-Count'],
      })
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
