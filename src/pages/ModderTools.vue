<template>
  <layout>
    <noscript v-html="`<h2>Most of the features on this page require JavaScript</h2>`" />

    <div id="separator-1" class="separator" />
    <section id="fabric-latest-versions">
      <h1>dev env versions</h1>

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
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          The recommended Loom version is
          <strong>{{devEnv.recommendedLoomVersion}}</strong>
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
          Fabric API version may not be accurate. Try consulting
          <external-link
            href="https://curseforge.com/minecraft/mc-mods/fabric-api/files"
          >the CurseForge page</external-link>if you have troubles. If you still cannot resolve a correct version of it, ask for help
          <external-link href="https://discord.gg/v6v4pMv">in our Discord.</external-link>
        </span>
      </div>

      <select v-model="devEnv.minecraftVersion">
        <option v-for="(item, i) in devEnv.minecraftVersions" :key="i" :value="item">{{item}}</option>
      </select>

      <select v-model="tab">
        <option v-for="(item, id) in tabs" :key="id" :value="id">{{item.name}}</option>
      </select>

      <code v-highlight="{ content: tabContent, syntax: tabs[tab].syntax }">{{tabContent}}</code>
    </section>

    <div class="separator" id="separator-2" />

    <section id="mappings-migration">
      <h1>mappings migration</h1>

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
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          Mappings can be auto updated by using the following command. Consult
          <external-link href="https://fabricmc.net/wiki/tutorial:migratemappings">the wiki page</external-link>for more information.
        </span>
      </div>

      <select v-model="devEnv.minecraftVersion">
        <option v-for="(item, i) in devEnv.minecraftVersions" :key="i" :value="item">{{item}}</option>
      </select>

      <code
        v-highlight="{ content: migrateMappingsCommand, syntax: 'bash' }"
      >{{migrateMappingsCommand}}</code>
    </section>
  </layout>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";
import stripIndent from "strip-indent";
import hljs from "highlight.js/lib/core";
import gradle from "highlight.js/lib/languages/gradle";
import properties from "highlight.js/lib/languages/properties";
import bash from "highlight.js/lib/languages/bash";
hljs.registerLanguage("gradle", gradle);
hljs.registerLanguage("properties", properties);
hljs.registerLanguage("bash", bash);

export default {
  components: {
    ExternalLink
  },
  metaInfo: {
    title: "Modder info"
  },
  data() {
    return {
      tab: "properties",
      tabs: {
        properties: {
          name: "gradle.properties",
          syntax: "properties"
        },
        buildscript: {
          name: "build.gradle",
          syntax: "gradle"
        }
      },
      devEnv: {
        recommendedLoomVersion: "0.4-SNAPSHOT",
        minecraftVersions: [],
        minecraftVersion: "[minecraftVersion]",
        yarnVersion: "[yarnVersion]",
        loaderVersion: "[loaderVersion]",
        fabricMavenCoordinates: "[fabricMavenCoordinates]",
        fabricVersion: "[fabricVersion]",
        fabricBranches: {
          mc1_16: {
            breakpoint: null,
            appendix: "1.16"
          },
          mc1_15: {
            breakpoint: null,
            appendix: "1.15"
          },
          mc1_14: {
            breakpoint: null,
            appendix: "1.14"
          }
        }
      }
    };
  },
  computed: {
    tabContent() {
      return this.tab === "buildscript" ? this.buildscript : this.properties;
    },
    buildscript() {
      return stripIndent(`
        dependencies {
          minecraft "com.mojang:minecraft:${this.devEnv.minecraftVersion}"
          mappings "net.fabricmc:yarn:${this.devEnv.yarnVersion}:v2"
          modImplementation "net.fabricmc:fabric-loader:${this.devEnv.loaderVersion}"
          modImplementation "${this.devEnv.fabricMavenCoordinates}${this.devEnv.fabricVersion}"
        }
      `);
    },
    properties() {
      return stripIndent(`
        minecraft_version=${this.devEnv.minecraftVersion}
        yarn_mappings=${this.devEnv.yarnVersion}
        loader_version=${this.devEnv.loaderVersion}
        fabric_version=${this.devEnv.fabricVersion}
      `);
    },
    migrateMappingsCommand() {
      return (
        "gradlew migrateMappings --mappings " + this.devEnv.minecraftVersion
      );
    },
    // This way it is not required to watch every change on devEnv object
    watchableMinecraftVersion() {
      return this.devEnv.minecraftVersion;
    }
  },
  async mounted() {
    this.fetchLoaderVersion();

    await fetch("https://meta.fabricmc.net/v2/versions/game")
      .then(response => response.json())
      .then(data => (this.devEnv.minecraftVersions = data));

    this.selectMinecraftVersion();

    this.devEnv.minecraftVersions = this.devEnv.minecraftVersions.map(
      version => version.version
    );

    this.populateFabricBranchesBreakpoints();
  },
  watch: {
    async watchableMinecraftVersion(newVersion, oldVersion) {
      if (oldVersion !== "[minecraftVersion]") {
        this.updateQueryMinecraftVersion(newVersion);
      }

      this.fetchYarnVersion(newVersion);

      let fabricMavenMetadata =
        "https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml";
      let fabricMavenCoordinates = "net.fabricmc.fabric-api:fabric-api:";

      // Old coordinates for MC 1.14 and older
      for (let version of this.devEnv.minecraftVersions) {
        if (version === "1.14") {
          fabricMavenMetadata =
            "https://maven.fabricmc.net/net/fabricmc/fabric/maven-metadata.xml";
          fabricMavenCoordinates = "net.fabricmc:fabric:";
          break;
        } else if (version === newVersion) {
          break;
        }
      }

      this.devEnv.fabricMavenCoordinates = fabricMavenCoordinates;

      this.fetchFabricVersion(
        fabricMavenMetadata,
        this.getFabricVersionAppendix(newVersion)
      );
    }
  },
  methods: {
    fetchLoaderVersion() {
      fetch("https://meta.fabricmc.net/v2/versions/loader?limit=1")
        .then(response => response.json())
        .then(data => (this.devEnv.loaderVersion = data[0].version));
    },

    selectMinecraftVersion() {
      let version = this.$route.query.version;
      if (version !== undefined) {
        this.devEnv.minecraftVersion = version;
      } else {
        for (let version of this.devEnv.minecraftVersions) {
          if (version.stable) {
            this.devEnv.minecraftVersion = version.version;
            break;
          }
        }
      }
    },

    populateFabricBranchesBreakpoints() {
      for (let i = 0; i < this.devEnv.minecraftVersions.length; i++) {
        if (this.devEnv.fabricBranches.mc1_14.breakpoint != null) {
          break;
        }
        if (this.devEnv.minecraftVersions[i] == "20w06a") {
          this.devEnv.fabricBranches.mc1_16.breakpoint = i;
        } else if (this.devEnv.minecraftVersions[i] == "19w34a") {
          this.devEnv.fabricBranches.mc1_15.breakpoint = i;
          this.devEnv.fabricBranches.mc1_14.breakpoint = i + 1;
        }
      }
    },

    updateQueryMinecraftVersion(minecraftVersion) {
      this.$router.replace({
        query: { ...this.$route.query, minecraftVersion }
      });
    },

    fetchYarnVersion(gameVersion) {
      fetch(
        "https://meta.fabricmc.net/v2/versions/yarn/" + gameVersion + "?limit=1"
      )
        .then(response => response.json())
        .then(data => (this.devEnv.yarnVersion = data[0].version));
    },

    getFabricVersionAppendix(gameVersion) {
      let appendix = null;
      for (let [_, branch] of Object.entries(this.devEnv.fabricBranches)) {
        if (
          this.devEnv.minecraftVersions.indexOf(gameVersion) <=
          branch.breakpoint
        ) {
          appendix = branch.appendix;
          break;
        }
      }
      return appendix;
    },

    fetchFabricVersion(fabricMavenMetadata, versionAppendix) {
      fetch(fabricMavenMetadata)
        .then(response => response.text())
        .then(responseText =>
          new DOMParser().parseFromString(responseText, "text/xml")
        )
        .then(document => {
          let latestVersion = document.getElementsByTagName("release")[0]
            .textContent;
          let versions = document.getElementsByTagName("version");

          if (versionAppendix != null) {
            for (let i = versions.length - 1; i >= 0; i--) {
              let version = versions[i].textContent;
              if (version.endsWith(versionAppendix)) {
                latestVersion = version;
                break;
              }
            }
          } else {
            for (let i = versions.length - 1; i >= 0; i--) {
              let version = versions[i].textContent;
              if (version.split("-").length == 1) {
                latestVersion = version;
                break;
              }
            }
          }

          this.devEnv.fabricVersion = latestVersion;
        });
    }
  },
  directives: {
    highlight: {
      update(el, binding) {
        el.innerHTML = hljs.highlight(
          binding.value.syntax,
          binding.value.content,
          true
        ).value;
      }
    }
  }
};
</script>

<style scoped>
@import "~highlight.js/styles/github.css";

select {
  margin-bottom: 1rem;
}

code {
  background: var(--background-grey);
  border-left: 0.5rem solid var(--brand-light);
  color: var(--text-black);
  display: block;
  font-size: 0.9rem;
  height: min-content;
  margin: 1rem auto;
  max-width: 100%;
  overflow-x: auto;
  padding: 0.5rem 1.5rem;
  white-space: pre;
}

@media (min-width: 60rem) {
  select {
    margin-bottom: auto;
    margin-right: 1rem;
  }
}
</style>
