import { Router } from 'express';
import passport from 'passport';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

routes.get(
  '/auth/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/login/failed',
  })
);

routes.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.',
  });
});

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
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
