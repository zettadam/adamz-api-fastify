import type {
  FastifyInstance,
  FastifyBaseLogger,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from 'fastify'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

export type FastifyTypebox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>

export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'ALL'

export interface Config {
  host: string
  port: number

  logLevel: LogLevel

  dbUser: string
  dbPassword: string
  dbHost: string
  dbPort: number
  dbName: string
}
