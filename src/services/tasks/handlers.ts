/* vendor imports ---------------------------------------------------------- */
import type { FastifyRequest as Request, FastifyReply as Reply } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import queryReply from '../../helpers/queryReply.js'
import q from './queries.js'
import { TaskRequest } from './models.js'

/* --- end of imports ------------------------------------------------------ */

// TODO: Add handlers for task projects

/* CRUD -------------------------------------------------------------------- */

export function createOneTask(
  req: Request<{ Body: TaskRequest }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    description = '',
    end_at = null,
    project_id = null,
    start_at = null,
    tags = '',
    task_id = null,
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
    q.createOneTask,
    [project_id, task_id, title, description, start_at, end_at, tag_array],
    res,
  )
}

export function readOneTask(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
): void {
  const { pg } = req.server
  const { id } = req.params
  queryReply(pg, q.readOneTask, [id], res)
}

export function readLatestTasks(req: Request, res: Reply): void {
  const { pg } = req.server
  queryReply(pg, q.readLatestTasks, [], res)
}

export function updateOneTask(
  req: Request<{
    Body: TaskRequest
    Params: { id: string }
  }>,
  res: Reply,
): void {
  const { pg } = req.server
  const {
    description = '',
    end_at = null,
    project_id = null,
    start_at = null,
    tags = '',
    task_id = null,
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
    q.updateOneTask,
    [id, project_id, task_id, title, description, start_at, end_at, tag_array],
    res,
  )
}

export function deleteOneTask(
  req: Request<{ Params: { id: string } }>,
  res: Reply,
) {
  const { pg } = req.server
  queryReply(pg, q.deleteOneTask, [req.params.id], res)
}
