<template>
  <footer>
    <div class="columns" id="join-community">
      <div>
        <h3>join our community</h3>
        <ul>
          <li>
            <external-link href="https://discord.gg/v6v4pMv">Discord</external-link>
          </li>
          <li>
            <external-link href="https://github.com/FabricMC">GitHub</external-link>
          </li>
          <li>
            <external-link href="https://reddit.com/r/FabricMC">Reddit (Unofficial!)</external-link>
          </li>
          <li>#fabric at irc.esper.net</li>
        </ul>
      </div>
    
      <div id="site-links">
        <h3>robot info</h3>
        <ul>
          <li>
            <a href="/sitemap.xml">Sitemap</a>
          </li>
          <li>
            <a href="/feed.xml">RSS Feed</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="columns">
      <div class="column" id="license-disclaimer">
        Contents licensed under
        <external-link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC A-NC-SA 4.0 International
        </external-link>
      </div>

      <div class="column" id="mojang-disclaimer">
        Not an official Minecraft product. Not approved by or associated with
        Mojang.
      </div>
    </div>
  </footer>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";
export default {
  components: {
    ExternalLink
  }
};
</script>

<style lang="scss" scoped>
footer {
  bottom: 0;
  color: var(--text-grey);
  font-size: 0.75rem;
  margin: 3rem auto 0 auto;
  padding: 1rem 0;
  position: static;
  vertical-align: end;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline;
    margin: auto 0;

    &:not(:last-child):after {
      content: "•";
      margin: 0.25rem;
    }
  }
}

#site-links {
  a {
    text-decoration: underline;
  }
}

#mojang-disclaimer {
  font-kerning: 1.2rem;
  text-transform: uppercase;
}

@media (min-width: 60rem) {
  #site-links {
    float: right;
    text-align: right;
  }

  #mojang-disclaimer {
    text-align: right;
  }
}
</style>