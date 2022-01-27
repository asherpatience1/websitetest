<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url, fetch }) => {
    const r = await fetch(`${url}.json`)
    const { markdown, metadata } = await r.json()

    return {
      props: { markdown, metadata }
    }
  }
</script>

<script lang="ts">
  import { parse } from 'marked'

  export let markdown: string
  export let metadata: Record<string, any>
</script>

<svelte:head>
  <title>{metadata.title}</title>
</svelte:head>

<h2>{metadata.title}</h2>

<article>{@html parse(markdown || '')}</article>

<style>
  article :global(p),
  article :global(li) {
    color: black;
    font-weight: 300;
  }
  article :global(img) {
    width: 400px;
    max-width: calc(100vw - 4rem);
  }
  article :global(img.left) {
    float: left;
    margin-right: 1rem;
  }
  article :global(img.right) {
    float: right;
    margin-left: 1rem;
  }
  article :global(.clear) {
    clear: both;
  }
</style>
