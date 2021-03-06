<template>
  <layout>
    <noscript v-html="`<h2>Most of the features on this page require JavaScript</h2>`" />

    <div id="separator-1" class="separator" />

    <section class="columns" id="new-to-modding">
      <div class="column">
        <h1>new to modding?</h1>
        <modding-intro class="column" />
      </div>
      <div class="column">
        <h1>want examples?</h1>
        <div class="point">
          <div class="icon">1</div>
          <span>
            Check out
            <external-link href="https://github.com/FabricMC/fabric-example-mod">Fabric Example Mod</external-link>
            providing you a configured bare minimum template to start modding.
          </span>
        </div>
        <div class="point single-line">
          <div class="icon">2</div>
          <span>
            There's
            <external-link
              href="https://github.com/natanfudge/fabric-example-mod-kotlin"
            >Fabric Example Mod in Kotlin</external-link>too!
          </span>
        </div>
        <div class="point">
          <div class="icon">3</div>
          <span>
            If you are into big mods, following mods and libs are a great place for studying:
            <noscript>(This list is better with JavaScript enabled)</noscript>
            <ul>
              <li v-for="example in modExamplesCurrent" :key="example.link">
                <external-link :href="example.link">{{example.name}}</external-link>
              </li>
            </ul>
          </span>
        </div>        
        <div class="point">
          <div class="icon">4</div>
          <span>
            Struggling with Mixins? Look at
            <external-link href="https://github.com/SpongePowered">SpongePowered projects</external-link>
            code for examples!
            Though those aren't Fabric, they still contain <i>a lot of</i> applicable reference examples.
          </span>
        </div>
      </div>
    </section>

    <div id="separator-3" class="separator" />

    <section v-autoscroll="$route.query.minecraftVersion !== undefined" id="dev-env-versions">
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
      
      <please-wait-data-point v-if="pleaseWaitDataPoint" />

      <noscript v-html="`<div>This feature requires JavaScript</div>`" />

      <select v-model="devEnv.minecraftVersion" :disabled="selectorDisabledNoscript">
        <option v-for="(item, i) in devEnv.minecraftVersions" :key="i" :value="item">{{item}}</option>
      </select>

      <select v-model="tab" :disabled="selectorDisabledNoscript">
        <option v-for="(item, id) in tabs" :key="id" :value="id">{{item.name}}</option>
      </select>

      <code class="code-block" v-highlight="{ content: tabContent, syntax: tabs[tab].syntax }">{{tabContent}}</code>
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

      <code
        class="code-block"
        v-highlight="{ content: migrateMappingsCommand, syntax: 'bash' }"
      >{{migrateMappingsCommand}}</code>
    </section>
  </layout>
</template>

<script>
import ModdingIntro from "~/components/subpages/ModdingIntro";
import PleaseWaitDataPoint from "~/components/PleaseWaitDataPoint";
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
    ModdingIntro,
    PleaseWaitDataPoint,
    ExternalLink
  },
  metaInfo: {
    title: "Make mods"
  },
  data() {
    return {
      selectorDisabledNoscript: true,
      modExamples: [
        {
          link: "https://github.com/TechReborn",
          name: "TechReborn org"
        },
        {
          link: "https://github.com/TerraformersMC",
          name: "TerraformersMC org"
        },
        {
          link: "https://github.com/shedaniel/RoughlyEnoughItems",
          name: "REI mod"
        },
        {
          link: "https://github.com/TeamSuperPeople/azuma",
          name: "Azuma mod"
        },
        {
          link: "https://github.com/OnyxStudios",
          name: "OnyxStudios org"
        },
        {
          link: "https://github.com/CottonMC",
          name: "CottonMC org"
        },
        {
          link: "https://github.com/jellysquid3",
          name: "JellySquid author"
        },
        {
          link: "https://github.com/SuperCoder7979",
          name: "SuperCoder79 author"
        },
        {
          link: "https://github.com/grondag",
          name: "grondag author"
        },
        {
          link: "https://github.com/AllOfFabric",
          name: "All Of Fabric org"
        },
        {
          link: "https://github.com/AlexIIL",
          name: "AlexIIL author"
        },
        {
          link: "https://github.com/FabLabsMC",
          name: "FabLabs org"
        }
      ],
      modExamplesCurrentIds: [0, 1, 2],
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
      pleaseWaitDataPointTimer: null,
      pleaseWaitDataPoint: true,
      devEnv: {
        recommendedLoomVersion: "0.4-SNAPSHOT",
        minecraftVersions: [],
        minecraftVersion: null,
        yarnVersion: null,
        loaderVersion: null,
        fabricMavenCoordinates: null,
        fabricVersion: null,
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
    modExamplesCurrent() {
      return this.modExamplesCurrentIds.map(id => this.modExamples[id]);
    },
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
    this.selectorDisabledNoscript = false;

    this.modExamplesCurrentIds = [];
    while (this.modExamplesCurrentIds.length < 3) {
      let random = this.getRandomInt(0, this.modExamples.length);
      if (!this.modExamplesCurrentIds.includes(random)) {
        this.modExamplesCurrentIds.push(random);
      }
    }

    this.setupPleaseWaitDataPointTimer();

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
      if (oldVersion !== null) {
        this.updateQueryMinecraftVersion(newVersion);
      }

      this.setupPleaseWaitDataPointTimer();

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
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },

    setupPleaseWaitDataPointTimer() {
      this.pleaseWaitDataPoint = true;
      this.pleaseWaitDataPointTimer = setTimeout(this.checkPleaseWaitDataPointValidity, 500);
    },

    checkPleaseWaitDataPointValidity() {
      if (this.devEnv.fabricVersion === null
          || this.devEnv.yarnVersion === null
          || this.devEnv.loaderVersion === null
          || this.devEnv.minecraftVersion === null) {
        this.pleaseWaitDataPoint = true;
        this.pleaseWaitDataPointTimer = setTimeout(this.checkPleaseWaitDataPointValidity, 500);
      } else {
        this.pleaseWaitDataPoint = false;
        clearTimeout(this.pleaseWaitDataPointTimer);
      }
    },

    fetchLoaderVersion() {
      fetch("https://meta.fabricmc.net/v2/versions/loader?limit=1")
        .then(response => response.json())
        .then(data => (this.devEnv.loaderVersion = data[0].version));
    },

    selectMinecraftVersion() {
      let version = this.$route.query.minecraftVersion;
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
    },    
    autoscroll: {
      update(el, binding) {
        if (binding.value) {
          el.scrollIntoView();
        }
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

@media (min-width: 60rem) {
  select {
    margin-bottom: auto;
    margin-right: 1rem;
  }
}
</style>
