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
  nav {
    background: #fffd;
    font-family: Yantramanav, sans-serif;
  }
  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 0;
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
    box-shadow: 0 2px 4px #01448099;
  }
  nav li a:hover, nav li a:focus {
    background-color: #014480;
    box-shadow: 0 2px 6px 1px #01448066;
  }
  nav li.selected a {
    background: #5599ff;
    box-shadow: 0 0 0 #5599ff;
  }


  @media screen and (max-width: 560px) {
    nav ul {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    nav ul {
      gap: 0.8125rem;
    }
    nav li a {
      width: 6.5rem;
    }
  }
  @media screen and (max-width: 400px) {
    nav ul {
      gap: 0.5rem;
    }
    nav li a {
      width: 5rem;
      font-size: 14px;
    }
  }
</style>
