<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'


  export let src: string
  export let alt: string

  const dispatch = createEventDispatcher()

  let shade = false

  function dismiss() {
    dispatch('dismiss')
  }

  function handleMaybeEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      dismiss()
    }
  }

  onMount(() => {
    setTimeout(() => {

      shade = true

    }, 50)
  })

</script>

<svelte:window on:keydown={handleMaybeEscape} />

<div class="scrim" class:shade>
  <button class="close" on:click={dismiss}>&times;</button>
  <img {src} {alt} />
</div>

<style>
  .close {
    background: transparent;
    border: none;
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    font-size: 64px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    color: white;
    cursor: pointer;
    text-shadow: 0 2px 4px #0007;
  }
  .scrim {
    z-index: 10;
    position: fixed;
    background: #0000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background 1440ms cubic-bezier(0.2,1,0,1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scrim.shade {
    background: #0006;
  }
  .scrim img {
    width: 1vw;
    max-height: 0;
    transition: width 720ms cubic-bezier(0.2,1,0,1);
  }
  .scrim.shade img {
    width: 90vw;
    max-width: 120vh;
    max-height: 90vh;
    object-fit: cover;
    border: solid 2px white;
    box-shadow: 0 8px 16px 4px #0007;
  }
</style>
