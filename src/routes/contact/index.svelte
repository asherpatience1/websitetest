<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    const r = await fetch('/contact/enabled.json')
    const j = await r.json()

    return {
      props: {
        formEnabled: JSON.parse(j),
      }
    }
  }
</script>

<script lang="ts">
  export let formEnabled: boolean

  let disabled = false
  let accepted = false

  let name = ''
  let email = ''
  let body = ''

  $: complete = name.trim() && email.trim() && body.trim()

  const recaptcha = async (): Promise<string> => new Promise((resolve, reject) => {
    if (!('grecaptcha' in window)) {
      reject('Recaptcha not loaded')
    }

    window['grecaptcha'].ready(async () => {
      try {
        resolve(await window['grecaptcha'].execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'contact_form_submit' }))
      } catch (e) {
        reject(e)
      }
    })
  })

  async function handleSubmit(e: SubmitEvent) {

    disabled = true

    const body = new FormData(e.target as HTMLFormElement)

    if (import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
      body.set('g-recaptcha-response', await recaptcha())
    }

    const r = await fetch('/contact', {
      method: 'POST',
      body,
    })

    if (r.ok) {
      accepted = true
    } else {
      console.error('Bad request')
    }

    disabled = false
  }



</script>

<svelte:head>
  {#if import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    <script src="https://www.google.com/recaptcha/api.js?render={import.meta.env.VITE_RECAPTCHA_SITE_KEY}"></script>
  {/if}
</svelte:head>

<section>
  <h2>Contact</h2>

  {#if formEnabled}
    {#if accepted}
      <h3>Thanks for that!</h3>
      <p>Your inquiry has been received, we'll be in touch via email very soon!</p>
    {:else}
      <p>Let us take care of your outsourcing and development needs.</p>

      <form disabled={disabled || !complete} method="POST" on:submit|preventDefault={handleSubmit}>
        <label>
          <span>Name</span>
          <input {disabled} type="text" name="name" bind:value={name} />
        </label>

        <label>
          <span>Email</span>
          <input {disabled} type="email" name="email" bind:value={email} />
        </label>

        <label>
          <span>Message</span>
          <textarea {disabled} name="body" bind:value={body}></textarea>
        </label>

        <label>
          <button disabled={disabled || !complete} type="submit">Send</button>
          {#if !complete}
            <span class="help">Fill out all fields</span>
          {/if}
        </label>
      </form>
    {/if}
  {:else}
      <p>
        Email: <a href="mailto:hello@diovec.com">hello@diovec.com</a>
      </p>
  {/if}

</section>

<style>
  .help {
    display: inline;
    background: #fff6;
    color: #333;
    margin-left: 4px;
  }
  section {
    padding: 0 1.5rem;
  }
  label {
    display: block;
    margin-top: 1rem;
  }
  form {
    max-width: 35rem;
  }
  form:disabled {
    opacity: 0.5;
  }
  label span {
    display: block;
    font-size: 0.75rem;
    margin-bottom: 0.125rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #014480;
  }
  label input, label textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 6px;
    display: block;
    font: inherit;
    font-size: 0.875rem;
    resize: vertical;
  }
  button {
    background: #014480;
    color: white;
    font-family: Rationale, sans-serif;
    border: none;
    font-size: 1.125rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
  }
  button:disabled {
    opacity: 0.9;
    background: #ccc;
    color: #666;
    cursor: default;
  }
</style>