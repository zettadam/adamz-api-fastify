/* vendor imports ---------------------------------------------------------- */
import type { FastifyRequest as Request, FastifyReply as Reply } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import queryReply from '../../helpers/queryReply.js'
import q from './queries.js'

/* --- end of imports ------------------------------------------------------ */

/* CRUD -------------------------------------------------------------------- */

export function createOne(
  req: Request<{
    Body: {
      description?: string
      end_at: string
      start_at: string
      title: string
    }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { description = '', end_at, start_at, title } = req.body

  queryReply(pg, q.createOne, [title, description, start_at, end_at], res)
}

export function readOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { id } = req.params

  queryReply(pg, q.readOne, [id], res)
}

export function readLatest(req: Request, res: Reply): void {
  const { pg } = req.server

  queryReply(pg, q.readLatest, [], res)
}

export function updateOne(
  req: Request<{
    Body: {
      description?: string
      end_at: string
      start_at: string
      title: string
    }
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { description = '', end_at, start_at, title } = req.body
  const { id } = req.params

  queryReply(pg, q.updateOne, [id, title, description, start_at, end_at], res)
}

export function deleteOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { id } = req.params

  queryReply(pg, q.deleteOne, [id], res)
}
