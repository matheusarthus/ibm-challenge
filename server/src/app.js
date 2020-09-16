import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

import './config/passport';

class App {
  constructor() {
    this.server = express();

    this.mongoConnection();

    this.middlewares();
    this.routes();
  }

  mongoConnection() {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log('connected to mongo');
      }
    );
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
