import { Static, Type } from '@sinclair/typebox'

export const Post = Type.Object({
  id: Type.Number(),
  title: Type.String({ maxLength: 200 }),
  slug: Type.String({ maxLength: 200 }),
  abstract: Type.Optional(Type.String({ maxLength: 1000 })),
  body: Type.Optional(Type.String()),
  significance: Type.Optional(Type.String()),
  published_at: Type.Optional(Type.String({ maxLength: 50 })),
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Optional(Type.String({ maxLength: 50 })),
})

export type PostReply = Static<typeof Post>
export type PostRequest = Omit<PostReply, 'id' | 'created_at' | 'updated_at'>
