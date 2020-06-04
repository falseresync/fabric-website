<script>
  import ExternalLink from "@/components/ExternalLink.svelte";
  import { clickOutside } from "@/lib/directives/clickOutside.js";

  let open = false;

  export let segment;
</script>

<style>
  nav {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 50rem;
    padding: 1rem 0;
  }

  nav > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    height: 1.5rem;
    max-height: 1.5rem;
  }

  button > svg {
    color: var(--text);
    height: 2.5rem;
  }

  ul#nav-links {
    align-items: center;
    display: none;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul#nav-links.open {
    display: flex;
  }

  ul#nav-links > li {
    margin: 1rem 0 0 0;
  }

  [aria-current] {
    text-decoration: underline;
  }

  main {
    margin: 0 auto;
    max-width: 50rem;
  }

  footer {
    bottom: 0;
    color: var(--text-grey);
    font-size: 0.75rem;
    margin: 3rem auto 0 auto;
    max-width: 50rem;
    padding: 1rem 0;
    position: static;
    vertical-align: end;
  }

  footer > *:not(:first-child) {
    margin-top: 1rem;
  }

  #join-community > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #join-community > ul > li {
    display: inline;
    margin: auto 0;
  }

  #join-community > ul > li:not(:last-child):after {
    content: "•";
    margin: 0.25rem;
  }

  #mojang-disclaimer {
    font-kerning: 1.2rem;
    text-transform: uppercase;
  }

  @media (min-width: 50rem) {
    nav {
      flex-direction: row;
    }

    nav > div {
      width: auto;
    }

    button {
      display: none;
    }

    ul#nav-links {
      display: flex;
      flex-direction: row;
    }

    ul#nav-links > li {
      margin: 0 0 0 2rem;
    }
  }
</style>

<nav use:clickOutside on:clickOutside={(e) => (open = false)}>
  <div>
    <a href="." aria-current={segment === undefined ? 'page' : undefined}>
      <img alt="Fabric Logo" id="fabric-logo-main" />
    </a>
    <button on:click={(e) => (open = !open)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        {#if open}
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        {:else}
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        {/if}
      </svg>
    </button>
  </div>
  <ul id="nav-links" class:open>
    <li>
      <a href="blog" aria-current={segment === 'blog' ? 'page' : undefined}>
        blog
      </a>
    </li>
    <li>
      <a
        href="make-mods"
        aria-current={segment === 'make-mods' ? 'page' : undefined}>
        make mods
      </a>
    </li>
    <li>
      <a
        href="contribute"
        aria-current={segment === 'contribute' ? 'page' : undefined}>
        contribute
      </a>
    </li>
    <li>
      <ExternalLink href="https://fabricmc.net/wiki/">wiki</ExternalLink>
    </li>
  </ul>
</nav>

<main>
  <slot />
</main>

<footer>
  <div id="join-community">
    <h3>join our community</h3>
    <ul>
      <li>
        <ExternalLink href="https://discord.gg/v6v4pMv">Discord</ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://github.com/FabricMC">GitHub</ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://reddit.com/r/FabricMC">Reddit (Unofficial!)</ExternalLink>
      </li>
      <li>
        #fabric at irc.esper.net
      </li>
    </ul>
  </div>
  <div id="license-disclaimer">
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      <img
        alt="Creative Commons License"
        style="border-width:0;max-height:15px"
        src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
    </a>
    <br />
    The contents of this website, unless otherwise indicated, are licensed under
    a
    <ExternalLink href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
      License
    </ExternalLink>
  </div>
  <div id="mojang-disclaimer">
    Not an official Minecraft product. Not approved by or associated with
    Mojang.
  </div>
</footer>
