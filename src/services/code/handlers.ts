/* vendor imports ---------------------------------------------------------- */
import type { FastifyRequest as Request, FastifyReply as Reply } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import queryReply from '../../helpers/queryReply.js'
import q from './queries.js'
import { CodeSnippetRequest } from './models.js'

/* --- end of imports ------------------------------------------------------ */

/* CRUD -------------------------------------------------------------------- */

export function createOne(
  req: Request<{
    Body: CodeSnippetRequest
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    body = '',
    description = '',
    language,
    published_at = '',
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
    [title, description, body, language, published_at || null, tag_array],
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
    Body: CodeSnippetRequest
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    body = '',
    description = '',
    language,
    published_at = '',
    tags = '',
    title,
  } = req.body
  const { id } = req.params

  console.log('body', JSON.stringify(req.body))

  const tag_array = tags
    ? `{${tags
        .split(',')
        .map((t) => t.trim())
        .join(',')}}`
    : `{}`

  queryReply(
    pg,
    q.updateOne,
    [id, title, description, body, language, published_at || null, tag_array],
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
