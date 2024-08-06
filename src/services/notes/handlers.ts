/* vendor imports ---------------------------------------------------------- */
import type { FastifyRequest as Request, FastifyReply as Reply } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import queryReply from '../../helpers/queryReply.js'
import q from './queries.js'
import { NoteRequest } from './models.js'

/* --- end of imports ------------------------------------------------------ */

/* CRUD -------------------------------------------------------------------- */

export function createOne(
  req: Request<{ Body: NoteRequest }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    body = '',
    published_at = '',
    significance = 0,
    tags = '',
    title,
  } = req.body

  const tag_array = tags
    ? `{${tags
        .split(',')
        .map((t) => t.trim())
        .join(',')}}`
    : `{}`

  queryReply(
    pg,
    q.createOne,
    [title, body, significance, published_at || null, tag_array],
    res,
  )
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
    Body: NoteRequest
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    body = '',
    published_at = '',
    significance = 0,
    tags = '',
    title,
  } = req.body
  const { id } = req.params

  const tag_array = tags
    ? `{${tags
        .split(',')
        .map((t) => t.trim())
        .join(',')}}`
    : `{}`

  queryReply(
    pg,
    q.updateOne,
    [id, title, body, significance, published_at || null, tag_array],
    res,
  )
}

export function deleteOne(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { id } = req.params

  queryReply(pg, q.deleteOne, [id], res)
}
