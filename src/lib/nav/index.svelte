<script lang="ts">
  import { page } from '$app/stores'

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]
</script>

<nav>
  <ul>
    {#each links as { href, label }}
      <li class:selected={$page.url.pathname === href}><a {href}>{label}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0;
  }
  nav .selected a {
    background: #5599ff;
  }
  nav li a {
    text-transform: uppercase;
    transition: all 720ms cubic-bezier(0.2, 1, 0, 1);
    background: #0177ff;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    width: 8rem;
    display: inline-block;
    text-align: center;
    font-size: 1.125rem;
  }
  nav li a:hover, nav li a:focus {
    background-color: #014480;
  }

  @media screen and (max-width: 560px) {
    nav ul {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    nav ul {
      gap: 1rem;
    }
    nav li a {
      width: 6rem;
    }
  }
  @media screen and (max-width: 400px) {
    nav ul {
      gap: 0.5rem;
    }
    nav li a {
      width: 5rem;
    }
  }
</style>
