/* --- vendor imports ------------------------------------------------------ */
import { Static, Type } from '@sinclair/typebox'

/* --- end of imports ------------------------------------------------------ */

export const Task = Type.Object({
  id: Type.Number(),
  title: Type.String({ maxLength: 200 }),
  description: Type.Optional(Type.String({ maxLength: 1000 })),
  tags: Type.Optional(Type.String({ maxLength: 1000 })),
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export type TaskReply = Static<typeof Task>
export type TaskRequest = Omit<TaskReply, 'id' | 'created_at' | 'updated_at'>
