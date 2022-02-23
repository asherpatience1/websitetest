<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  const prefix = './_content/'
  const suffix = '/index.svelte'

  const projects = import.meta.glob('./_content/**/index.svelte')
  const metas = import.meta.glob('./_content/**/meta.json')

  export const load: Load = async () => {
    const list = []

    for (const key in projects) {
      const dir = key.slice(prefix.length, -suffix.length)
      const href = dir.slice(3)
      const meta = (await metas[`./_content/${dir}/meta.json`]()).default
      list.push({ href, meta })
    }

    return {
      props: {
        projects: list
      }
    }
  }

</script>

<script lang="ts">
  export let projects: any[]
</script>

<svelte:head>
  <title>DIOVEC - Projects</title>
</svelte:head>

<h2>Projects</h2>
<p>Discover some of our highlight projects out of 200+ completed to date.</p>

{#each projects as { href, meta }}
  <h3><a href="/projects/{href}">{meta.title}</a></h3>
{/each}
