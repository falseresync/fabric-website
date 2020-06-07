<template>
  <layout>
    <div id="separator-1" class="separator"></div>
    <section>
      <select v-model="minecraftVersion">
        <option v-for="(version, i) in minecraftVersions" :key="i" :value="version">{{version}}</option>
      </select>

      <code v-highlight class="gradle">{{tab == 'buildscript' ? buildscript : properties}}</code>
    </section>
  </layout>
</template>

<script>
import stripIndent from "strip-indent";
import hljs from "highlight.js/lib/core";
import gradle from "highlight.js/lib/languages/gradle";
hljs.registerLanguage("gradle", gradle);

export default {
  metaInfo: {
    title: "Gradle info"
  },
  data() {
    return {
      tab: "buildscript",
      minecraftVersions: [],
      minecraftVersion: "<minecraftVersion>",
      yarnVersion: "<yarnVersion>",
      loaderVersion: "<loaderVersion>",
      fabricMavenCoordinates: "<fabricMavenCoordinates>",
      fabricVersion: "<fabricVersion>",
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
    };
  },
  computed: {
    buildscript() {
      return stripIndent(`
        dependencies {
          minecraft "com.mojang:minecraft:${this.minecraftVersion}"
          mappings "net.fabricmc:yarn:${this.yarnVersion}:v2"
          modImplementation "net.fabricmc:fabric-loader:${this.loaderVersion}"
          modImplementation "${this.fabricMavenCoordinates}${this.fabricVersion}"
        }
      `);
    },
    properties() {
      return stripIndent(`
        minecraft_version=${this.minecraftVersion}
        yarn_mappings=${this.yarnVersion}
        loader_version=${this.loaderVersion}
        fabric_version=${this.fabricVersion}
      `);
    }
  },
  async mounted() {
    this.fetchLoaderVersion();

    await fetch("https://meta.fabricmc.net/v2/versions/game")
      .then(response => response.json())
      .then(data => (this.minecraftVersions = data));

    this.selectVersion();

    this.minecraftVersions = this.minecraftVersions.map(
      version => version.version
    );

    this.populateFabricBranchesBreakpoints();
  },
  watch: {
    async minecraftVersion(newVersion, oldVersion) {
      if (oldVersion != "<minecraftVersion>") {
        this.updateRouteHash(newVersion);
      }

      this.fetchYarnVersion(newVersion);

      let fabricMavenMetadata =
        "https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml";
      let fabricMavenCoordinates = "net.fabricmc.fabric-api:fabric-api:";

      // Old coordinates for MC 1.14 and older
      for (let version of this.minecraftVersions) {
        if (version == "1.14") {
          fabricMavenMetadata =
            "https://maven.fabricmc.net/net/fabricmc/fabric/maven-metadata.xml";
          fabricMavenCoordinates = "net.fabricmc:fabric:";
          break;
        } else if (version == newVersion) {
          break;
        }
      }

      this.fabricMavenCoordinates = fabricMavenCoordinates;

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
        .then(data => (this.loaderVersion = data[0].version));
    },

    selectVersion() {
      let hash = this.$route.hash.substr(1).split("-");
      if (hash[0] == "version") {
        this.minecraftVersion = hash.slice(1).join("-");
      } else {
        for (let version of this.minecraftVersions) {
          if (version.stable) {
            this.minecraftVersion = version.version;
            break;
          }
        }
      }
    },

    populateFabricBranchesBreakpoints() {
      for (let i = 0; i < this.minecraftVersions.length; i++) {
        if (this.fabricBranches.mc1_14.breakpoint != null) {
          break;
        }
        if (this.minecraftVersions[i] == "20w06a") {
          this.fabricBranches.mc1_16.breakpoint = i;
        } else if (this.minecraftVersions[i] == "19w34a") {
          this.fabricBranches.mc1_15.breakpoint = i;
          this.fabricBranches.mc1_14.breakpoint = i + 1;
        }
      }
    },

    updateRouteHash(gameVersion) {
      this.$router.replace({ hash: "#version-" + gameVersion });
    },

    fetchYarnVersion(gameVersion) {
      fetch(
        "https://meta.fabricmc.net/v2/versions/yarn/" + gameVersion + "?limit=1"
      )
        .then(response => response.json())
        .then(data => (this.yarnVersion = data[0].version));
    },

    getFabricVersionAppendix(gameVersion) {
      let appendix = null;
      for (let [_, branch] of Object.entries(this.fabricBranches)) {
        if (this.minecraftVersions.indexOf(gameVersion) <= branch.breakpoint) {
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

          this.fabricVersion = latestVersion;
        });
    }
  },
  directives: {
    highlight: {
      bind(el, binding) {
        hljs.highlightBlock(el);
      },
      update(el, binding) {
        hljs.highlightBlock(el);
      }
    }
  }
};
</script>

<style scoped>
@import "~highlight.js/styles/github.css";


code {
  display: block;
  height: min-content;
  max-width: 100%;
  overflow-x: auto;
  padding: 0 1rem;
  white-space: pre;
}
</style>
