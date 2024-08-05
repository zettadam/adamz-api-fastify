import type { PostgresDb } from '@fastify/postgres'
import type { FastifyReply } from 'fastify'

export default async function queryReply(
  pg: PostgresDb & Record<string, PostgresDb>,
  sql: string,
  params: (string | number | (string | number)[] | null)[],
  reply: FastifyReply,
) {
  try {
    const result = await pg.query(sql, params)
    reply.header('content-type', 'application/json')
    reply.send(JSON.stringify(result.rows))
  } catch (err) {
    reply.send(err)
  }
}
