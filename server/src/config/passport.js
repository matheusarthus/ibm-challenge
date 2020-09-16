import 'dotenv/config';

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

export default passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }
  )
);
