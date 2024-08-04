import { Static, Type } from '@sinclair/typebox'

export const Link = Type.Object({
  id: Type.Number(),
  url: Type.String({ maxLength: 1000 }),
  title: Type.String({ maxLength: 200 }),
  description: Type.Optional(Type.String()),
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Optional(Type.String({ maxLength: 50 })),
})

export type LinkReply = Static<typeof Link>
export type LinkRequest = Omit<LinkReply, 'id' | 'created_at' | 'updated_at'>
