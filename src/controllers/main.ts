import express, { Request, Response } from 'express'

import BaseController from './base'

class MainController implements BaseController {

  public path = '/'
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes = () => {
    this.router.get(this.path, this.home)
    this.router.get(`${this.path}login`, this.login)
  }

  private home = (req: Request, res: Response) => {
    res.send('Home')
  }

  private login = (req: Request, res: Response) => {
    res.send('Login!')
  }
}

export default MainController
