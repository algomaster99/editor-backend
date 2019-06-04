import passport from 'passport'
import passportGitHub from 'passport-github2'

import { githubOauth } from './index'

const GitHubStrategy = passportGitHub.Strategy

passport.serializeUser<any, any>((user, done) => {
  console.log('passport serialize user')
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  console.log('passport deserializer user')
  done(null, id)
})

passport.use(new GitHubStrategy({
  clientID: githubOauth.GITHUB_CLIENT_ID,
  clientSecret: githubOauth.GITHUB_CLIENT_SECRET,
  callbackURL: '/auth/github/callback',
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile)
}))

export default passport
