<script lang="ts">
  import Gallery from 'svelte-image-gallery'
  import { Lightbox } from '$lib'

  import type { Image } from '$lib'

  let selectedImage: Image

  function handleClick(e: CustomEvent<Image>) {
    selectedImage = e.detail
  }

  const gallery = []

  for (let i = 0; i < 5; ++i) {
    gallery.push({
      src: `/projects/box-hill-car-park/${String.fromCharCode(i + 97)}.jpg`
    })
  }
</script>

<aside>
  <p>
    November 21, 2021
  </p>
</aside>

<p>
  Diovec was contracted by Veris to create a Scan to BIM model of the Wilson Parking complex in Box
  Hill, Victoria, Australia.
</p>
<p>
  The completed project provided the client with a full set of floor plans, reflected ceiling plans,
  sections, and details, along with the 3D model which was produced to depict the existing site
  conditions precisely and accurately.
</p>
<p>
  Our team utilized Revit to model the Woolworths side of the plaza and car park from the single
  provided point cloud file, with additional work being completed in Recap Pro to enhance visual
  fidelity and ensure accuracy of the final product.
</p>
<p>
  30mm of tolerance was met for all building services outside of the ceiling spaces and 15mm for the
  structural and architectural components within the project.
</p>
<p>
  Diovec's extensive experience with point cloud scans and full suite modeling in Revit led to a
  very successful outcome and a millimeter accurate model. This enabled the client to have a full
  set of accurate drawings and a 3D model to start the next step in the redevelopment process for
  their project.
</p>

<Gallery on:click={handleClick}>
  {#each gallery as { title, src, description }, i}
    <img tabindex={i} class="gallery-img" {src} alt={title} title={description} />
  {/each}
</Gallery>

{#if selectedImage}
  <Lightbox {...selectedImage} on:dismiss={() => (selectedImage = null)} />
{/if}

<style>
  .gallery-img {
    border: solid 2px #014480;
    box-sizing: border-box;
    cursor: pointer;
  }
  aside p {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.7em;
    color: #000a;
  }
</style>
