import passport from 'passport'
import passportGitHub from 'passport-github2'

import { githubOauth } from './index'

const GitHubStrategy = passportGitHub.Strategy

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user)
})

passport.deserializeUser((obj, done) => {
    done(null, obj)
})

passport.use(new GitHubStrategy({
    clientID: githubOauth.GITHUB_CLIENT_ID,
    clientSecret: githubOauth.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(profile)
}))

export default passport