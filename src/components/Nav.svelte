<script>
  export let segment;

  import ExternalLink from "@/components/ExternalLink.svelte";
	import { clickOutside } from '@/lib/directives/clickOutside.js';
  import { stores } from "@sapper/app";
  const { page } = stores();

  let open = false;
  let previousPath;

  page.subscribe(({ path }) => {
    if (previousPath === undefined || previousPath != path) {
      previousPath = path;
      open = false;
    }
  });
</script>

<style>
  nav {
    align-items: center;
    display: block;
    justify-content: space-between;
    padding: 0.5em 0;
  }

  nav > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    height: 1.75em;
  }

  ul {
    display: none;
  }

  ul.open {
    display: block;
  }

  li {
    display: inline;
  }

  li {
    margin-left: 1em;
  }

  [aria-current="page"] {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    nav {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    nav > div {
      width: auto;
    }

    button {
      display: none;
    }

    ul {
      display: block;
    }
  }
</style>

<nav use:clickOutside on:clickOutside={e => (open = false)}>
  <div>
    <a aria-current={segment === undefined ? 'page' : undefined} href="/">
      <img alt="Fabric logo" src="logo-full.png" />
    </a>
    <button on:click={e => (open = !open)}>
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
  <ul class:open>
    <li>
      <a
        aria-current={segment === 'install' ? 'page' : undefined}
        href="install">
        install
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'community' ? 'page' : undefined}
        href="community">
        community
      </a>
    </li>
    <li>
      <ExternalLink href="https://wiki.fabricmc.net" text="wiki" />
    </li>
  </ul>
</nav>
