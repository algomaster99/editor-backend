import express from 'express'
import session from 'express-session'

import passport from '../config/passport'

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
    this.app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))
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
