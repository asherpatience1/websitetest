<script lang="ts">
  import Gallery from 'svelte-image-gallery'
  import type { GalleryImage } from '.'

  export let gallery: GalleryImage[]

</script>

<Gallery on:click>
  {#each gallery as { title, src, description }}
    <img class="gallery-img" {src} alt={title} title={description} />
  {/each}
</Gallery>

<style>
  .gallery-img {
    border: solid 2px #014480;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>