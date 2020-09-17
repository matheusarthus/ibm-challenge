import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
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
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      cookieSession({
        masAge: 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY],
      })
    );
    this.server.use(passport.initialize());
    this.server.use(passport.session());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
