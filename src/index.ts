import process from 'node:process'

import config from './config.js'
import buildServer from './server.js'

const server = buildServer(config)

const start = async () => {
  try {
    const port = Number(config.port) || 3000
    const host = config.host === 'true' ? '0.0.0.0' : '127.0.0.1'
    await server.listen({ port, host })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
