import type { RequestHandler } from '@sveltejs/kit'

const markdowns = import.meta.glob('./*/_content.md')
const metas = import.meta.glob('./*/_meta.json')

const content = {}
const meta = {}

for (let name in markdowns) {
  const dir = name.substring(2, name.length - 12)
  content[dir] = import(/* @vite-ignore */`${name}?raw`)
}

for (let name in metas) {
  const dir = name.substring(2, name.length - 11)
  meta[dir] = import(/* @vite-ignore */`${name}`)
}

export const get: RequestHandler = async ({ params }) => {

  if (!(params.slug in content)) {
    return {
      status: 404,
    }
  }

  const markdown = (await content[params.slug]).default
  const metadata = (await meta[params.slug]).default

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ markdown, metadata, })
  }
}
