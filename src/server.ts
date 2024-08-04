/* --- vendor imports ------------------------------------------------------ */
import 'dotenv/config'
import Fastify from 'fastify'
import fastifySensible from '@fastify/sensible'
import fastifyPostgres from '@fastify/postgres'
import pg from 'pg'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

/* --- local imports ------------------------------------------------------- */
import code from './routes/code.js'
import events from './routes/events.js'
import links from './routes/links.js'
import notes from './routes/notes.js'
import posts from './routes/posts.js'
import tasks from './routes/tasks.js'

import type { Config } from './types.js'

/* --- end of imports ------------------------------------------------------ */

export default function buildServer(config: Config) {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  }).withTypeProvider<TypeBoxTypeProvider>()

  server.register(fastifySensible, {
    sharedSchemaId: 'HttpError',
  })

  server.register(fastifyPostgres, {
    host: config.dbHost,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    pg,
    keepAlive: true,
  })

  server.register(code, { prefix: '/v1/code' })
  server.register(events, { prefix: '/v1/events' })
  server.register(links, { prefix: '/v1/links' })
  server.register(notes, { prefix: '/v1/notes' })
  server.register(posts, { prefix: '/v1/posts' })
  server.register(tasks, { prefix: '/v1/tasks' })

  server.get('/v1', (_, res) => {
    res.code(200).send({ message: 'Version 1' })
  })

  server.get('/', (_, res) => {
    res.code(200).send({ mesage: 'Hello!' })
  })

  server.log.info('Fastify server is starting up')

  return server
}
