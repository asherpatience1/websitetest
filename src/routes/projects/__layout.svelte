<script lang="ts">
  import { page } from '$app/stores'
</script>

<section>
  {#if $page.url.pathname !== '/projects'}
    <p><a href="/projects">Projects</a> &rsaquo;</p>
  {/if}
  <slot />
</section>

<style>
  p a {
    font-family: Rationale, Lato, sans-serif;
    font-size: 20px;
  }
  section {
    padding: 0 1.5rem;
  }
</style>