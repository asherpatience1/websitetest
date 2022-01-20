<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte'
  import { quartInOut } from 'svelte/easing'

  export let autoplay = true
  export let particlesToShow = 3
  export let duration = 5000
  export let arrows = false
  export let timingFunction = quartInOut

  let Carousel: typeof SvelteComponent

  onMount(async () => Carousel = (await import('svelte-carousel')).default)
</script>

<svelte:component this={Carousel} {autoplay} {particlesToShow} {duration} {arrows} {timingFunction}>
  <h4>CLICK Engineering</h4>
  <h4>BHP</h4>
  <h4>LandSurveys</h4>
  <h4>Veris</h4>
  <h4>Hardi</h4>
  <slot />
</svelte:component>

<style>
  h4 {
    text-align: center;
    background: #fff7;
    padding: 2rem;
    /* margin: 2px; */
    border: solid 2px #0003;
    box-sizing: border-box;
  }
</style>