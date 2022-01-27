<script lang="ts">
  import "@fontsource/rationale"
  import '@fontsource/yantramanav'
  import './app.css'

  import { Header, Nav, World } from '$lib'
</script>

<svelte:head>
  <title>DIOVEC - Professional Services</title>
</svelte:head>

<Header />
<Nav />

<div class="bg">
  <World />
</div>

<main>
  <div class="content">
    <slot/>
  </div>
</main>

<Footer />

<style>
  main {
    background: linear-gradient(#fffd, #fff4);
    padding: 2rem 0 4rem;
    flex-grow: 1;
  }
  .content {
    margin: 0 auto;
    max-width: 50rem;
  }
  .bg {
    pointer-events: none;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
