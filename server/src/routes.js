import { Router } from 'express';
import passport from 'passport';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

routes.get(
  '/auth/google/redirect',
  passport.authenticate('google'),
  (req, res) => {}
);

export default routes;
