<script>
  import Nav from "@/components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    margin: 0 auto;
    max-width: 100%;
    padding: 0 1em;
  }

  footer {
    position: static;
    bottom: 0;
    color: #675645;
    margin-top: 3em;
    padding: 1rem 0;
    font-size: 0.75em;
    vertical-align: end;
  }

  #mojang-disclaimer {
    text-transform: uppercase;
    font-kerning: 1.2em;
  }

  @media (min-width: 768px) {
    main {
      max-width: 768px;
      padding: 0;
    }
  }
</style>

<main>
  <Nav {segment} />
  <slot />
  <footer>
    <p>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img
          alt="Creative Commons License"
          style="border-width:0"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
      </a>
      <br />
      The contents of this website, unless otherwise indicated, are licensed
      under a
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <span>
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0
          International License
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </p>
	<p id="mojang-disclaimer">
		Not an official Minecraft product. Not approved by or associated with Mojang.
	</p>
  </footer>
</main>
