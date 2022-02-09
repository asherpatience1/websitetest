<script lang="ts">
  import { Lightbox, Gallery } from '$lib'

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

<p>
  In 2020, Diovec was contracted to create a software system to process data for the Melbourne
  Underground Rail Loop inspection project.
</p>

<p>
  16km of underground rail corridor was scanned using a custom built sensing platform made by Veris
  Australia. The platform generated a massive amount of data from a LiDAR scanner, IMU, optical
  encoders and an array of 10 line-scan cameras.
</p>

<p>
  Given it was the first configuration of it's kind, custom software had to be made to process and
  make sense of the resulting data. This is where we stepped in.
</p>

<p>
  Using our extensive knowledge of spatial systems we created software to relate the complicated
  stack of data streams from all the devices, and also map the pixels from the camera array to the
  resulting model, producing one unified and colorized output with the greatest accuracy possible.
</p>

<p>
  The project received the Award for Technical Excellence at the 2020 Asia-Pacific Spatial
  Excellence Awards, and we are immensely proud to have worked in conjunction with the other
  companies involved and play our part on the software front.
</p>

<Gallery {gallery} on:click={handleClick} />

{#if selectedImage}
  <Lightbox {...selectedImage} on:dismiss={() => selectedImage = null} />
{/if}