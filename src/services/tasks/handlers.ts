/* vendor imports ---------------------------------------------------------- */
import type { FastifyRequest as Request, FastifyReply as Reply } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import queryReply from '../../helpers/queryReply.js'
import q from './queries.js'

/* --- end of imports ------------------------------------------------------ */

/* CRUD -------------------------------------------------------------------- */

export function createOne(
  req: Request<{
    Body: { description: string; title: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  queryReply(pg, q.createOne, [req.body.title, req.body.description ?? ''], res)
}

export function readOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  queryReply(pg, q.readOne, [req.params.id], res)
}

export function readLatest(req: Request, res: Reply): void {
  const { pg } = req.server
  queryReply(pg, q.readLatest, [], res)
}

export function updateOne(
  req: Request<{
    Body: { description: string; title: string }
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  queryReply(
    pg,
    q.updateOne,
    [req.params.id, req.body.title, req.body.description ?? ''],
    res,
  )
}

export function deleteOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
) {
  const { pg } = req.server
  queryReply(pg, q.deleteOne, [req.params.id], res)
}
