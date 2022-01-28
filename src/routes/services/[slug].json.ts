import type { RequestHandler } from '@sveltejs/kit'

// TODO: replace this hardcoding with glob when Vite properly supports raw import
const content = {
  // engineering
  'bim-modeling': import('./bim-modeling/_content.md?raw'),
  'mep-design': import('./mep-design/_content.md?raw'),
  'scan-to-bim': import('./scan-to-bim/_content.md?raw'),

  // software
  'outsourcing-and-augmentation': import('./outsourcing-and-augmentation/_content.md?raw'),
  'engineering-and-spacial': import('./engineering-and-spacial/_content.md?raw'),
  'game-development': import('./game-development/_content.md?raw'),
}

const meta = {
  // engineering
  'bim-modeling': import('./bim-modeling/_meta.json'),
  'mep-design': import('./mep-design/_meta.json'),
  'scan-to-bim': import('./scan-to-bim/_meta.json'),

  // software
  'outsourcing-and-augmentation': import('./outsourcing-and-augmentation/_meta.json'),
  'engineering-and-spacial': import('./engineering-and-spacial/_meta.json'),
  'game-development': import('./game-development/_meta.json'),
}

// const markdowns = import.meta.globEager('./*/_content.md', { assert: { type: 'raw' }})
// const content = {}
// const meta = {}
// for (let name in markdowns) {
//   const dir = name.slice(2, -'/_content.md'.length)
//   content[dir] = markdowns[name]
//   meta[dir] = import(`./${dir}/_meta.json`)
// }

export const get: RequestHandler = async ({ params }) => {

  if (!(params.slug in content && params.slug in meta)) {
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
