import { Static, Type } from '@sinclair/typebox'

export const Note = Type.Object({
  id: Type.Number(),
  title: Type.String({ maxLength: 200 }),
  body: Type.Optional(Type.String()),
  significance: Type.Optional(Type.Number()),
  published_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
  tags: Type.Optional(Type.String({ maxLength: 1000 })),
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export type NoteReply = Static<typeof Note>
export type NoteRequest = Omit<NoteReply, 'id' | 'created_at' | 'updated_at'>
