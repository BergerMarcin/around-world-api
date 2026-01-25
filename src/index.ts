import env from './plugins/env'
import fastify from './plugins/fastify'
import packageJson from '../package.json' with { type: 'json' }
import { debugInit } from './plugins/debug'

console.log(`Starting around-world-api v${packageJson.version}`)

env()
console.log(`NODE_ENV: ${process.env['NODE_ENV']}`)
console.log(`DEBUG: ${process.env['DEBUG']}`)
console.log(`USED_ENV_FILE: ${process.env['USED_ENV_FILE']}`)

console.log('NODE VERSION:', process.version)
console.log('ENV:', process.env)

fastify.addContentTypeParser(
  ['application/octet-stream', 'video/webm', 'application/pdf', 'image/jpeg'],
  { parseAs: 'buffer' },
  // @ts-expect-error no-used-vars
  (req, body, done) => {
    done(null, body)
  },
)
;(async (): Promise<void> => {
  try {
    /* NOTE: From here all env variables are already loaded from .env.* files via
             `dotenv-flow` package in ./plugins/env.ts (so here debugInit is available)*/
    debugInit('SETTING SERVER STARTED...')

    // TODO: router
    // const { default: routes } = await import('./src/routes/index.mjs')

    // TODO: mongoose
    // import('./src/plugins/mongoose.mjs')

    // TODO: router
    debugInit('BEFORE ROUTES')
    // routes.forEach(route => fastify.route(route))
    debugInit('BEFORE ROUTES')

    await fastify.ready()

    await fastify.listen({
      host: '0.0.0.0',
      port: 3000,
      listenTextResolver: (address) => `SERVER WORKS & LISTENING ON ${address}`,
    })
    debugInit('SETTING SERVER FINISHED')
    // fastify.swagger(); // TODO: connect swagger using open api 3
    // fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    debugInit(err)
    fastify.log.error(err)
    process.exit(1)
  }
})()
