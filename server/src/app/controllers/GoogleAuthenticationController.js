import passport from 'passport';

class GoogleAuthenticationController {
  auth() {
    passport.authenticate('google', {
      scope: ['profile'],
    });
  }

  redirect() {
    passport.authenticate('google', (req, res) => {});
  }
}

export default new GoogleAuthenticationController();
