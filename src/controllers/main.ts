import express, { Request, Response } from 'express'

import BaseController from './base'

const passport = require('../../config/passport')

class MainController implements BaseController {

  public path = '/'
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes = () => {
    this.router.get(this.path, this.ensureAuthenticated, this.home)
  }

  private home = (req: Request, res: Response) => {
    res.send('Home')
  }

  private ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log(req)
      return next()
    }
    res.redirect('/auth/github')
  }
}

export default MainController
