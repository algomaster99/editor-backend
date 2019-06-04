import express, { Request, Response, NextFunction } from 'express'
import passport from 'passport'

import BaseController from './base'

class AuthController implements BaseController {

  public path = '/auth/github'
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes = () => {
    this.router.get(this.path, passport.authenticate('github'))
    this.router.get(`${this.path}/callback`, passport.authenticate('github'), this.success)
    this.router.get(`${this.path}/logout`, this.logout)
  }

  private success = (req, res: Response) => {
    res.send('YAy!!')
  }

  private logout = (req, res: Response) => {
    req.logout()
    res.send('You logged out!')
  }

}

export default AuthController
