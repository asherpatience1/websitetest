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
  import { marked } from 'marked'

  export let markdown: string
  export let metadata: Record<string, any>
</script>

<svelte:head>
  <title>DIOVEC - {metadata.title}</title>
</svelte:head>

<h2>{metadata.title}</h2>

<article>{@html marked(markdown || '')}</article>

<style>
  article :global(.left), article :global(.right) {
    width: 400px;
  }
  article :global(.left), article :global(.right), article :global(.center) {
    max-width: calc(100vw - 4rem);
  }
  article :global(.left) {
    float: left;
    margin-right: 1rem;
  }
  article :global(.right) {
    float: right;
    margin-left: 1rem;
  }
  article :global(.center) {
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 600px;
  }
  article :global(.clear) {
    clear: both;
  }
  article :global(.icon) {
    width: 50px;
    max-width: 25vw;
  }
  @media screen and (min-width: 1110px) {
    article :global(.right.break-out) {
      margin-right: -176px;
      width: 576px;
    }
  }
  @media screen and (max-width: 768px) {
    article :global(.clear-768) {
      clear: both;
    }
    article :global(.left-768) {
      float: left;
    }
  }
</style>
