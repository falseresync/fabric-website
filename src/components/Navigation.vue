<template>
  <nav>
    <div>
      <g-link to="/">
        <img alt="Fabric Logo" />
      </g-link>
      <button ref="hamburger" @click="toggle">
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
    <ul id="nav-links" v-click-outside="hide" :class="{open : open}">
      <li>
        <g-link to="/">download</g-link>
      </li>
      <li>
        <g-link to="/blog">blog</g-link>
      </li>
      <li>
        <g-link to="/make-mods">make mods</g-link>
      </li>
      <li>
        <external-link href="https://fabricmc.net/wiki/">wiki</external-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";
import ClickOutside from "vue-click-outside";
export default {
  components: {
    ExternalLink
  },
  data() {
    return {
      segment: undefined,
      open: false
    };
  },
  mounted() {
    this.popupItem = this.$refs.hamburger;
  },
  directives: {
    ClickOutside
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    hide() {
      this.open = false;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

img {
  content: url("~@/assets/fabric-logo-full.png");
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

  &.open {
    display: flex;
  }

  li {
    margin: 1rem 0 0 0;
  }
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
    content: url("~@/assets/fabric-logo-full-white.png");
  }
}
</style>