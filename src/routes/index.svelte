<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  const prefix = '../../static'
  const clients = import.meta.glob(`../../static/clients/*.{png,jpg}`)

  export const load: Load = async () => {
    return {
      props: {
        clients: Object.keys(clients).map(f => f.substring(prefix.length))
      }
    }
  }
</script>

<script lang="ts">
  import Typewriter from 'svelte-typewriter'
  import { Carousel } from '$lib'

  export let clients: string[]
</script>

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
  {#each clients as src}
    <img {src} alt="client" />
  {/each}
</Carousel>


<style>
  .pad {
    padding: 0 2rem;
  }
  h2 {
    max-width: 36rem;
    font-size: 2.5rem;
    margin: 0 auto;
    text-align: center;
    color: #0177ff;
    font-weight: 600;
  }
  h3 {
    text-transform: uppercase;
    margin-top: 25vh;
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

</style>