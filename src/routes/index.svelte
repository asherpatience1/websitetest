<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  const prefix = '../../static'
  const clients = import.meta.glob(`../../static/clients/*.{png,jpg}`)

  export const load: Load = async () => {
    return {
      props: {
        clients: Object.keys(clients).map(f => ({
          src: f.substring(prefix.length),
          alt: f.substring(prefix.length + 9, f.length - 4),
        }))
      }
    }
  }
</script>

<script lang="ts">
  import Typewriter from 'svelte-typewriter'
  import { Carousel } from '$lib'

  export let clients: { src: string, alt: string }[]
</script>

<svelte:head>
  <title>DIOVEC - Professional Services</title>
</svelte:head>

<div class="pad">
  <h2>
    <Typewriter scramble={2000}>
      <span>Outsourcing for your</span>
      <strong>Engineering</strong>
      <span>and</span>
      <strong>Software Development</strong><span>&mdash;simplified.</span>
    </Typewriter>
  </h2>

  <h3>Working with industry leaders</h3>
</div>

<Carousel>
  {#each clients as { src, alt }}
    <div class="client-wrap">
      <img class="client" {src} {alt} />
    </div>
  {/each}
</Carousel>


<style>
  .client-wrap {
    padding: 5px;
    box-sizing: border-box;
  }
  .client {
    filter: drop-shadow(2px 4px 4px #0005);
    width: 100%;
  }
  .pad {
    padding: 0 2rem;
  }
  h2 {
    font-family: "JetBrains Mono";
    max-width: 50rem;
    font-size: 2.1rem;
    margin: 0 auto;
    text-align: center;
    color: #0177ff;
    font-weight: 600;
    letter-spacing: -1.25px;
    overflow: hidden;
  }
  h3 {
    text-transform: uppercase;
    margin-top: 25vh;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  strong {
    font-weight: 600;
    color: #014480;
  }

  @media screen and (min-width: 600px) {
    h2 {
      height: 92px;
      overflow-y: hidden;
    }
  }

  @media screen and (max-width: 560px) {
    h3 {
      margin-top: 12vh;
    }
  }

</style>