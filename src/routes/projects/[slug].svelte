<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  const prefix = './_content/'
  const suffix = '/index.svelte'

  const projects = import.meta.glob('./_content/**/index.svelte')
  const meta = import.meta.glob('./_content/**/meta.json')

  export const load: Load = async ({ params }) => {
    for (const key in projects) {
      const project = key.slice(prefix.length, -suffix.length)

      if (project.slice(3) === params.slug) {
        return {
          props: {
            file: project,
            metadata: await meta[`./_content/${project}/meta.json`](),
            module: (await projects[key]()).default
          }
        }
      }
    }

    return {
      status: 404
    }
  }
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  export let file: string
  export let metadata: Record<string, string>
  export let module: typeof SvelteComponent
</script>

<svelte:head>
  <title>DIOVEC - {metadata.title}</title>
</svelte:head>

<h2>{metadata.title}</h2>

<svelte:component this={module} />