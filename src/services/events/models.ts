import { Static, Type } from '@sinclair/typebox'

export const Event = Type.Object({
  id: Type.Number(),

  // details
  title: Type.String({ maxLength: 200 }),
  description: Type.Optional(Type.String({ maxLength: 1000 })),
  start_at: Type.String({ maxLength: 50 }),
  end_at: Type.String({ maxLength: 50 }),

  // meta
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export type EventReply = Static<typeof Event>
export type EventRequest = Omit<EventReply, 'id' | 'created_at' | 'updated_at'>
