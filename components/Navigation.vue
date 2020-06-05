<template>
  <nav>
    <div>
      <nuxt-link to="/">
        <img alt="Fabric Logo" id="fabric-logo-main" />
      </nuxt-link>
      <button v-click-outside="hide" @click="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <template v-if="open">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </template>
          <template v-else>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </template>
        </svg>
      </button>
    </div>
    <ul id="nav-links" :class="{open : open}">
      <li>
        <nuxt-link to="/blog">blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gradle-info">gradle info</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contribute">contribute</nuxt-link>
      </li>
      <li>
        <external-link href="https://fabricmc.net/wiki/">wiki</external-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import ExternalLink from '@/components/ExternalLink'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    ExternalLink
  },

  data() {
    return {
      segment: undefined,
      open: false
    }
  },

  directives: {
    ClickOutside
  },

  methods: {
    toggle() {
      this.open = !this.open
    },

    hide() {
      this.open = false
    }
  }
}
</script>

<style scoped>
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
  content: url('~assets/fabric-logo-full.png');
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

@media (min-width: 60rem) {
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

@media (prefers-color-scheme: dark) {
  img {
    content: url('~assets/fabric-logo-full-white.png');
  }
}
</style>