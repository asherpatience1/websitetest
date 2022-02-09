<script lang="ts">
  import Gallery from 'svelte-image-gallery'
  import { Lightbox } from '$lib'

  import type { Image } from '$lib'

  let selectedImage: Image

  function handleClick(e: CustomEvent<Image>) {
    selectedImage = e.detail
  }

  const gallery = []

  for (let i = 0; i < 6; ++i) {
    gallery.push({
      title: `Image ${i}`,
      description: `The image in position ${i}`,
      src: `https://source.unsplash.com/random?${i}`
    })
  }


</script>

<p>We did stuff, it was great.</p>

<Gallery on:click={handleClick}>
  {#each gallery as { title, src, description }, i}
    <img tabindex={i} class="gallery-img" {src} alt={title} title={description} />
  {/each}
</Gallery>

{#if selectedImage}
  <Lightbox {...selectedImage} on:dismiss={() => selectedImage = null} />
{/if}

<style>
  .gallery-img {
    border: solid 2px #014480;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
