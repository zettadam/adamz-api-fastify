/* --- vendor imports ------------------------------------------------------ */
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import * as h from '../services/tasks/handlers.js'

/* --- end of imports ------------------------------------------------------ */

export default function (
  f: FastifyInstance,
  _: FastifyPluginOptions,
  next: (error?: Error) => void,
): void {
  // TODO: Split this into task projects and tasks

  f.post('/new', {}, h.createOneTask)
  f.get('/:id', {}, h.readOneTask)
  f.put('/:id', {}, h.updateOneTask)
  f.delete('/:id', {}, h.deleteOneTask)

  f.get('/', {}, h.readLatestTasks)

  next()
}
