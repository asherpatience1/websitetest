<script lang="ts">
  const map = [
    {
      name: "Engineering",
      services: [
        { label: "BIM Modeling", href: "bim-modeling" },
        { label: "MEP Design", href: "mep-design" },
        { label: "Scan to BIM", href: "scan-to-bim" },
      ],
    },
    {
      name: "Software Development",
      services: [
        { label: "Outsourcing and Augmentation", href: "outsourcing-and-augmentation" },
        { label: "Engineering and Spatial", href: "engineering-and-spatial" },
        // { label: "Game Development", href: "game-development" },
      ],
    },
  ]

</script>

<svelte:head>
  <title>DIOVEC - Professional Services</title>
</svelte:head>

<h2>Services</h2>

<p>We provide a wide array of professional services to meet all of your outsourcing needs in the fields of engineering and software development.</p>

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
