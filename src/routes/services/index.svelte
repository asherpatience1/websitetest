<script lang="ts">
  const map = [
    {
      name: "Engineering",
      services: [
        { label: "BIM", href: "bim" },
        { label: "Structural", href: "structural-engineering" },
        { label: "Civil", href: "civil-engineering" },
      ],
    },
    {
      name: "Software Development",
      services: [
        { label: "Desktop", href: "desktop-software" },
        { label: "Mobile", href: "mobile-software" },
        { label: "Web", href: "web-software" },
        { label: "Games", href: "games" },
      ],
    },
  ]

</script>

<h2>Services</h2>

<ul>
  {#each map as { name, services }}
  <li>
    <h3>{name}</h3>
    <ul>
      {#each services as { label, href }}
        <li><a href="/services/{href}">{label}</a></li>
      {/each}
    </ul>
  </li>
{/each}
</ul>
