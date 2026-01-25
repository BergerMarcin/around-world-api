import env from 'dotenv-flow'

process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development'

export default (): void => {
  env.config({ debug: process.env['NODE_ENV'] === 'development' })
}
