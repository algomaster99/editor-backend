import dotenv from 'dotenv'

dotenv.config()

export const server: any = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
}

export const githubOauth: any = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
}

export const sessionSecret: string = process.env.SESSION_SECRET
