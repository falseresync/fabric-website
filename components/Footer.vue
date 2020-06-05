<template>
  <footer>
    <div id="join-community">
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
    <div id="license-disclaimer">
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img
          alt="Creative Commons License"
          style="border-width:0;max-height:15px"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
        />
      </a>
      <br />The contents of this website, unless otherwise indicated, are licensed under
      a
      <external-link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
        License
      </external-link>
    </div>
    <div id="mojang-disclaimer">
      Not an official Minecraft product. Not approved by or associated with
      Mojang.
    </div>
  </footer>
</template>

<script>
import ExternalLink from '@/components/ExternalLink'

export default {
  components: {
    ExternalLink
  }
}
</script>

<style scoped>
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
  content: '•';
  margin: 0.25rem;
}

#mojang-disclaimer {
  font-kerning: 1.2rem;
  text-transform: uppercase;
}
</style>