import 'dotenv/config';

import { Router } from 'express';
import passport from 'passport';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/auth/login/success', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'user has successfully authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  } else {
    res.json({
      success: false,
      message: 'user failed to authenticate.',
    });
  }
});

routes.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

routes.get(
  '/auth/google/redirect',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  })
);

routes.get('/auth/twitter', passport.authenticate('twitter'));

routes.get(
  '/auth/twitter/redirect',
  passport.authenticate('twitter', {
    successRedirect: process.env.CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  })
);

routes.get('/auth/linkedin', passport.authenticate('linkedin'));

routes.get(
  '/auth/linkedin/redirect',
  passport.authenticate('linkedin', {
    successRedirect: process.env.CLIENT_HOME_PAGE_URL,
    failureRedirect: '/auth/login/failed',
  })
);

routes.get('/auth/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.',
  });
});

routes.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_HOME_PAGE_URL);
});

routes.use(authMiddleware);

routes.get('/', (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'user successfully authenticated',
    user: req.user,
    cookies: req.cookies,
  });
});

export default routes;
