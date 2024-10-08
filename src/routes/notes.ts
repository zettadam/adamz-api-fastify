/* --- vendor imports ------------------------------------------------------ */
import type { FastifyInstance, FastifyPluginOptions } from 'fastify'

/* --- local imports ------------------------------------------------------- */
import * as h from '../services/notes/handlers.js'

/* --- end of imports ------------------------------------------------------ */

export default function (
  f: FastifyInstance,
  _: FastifyPluginOptions,
  next: (error?: Error) => void,
): void {
  f.post('/new', {}, h.createOne)
  f.get('/:id', {}, h.readOne)
  f.put('/:id', {}, h.updateOne)
  f.delete('/:id', {}, h.deleteOne)

  f.get('/', {}, h.readLatest)

  next()
}
