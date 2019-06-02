import express, { Request, Response } from 'express'

import passport from '../../config/passport'
import BaseController from './base'

class AuthController implements BaseController {

  public path = '/auth/github'
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes = () => {
    this.router.get(this.path, this.authenticate)
    this.router.get(`${this.path}/callback`, this.callback, this.success)
  }

  private authenticate = () => {
    passport.authenticate('github')
  }

  private callback = () => {
    passport.authenticate('github', { failureRedirect: '/login' })
  }

  private success = (req: Request, res: Response) => {
    res.redirect('/')
  }

}

export default AuthController
