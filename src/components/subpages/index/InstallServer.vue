<template>
  <div>
    <div>
      The Minecraft version can be selected in the installer, this download
      works for every version we support.
    </div>
    <div class="point">
      <div class="icon">1</div>
      <span>
        Open the Installer. Select the server tab.
        In the window you need to configure the game and
        loader versions and the install location.
        <ul>
          <li>
            Generally using the latest available Loader version is
            recommended.
          </li>
        </ul>
      </span>
    </div>
    <div class="point">
      <div class="icon">2</div>
      <span>
        Press Install. In the output directory, a
        <span
          class="backquotes"
        >fabric-server-launch.jar</span> will be created.
        It expects a
        <span class="backquotes">server.jar</span>, which is the vanilla server JAR,
        generally found on Mojang's version announcement blog posts.
        <ul>
          <li>
            If upgrading, remember to remove the
            <span class="backquotes">.fabric</span> folder if presented!
          </li>
        </ul>
      </span>
    </div>
    <div class="point single-line">
      <div class="icon">3</div>
      <span>Put Fabric API into <span class="backquotes">/mods/</span> folder.</span>
    </div>
    <div class="point">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="4 17 10 11 4 5"/>
        <line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
      <span>
        <div>
          Basic CLI usage:
        </div>
        <code class="backquotes">{{cli}}</code>        
        <ul>
          <li>
            Read wiki for more advanced 
          <external-link
            href="https://fabricmc.net/wiki/install#cli_installation"
          >CLI installation</external-link>
          </li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";

export default {
  props: ["jar"],
  components: {
    ExternalLink
  },
  computed: {    
    filename() {
      return this.jar.split("/").slice(-1)[0];
    },

    cli() {
      return `java -jar ${this.filename} server -downloadMinecraft`;
    }
  }
}
</script>
