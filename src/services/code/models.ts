import { Static, Type } from '@sinclair/typebox'

export const CodeSnippet = Type.Object({
  id: Type.Number(),
  title: Type.String({ maxLength: 200 }),
  description: Type.Optional(Type.String({ maxLength: 1000 })),
  language: Type.String({ maxLength: 50 }),
  body: Type.String(),
  published_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
  tags: Type.Optional(Type.String({ maxLength: 1000 })),
  created_at: Type.String({ maxLength: 50 }),
  updated_at: Type.Union([Type.Null(), Type.String({ maxLength: 50 })]),
})

export type CodeSnippetReply = Static<typeof CodeSnippet>
export type CodeSnippetRequest = Omit<
  CodeSnippetReply,
  'id' | 'created_at' | 'updated_at'
>
