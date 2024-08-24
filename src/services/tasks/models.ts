/* --- vendor imports ------------------------------------------------------ */
import { Static, Type } from '@sinclair/typebox'

/* --- end of imports ------------------------------------------------------ */

export const TaskProject = Type.Object({
  id: Type.Number(),

  // details
  name: Type.String({ maxLength: 255 }),
  description: Type.String({ maxLength: 500 }),
  color: Type.String({ maxLength: 50 }),
  is_archived: Type.Boolean(),
  is_deleted: Type.Boolean(),
  is_pinned: Type.Boolean(),
  tags: Type.Optional(Type.String({ maxLength: 1000 })),

  // meta
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export const Task = Type.Object({
  id: Type.Number(),

  // relationships
  project_id: Type.Union([Type.Null(), Type.Number()]),
  task_id: Type.Union([Type.Null(), Type.Number()]),

  // details
  title: Type.String({ maxLength: 200 }),
  description: Type.Optional(Type.String({ maxLength: 1000 })),
  start_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
  end_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
  tags: Type.Optional(Type.String({ maxLength: 1000 })),
  is_pinned: Type.Boolean(),
  priority: Type.Number(),

  // meta
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export type TaskReply = Static<typeof Task>
export type TaskRequest = Omit<TaskReply, 'id' | 'created_at' | 'updated_at'>
