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
      title: string
      url: string
    }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { description = '', title, url } = req.body

  queryReply(pg, q.createOne, [url, title, description], res)
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
      title: string
      url: string
    }
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { description = '', title, url } = req.body
  const { id } = req.params

  queryReply(pg, q.updateOne, [id, url, title, description], res)
}

export function deleteOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { id } = req.params

  queryReply(pg, q.deleteOne, [id], res)
}
