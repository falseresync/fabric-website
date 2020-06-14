<template>
  <layout>
    <div class="separator" id="separator-1" />

    <section id="download--install" class="columns">
      <div id="downloads" class="column">
        <h1>download</h1>
        <div class="point">
          Fabric consists of 2 parts: Fabric Loader and Fabric API. You need both
          for most mods to run. Choose the launcher you would like to use below and
          follow the instructions nearby.
        </div>
        <div class="point">
          <div>
            <noscript>This feature requires JavaScript</noscript>
            <select v-model="downloadOption" disabled ref="launcherDownloadChooser">
              <option
                v-for="option in downloadOptions"
                :key="option.id"
                :value="option.id"
              >{{option.name}}</option>
            </select>
          </div>
        </div>
        <template v-if="downloadOption == 'vanilla'">
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.5.2.40/fabric-installer-0.5.2.40.exe"
              >Download Fabric Installer (Windows)</external-link>
              <external-link
                href="https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.5.2.40/fabric-installer-0.5.2.40.jar"
              >Download Fabric Installer (Any OS)</external-link>
            </span>
          </div>
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://curseforge.com/minecraft/mc-mods/fabric-api"
              >Download Fabric API</external-link>
            </span>
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
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              Windows may show a SmartScreen warning.
              We cannot currently do anything about this.
              You may use the .JAR or MultiMC to install.
            </span>
          </div>
        </template>
        <template v-else-if="downloadOption == 'server'">
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.5.2.40/fabric-installer-0.5.2.40.jar"
              >Download Fabric Installer</external-link>
              <div>Or use a direct link:</div>
              <div
                class="inline-code"
              >https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.5.2.40/fabric-installer-0.5.2.40.jar</div>
            </span>
          </div>
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://curseforge.com/minecraft/mc-mods/fabric-api"
              >Download Fabric API</external-link>
            </span>
          </div>
        </template>
        <template v-else-if="downloadOption == 'multimc'">
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>
              <external-link href="https://multimc.org/#Download">Download MultiMC</external-link>
            </span>
          </div>
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://curseforge.com/minecraft/mc-mods/fabric-api"
              >Download Fabric API</external-link>
            </span>
          </div>
        </template>
        <template v-else-if="downloadOption == 'others'">
          <div class="point single-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              <external-link
                href="https://curseforge.com/minecraft/mc-mods/fabric-api"
              >Download Fabric API</external-link>
            </span>
          </div>
        </template>
      </div>
      <div class="column">
        <h1>install</h1>
        <template v-if="downloadOption == 'vanilla'">
          <div>
            The Minecraft version can be selected in the installer, this download
            works for every version we support.
          </div>
          <div class="point">
            <div class="icon">1</div>
            <span>
              Open the Installer. In the window you need to configure the game and
              loader versions and the install location.
              <ul>
                <li>
                  Generally using the latest available Loader version is
                  recommended.
                </li>
                <li>
                  The default installation location should be fine on most
                  platforms.
                </li>
              </ul>
            </span>
          </div>
          <div class="point">
            <div class="icon">2</div>
            <span>
              Press Install. A new game version and profile will be created in the
              launcher's menu, which you can now use to launch Fabric.
            </span>
          </div>
          <div class="point">
            <div class="icon">3</div>
            <span>
              Put Fabric API into
              <span class="backquotes">.minecraft/mods/</span> folder.
            </span>
          </div>
        </template>
        <template v-else-if="downloadOption == 'server'">
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
            <span>Put Fabric API into /mods/ folder.</span>
          </div>
        </template>
        <template v-else-if="downloadOption == 'multimc'">
          <div>
            MultiMC is a great launcher we recommend
            for the smoothest experience when using Fabric.
          </div>
          <div class="point">
            <div class="icon">1</div>
            <span>
              Open MultiMC and create instance using
              <span class="backquotes">Add Instance</span>.
              Select desired Minecraft version in the prompt.
            </span>
          </div>
          <div class="point">
            <div class="icon">2</div>
            <span>
              Select your new instance and click
              <span class="backquotes">Edit Instance</span>.
              Choose
              <span class="backquotes">Version</span>
              and click
              <span class="backquotes">Install Fabric</span>.
              MultiMC will do the job automatically.
            </span>
          </div>
          <div class="point">
            <div class="icon">3</div>
            <span>
              Choose
              <span class="backquotes">Loader mods</span> and drag Fabric API onto the list.
            </span>
          </div>
        </template>        
        <template v-else-if="downloadOption == 'others'">
          <div>
            Fabric is supported by several other launchers.
            We have guides on our wiki for:
            <ul>
              <li>
                <external-link
                  href="https://fabricmc.net/wiki/tutorial:mcupdater_modpacks"
                >MCUpdater</external-link>
              </li>
              <li>
                <external-link
                  href="https://fabricmc.net/wiki/tutorial:technic_modpacks"
                >Technic</external-link>
              </li>
              <li>
                <external-link
                  href="https://fabricmc.net/wiki/tutorial:atlauncher_modpacks"
                >ATLauncher</external-link>
              </li>
            </ul>
          </div>
          <div>
            <br />
            As for Twitch, there is a hacky mod named 
            <external-link
              href="https://www.curseforge.com/minecraft/mc-mods/jumploader"
            >Jumploader</external-link>
            allowing Fabric to work on Twitch, but it is <i>unofficial</i>.
          </div>
        </template>
      </div>
    </section>

    <section id="join-community">
      <h1>join our community</h1>
      <a href="https://discord.gg/v6v4pMv">
        <g-image alt="Discord Logo" src="~/assets/discord-logo.png" />
      </a>
      <a href="https://github.com/FabricMC">
        <g-image alt="GitHub Logo" src="~/assets/github-logo.png" />
      </a>
    </section>

    <section id="goals-and-ideas">
      <h1>goals and ideas</h1>
      <div class="columns">
        <div class="column">
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
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
            <span>
              APIs are lightweight and modular, making porting faster and game
              instances leaner
            </span>
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
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>
              We target new snapshots as well as releases, allowing for snappier mod
              updates and more informed community
            </span>
          </div>
        </div>
        <div class="column">
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
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
            0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
            5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
            5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42
            3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
            <span>
              All Fabric projects are free and open-source, and anyone can
              contribute!
            </span>
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
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0
            0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0
            0-7.78z"
              />
            </svg>
            <span>
              We strive to be unopinionated to our players and modders. There is no
              "the way" we're forcing you to follow.
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="separator" id="separator-2" />

    <section class="columns" id="make-mods--blog">
      <div id="blog" class="column">
        <h1>blog</h1>
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <post-card class="post-card" :post="edge.node" shorten-description disable-tags />
          </li>
        </ul>
        <g-link to="/blog" class="icon-button">
          <span>View all</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </g-link>
      </div>
      <div id="make-mods" class="column">
        <h1>make mods</h1>
        <modding-intro />
      </div>
    </section>
  </layout>
</template>

<page-query>
query {
  posts: allPost(limit: 3) {
    edges {
      node {
        id
        title
        date (format: "MMM D, YYYY")
        author
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path (to: "new_path")
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import ModdingIntro from "~/components/subpages/ModdingIntro";
import ExternalLink from "~/components/ExternalLink";
import PostCard from "~/components/PostCard";

export default {
  metaInfo: {
    title: "Minecraft modding toolchain"
  },
  components: {
    ModdingIntro,
    ExternalLink,
    PostCard
  },
  data() {
    return {
      downloadOptions: [
        {
          id: "vanilla",
          name: "Minecraft Launcher"
        },
        {
          id: "server",
          name: "Minecraft Server"
        },
        {
          id: "multimc",
          name: "MultiMC"
        },
        {
          id: "others",
          name: "Others (and Twitch)"
        },
      ],
      downloadOption: "vanilla"
    };
  },
  mounted() {
    let downloadOption = this.$route.query.download;
    if (downloadOption != undefined) {
      this.downloadOption = downloadOption;
    }

    this.$refs.launcherDownloadChooser.removeAttribute("disabled");
  },
  watch: {
    downloadOption(newOption, oldOption) {
      if (newOption != oldOption) {
        this.$router.replace({
          query: { ...this.$route.query, download: newOption }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
section#join-community {
  background: linear-gradient(
    110deg,
    var(--brand-dark) 0 15%,
    var(--brand-light) 15% 45%,
    var(--brand-dark) 45% 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3vw));
  color: var(--text-white);
  padding: 0 1rem 1rem 1rem;
  text-align: right;
}

section#join-community {
  a {
    margin-left: 0.5rem;

    .g-image {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
}

#blog > ul {
  margin-bottom: 1rem;
}

.blogpost-meta {
  display: block;
  margin: 0.25rem auto 0.25rem 0;

  .author:after {
    content: "•";
    margin: 0 0.25rem;
  }
}

.iniline-code {
  margin-top: 0.5rem;
}

@media (min-width: 60rem) {
  section#join-community {
    padding-top: 0.2rem;
  }

  section#goals-and-ideas {
    margin-top: -2rem;
  }
}
</style>