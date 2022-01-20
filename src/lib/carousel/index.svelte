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
  <slot />
</svelte:component>
