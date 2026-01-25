import Fastify from 'fastify'

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
    redact: ['req.headers.authorization'],
    level: process.env['FASTIFY_LOG_LEVEL'] ?? 'info',
    serializers: {
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.port,
        }
      },
    },
  },
  trustProxy: true,
  bodyLimit: 1024 * 1000,
})

export default fastify
