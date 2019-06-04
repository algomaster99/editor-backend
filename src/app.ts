import express from 'express'
import session from 'express-session'
import passport from 'passport'

import { sessionSecret } from '../config/index'

import Controller from './controllers/base'
import MainController from './controllers/main'
import AuthController from './controllers/auth'

class App {
  
  public app: express.Application

  constructor() {
    this.app = express()
    this.initializeMiddleWares()
    this.initializeControllers([
      new MainController(),
      new AuthController(),
    ])
  }

  private initializeMiddleWares() {
    this.app.use(session({
      key: 'user',
      secret: sessionSecret,
      resave: false,
      saveUninitialized: true,
    }))
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router)
    })
  }

}

export default new App().app
