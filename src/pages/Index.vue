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
  
        <please-wait-data-point v-if="pleaseWaitDataPoint" />

        <div class="point">
          <div>
            <noscript>This feature requires JavaScript</noscript>
            <select v-model="downloadOption" :disabled="installerUrlJar === null">
              <option
                v-for="option in downloadOptions"
                :key="option.id"
                :value="option.id"
              >{{option.name}}</option>
            </select>
          </div>
        </div>

        <download-vanilla 
          :jar="installerUrlJar || ''"
          :exe="installerUrlExe || ''" 
          v-if="downloadOption == 'vanilla'"
          />
        <download-server
          :jar="installerUrlJar || ''"
          v-else-if="downloadOption == 'server'"
          />
        <download-multimc v-else-if="downloadOption == 'multimc'" />
        <download-others v-else-if="downloadOption == 'others'" />
      </div>
      <div class="column">
        <h1>install</h1>

        <install-vanilla v-if="downloadOption == 'vanilla'" />
        <install-server :jar="installerUrlJar || ''" v-else-if="downloadOption == 'server'" />
        <install-multimc v-else-if="downloadOption == 'multimc'" />
        <install-others v-else-if="downloadOption == 'others'" />
      </div>
    </section>

    <section id="join-community">
      <div class="wrapper">
        <h1>join our community</h1>
        <a href="https://discord.gg/v6v4pMv">
          <g-image alt="Discord Logo" src="~/assets/discord-logo.png" />
        </a>
        <a href="https://github.com/FabricMC">
          <g-image alt="GitHub Logo" src="~/assets/github-logo.png" />
        </a>
      </div>
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
import DownloadVanilla from "~/components/subpages/index/DownloadVanilla";
import InstallVanilla from "~/components/subpages/index/InstallVanilla";

import DownloadServer from "~/components/subpages/index/DownloadServer";
import InstallServer from "~/components/subpages/index/InstallServer";

import DownloadMultiMC from "~/components/subpages/index/DownloadMultiMC";
import InstallMultiMC from "~/components/subpages/index/InstallMultiMC";

import DownloadOthers from "~/components/subpages/index/DownloadOthers";
import InstallOthers from "~/components/subpages/index/InstallOthers";

import ModdingIntro from "~/components/subpages/ModdingIntro";
import PleaseWaitDataPoint from "~/components/PleaseWaitDataPoint";
import ExternalLink from "~/components/ExternalLink";
import PostCard from "~/components/PostCard";

export default {
  metaInfo: {
    title: "Minecraft modding toolchain"
  },
  components: {
    DownloadVanilla,
    InstallVanilla,

    DownloadServer,
    InstallServer,

    // Because it splits by text case
    DownloadMultimc: DownloadMultiMC,
    InstallMultimc: InstallMultiMC,

    DownloadOthers,
    InstallOthers,

    ModdingIntro,
    PleaseWaitDataPoint,
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
      downloadOption: "vanilla",
      pleaseWaitDataPointTimer: null,
      pleaseWaitDataPoint: false,
      installerUrlJar: null,
      installerUrlExe: null
    };
  },
  mounted() {
    this.setDownloadFromQuery(this.$route.query.download);

    this.pleaseWaitDataPointTimer = setTimeout(this.checkPleaseWaitDataPointValidity, 1000);

    fetch("https://meta.fabricmc.net/v2/versions/installer")
      .then(response => response.json())
      .then(data => {
        this.installerUrlJar = data[0].url;
        this.installerUrlExe = this.installerUrlJar.replace(".jar", ".exe");
        this.pleaseWaitDataPoint = false;
      })
      .catch(error => {
        console.log(error);
        this.pleaseWaitDataPoint = true;
      })
      .finally(() => {        
        clearTimeout(this.pleaseWaitDataPointTimer);
      });
  },
  watch: {
    downloadOption(newOption, oldOption) {
      if (newOption != oldOption) {
        this.$router.replace({
          query: { ...this.$route.query, download: newOption }
        });
      }
    },
    '$route.query.download'(newOption, oldOption) {
      if (newOption != oldOption) {
        this.setDownloadFromQuery(newOption);
      }
    }
  },
  methods: {
    setDownloadFromQuery(download) {
      if (download == undefined || this.downloadOptions.filter(it => it.id == download).length < 1) {
        this.downloadOption = "vanilla";
      } else {
        this.downloadOption = download;
      }
    },
    checkPleaseWaitDataPointValidity() {
      if (this.installerUrlJar === null) {
        this.pleaseWaitDataPoint = true;
        this.pleaseWaitDataPointTimer = setTimeout(this.checkPleaseWaitDataPointValidity, 500);
      } else {
        this.pleaseWaitDataPoint = false;
        clearTimeout(this.pleaseWaitDataPointTimer);
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
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 50% 100%, 0 calc(100% - 3vw));
  padding: 0.15rem;

  .wrapper {
    background: var(--background);
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 50% 100%, 0 calc(100% - 3vw));
    margin: 0.15rem;
    text-align: center;
    padding: 0.5rem;

    h1 {
      margin-top: 0;
    }

    a {
      margin-left: 0.5rem;

      .g-image {
        height: 2rem;
        width: 2rem;
      }
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