<template>
  <main>
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
          <select v-model="downloadOption" id="downloads-launcher-chooser">
            <option
              v-for="option in downloadOptions"
              :key="option.id"
              :value="option.id"
            >{{option.name}}</option>
          </select>
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
          <div class="point single-line">
            <div class="icon">3</div>
            <span>Put Fabric API into .minecraft/mods/ folder.</span>
          </div>
        </template>
      </div>
    </section>

    <section id="join-community">
      <h1>join our community</h1>
      <a href="https://discord.gg/v6v4pMv">
        <img alt="Discord Logo" src="~assets/discord-logo.png" />
      </a>
      <a href="https://github.com/FabricMC">
        <img alt="GitHub Logo" src="~assets/github-logo.png" />
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
      <div id="make-mods" class="column">
        <h1>make mods</h1>
        <div>
          Making mods with Fabric is easy and fun! We have a whole community of
          modders at
          <external-link href="https://discord.gg/v6v4pMv">our Discord</external-link>ready to help you if you struggle. But you need to start somewhere. Here's
          a couple of steps to get you going.
        </div>
        <div class="point">
          <div class="icon">1</div>
          <span>
            Check out
            <external-link href="https://fabricmc.net/wiki/tutorial:setup">this guide on our wiki</external-link>on how to set up your development environment.
          </span>
        </div>
        <div class="point">
          <div class="icon">2</div>
          <span>
            Try adding
            <external-link href="https://fabricmc.net/wiki/tutorial:items">an item</external-link>or
            <external-link href="https://fabricmc.net/wiki/tutorial:blocks">a block.</external-link>Both of the tutorials you can find on our wiki by the provided links.
          </span>
        </div>
        <div class="point">
          <div class="icon">3</div>
          <span>
            Explore the wiki! You will find all sorts of stuff there. It might be a
            little out of date, so if something just doesn't wanna work, don't
            hesitate to ask questions. You're always welcome!
          </span>
        </div>
      </div>
      <div id="blog" class="column">
        <h1>blog</h1>
        <ul>
          <li>
            <h3>
              <external-link href="blog/538397-fabric-for-minecraft-1-16">Fabric for Minecraft 1.16</external-link>
            </h3>
            <span>
              Fabric for Minecraft 1.16 has been released, many changes have been
              deployed with this release.
            </span>
            <small class="blogpost-meta">
              <span class="author">modmuss50</span>
              <span class="timestamp">Jun 12, 2020</span>
            </small>
          </li>
          <li>
            <h3>
              <external-link href="blog/134888-may-mods-highlight">May Mods Highlight</external-link>
            </h3>
            <span>
              May was intense! A whole bunch of updates, new mods and ideas have
              been storming our community in the last month.
            </span>
            <small class="blogpost-meta">
              <span class="author">blog team</span>
              <span class="timestamp">Jun 6, 2020</span>
            </small>
          </li>
          <li>
            <h3>
              <external-link
                href="blog/249240-critical-changes-to-dimensions"
              >Critical changes to dimensions</external-link>
            </h3>
            <span>
              Mojang decided to heavily rewrite dimenstions. A lot of stuff is now
              broken.
            </span>
            <small class="blogpost-meta">
              <span class="author">modmuss50</span>
              <span class="timestamp">May 22, 2020</span>
            </small>
          </li>
        </ul>
        <router-link to="/blog" class="icon-button">
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
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import ExternalLink from '@/components/ExternalLink'

export default {
  components: {
    ExternalLink
  },

  data() {
    return {
      downloadOptions: [
        {
          id: 'vanilla',
          name: 'Minecraft Launcher'
        },
        {
          id: 'server',
          name: 'Minecraft Server'
        },
        {
          id: 'multimc',
          name: 'MultiMC'
        },
        {
          id: 'atlauncher',
          name: 'ATLauncher'
        },
        {
          id: 'mcupdater',
          name: 'MCUpdater'
        },
        {
          id: 'technic',
          name: 'Technic'
        }
      ],
      downloadOption: 'vanilla'
    }
  },

  mounted() {
    let hash = this.$route.hash.substr(1).split("-")
    if (hash[0] == "download") {
      this.downloadOption = hash[1]
    }    
  },

  watch: {
    downloadOption (newOption, oldOption) {
      this.$router.replace({ hash: "#download-" + newOption })
    }
  }
}
</script>

<style scoped>
section {
  padding: 1rem;
}

section#join-community {
  background: linear-gradient(
    110deg,
    var(--brand-dark) 0 15%,
    var(--brand-light) 15% 45%,
    var(--brand-dark) 45% 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3vw));
  color: var(--text-white);
  padding: 0.5rem 2rem 1rem 0;
  text-align: right;
}

section#join-community > a {
  margin-left: 0.5rem;
}

section#join-community > a > img {
  height: 2.5rem;
}

#blog > ul {
  margin-bottom: 1rem;
}

.columns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.point {
  display: flex;
  margin: 1rem auto;
}

.point.single-line {
  align-items: center;
}

.point > svg,
.point > .icon {
  background: var(--brand-dark);
  border-radius: 50%;
  color: var(--text-white);
  flex-shrink: 0;
  height: 1.2rem;
  overflow: visible;
  padding: 0.75rem;
  text-align: center;
  width: 1.2rem;
}

.point > .icon {
  font-weight: 600;
  line-height: 1.2rem;
}

.point > span {
  margin-left: 1rem;
}

.icon-button {
  align-items: center;
  border: 2px solid var(--brand-light);
  border-radius: 2rem;
  display: inline-flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.icon-button:hover,
.icon-button:focus {
  border-color: var(--brand-dark);
}

.icon-button > span {
  display: block;
}

.icon-button > svg {
  height: 1.2rem;
  margin-left: 1rem;
}

.blogpost-meta {
  display: block;
  margin: 0.25rem auto 0.25rem 0;
}

.blogpost-meta > .author:after {
  content: '•';
  margin: 0 0.25rem;
}

@media (min-width: 60rem) {
  section#goals-and-ideas {
    margin-top: -2rem;
  }

  .columns {
    flex-direction: row;
  }

  .column {
    flex-basis: 47.5%;
  }
}
</style>
