<script lang="ts">
  import Typewriter from 'svelte-typewriter'
</script>

<h2>
  <Typewriter scramble={2000}>
    <span>Outsourcing for your</span>
    <strong>Engineering</strong>
    <span>and</span>
    <strong>Software Development</strong><span>&mdash;simplified.</span>
  </Typewriter>
</h2>


<style>
  h2 {
    max-width: 36rem;
    font-size: 2.5rem;
    margin: 0 auto;
    text-align: center;
    color: #0177ff;
    font-weight: 600;
  }
  strong {
    font-weight: 600;
    color: #014480;
  }

  @media screen and (min-width: 600px) {
    h2 {
      height: 92px;
      overflow-y: hidden;
    }
  }

</style>