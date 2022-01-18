<script lang="ts">
  const links = [
    // { label: 'About Us', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ]
</script>

<nav>
  <ul>
    {#each links as { href, label }}
      <li><a {href}>{label}</a></li>
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
  nav li a {
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

  @media screen and (max-width: 560px) {
    nav ul {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    nav ul {
      gap: 0.5rem;
    }
    nav li a {
      width: 5rem;
    }
  }
</style>
