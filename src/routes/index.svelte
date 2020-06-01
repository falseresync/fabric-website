<script>
  import ExternalLink from "@/components/ExternalLink.svelte";
</script>

<style>
  section#border {
    width: 100%;
    height: 1em;
    background: linear-gradient(
      110deg,
      #a67c52 0 30%,
      #c69c6d 30% 55%,
      #a67c52 55% 100%
    );
  }

  section#design-install {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  header {
    padding: 1em;
    position: relative;
    height: 225px;
    background: linear-gradient(110deg, #c69c6d 0 30%, #a67c52 30% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));
    text-align: right;
  }

  header > img {
    height: 3em;
  }

  header > p {
    color: white;
    margin: 0;
    font-size: 1.5em;
  }

  section#projects {
    margin-top: -2em;
  }

  section#projects > .subsections {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -1em;
  }

  #projects-tools-2 > h2 {
    display: none;
  }

  .point {
    display: flex;
    margin-bottom: 1em;
  }

  .point.single-line {
    align-items: center;
  }

  .point > svg {
    flex-shrink: 0;
    display: inline-block;
    background-color: #a67c52;
    color: white;
    border-radius: 50%;
    padding: 0.5em;
    width: 24px;
    height: 24px;
  }

  .point > span {
    margin-left: 1em;
  }

  ul.projects > li > h3 {
    margin-bottom: -0.75em;
  }

  @media (min-width: 768px) {
    header {
      height: 200px;
      background: linear-gradient(70deg, #c69c6d 0 40%, #a67c52 40% 100%);
      clip-path: polygon(0 35%, 100% 0, 100% 100%, 0 calc(100% - 3vw));
      margin-top: -2em;
    }

    section#design-install {
      flex-direction: row;
    }

    section#design-install > * {
      width: 45%;
    }

    section#projects > .subsections {
      flex-direction: row;
    }

    section#projects > .subsections > * {
      width: 45%;
    }

    #projects-tools-2 > h2 {
      display: inherit;
      visibility: hidden;
    }
  }
</style>

<svelte:head>
  <title>Fabric - Minecraft modding toolchain</title>
</svelte:head>

<section id="border" />

<section id="design-install">
  <div id="design">
    <h1>design</h1>
    <div class="point">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <span>
        We target snapshots as well, allowing for snappier mod updates and more
        informed community
      </span>
    </div>
    <div class="point">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0
          0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0
          0-7.78z" />
      </svg>
      <span>
        All parts of Fabric are fully free for everyone to use to any extent!
      </span>
    </div>
  </div>
  <div id="install">
    <h1>install</h1>
    <p>
      Fabric consists of 2 parts: Fabric Loader and Fabric API. You need both
      for most mods to run.
    </p>
    <div class="point single-line">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>
        <ExternalLink href="install" text="Download Fabric Loader" />
      </span>
    </div>
    <div class="point single-line">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>
        <ExternalLink
          href="https://curseforge.com/minecraft/mc-mods/fabric-api"
          text="Download Fabric API" />
      </span>
    </div>
  </div>
</section>

<header>
  <img src="logo.png" alt="Fabric Logo" />
  <p>lightweight</p>
  <p>unopinionated</p>
  <p>minecraft modding toolchain</p>
</header>

<section id="projects">
  <h1>projects</h1>
  <div class="subsections">
    <div id="projects-core">
      <h2>core</h2>
      <ul class="projects">
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-loader"
              text="Fabric Loader"
              github />
          </h3>
          <p>
            Version-independent mod loader, providing mod loading and code
            patching functionality
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric"
              text="Fabric API"
              github />
          </h3>
          <p>
            “Hook layer”, providing the most common hooks and interoperability
            required for Fabric mods
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-installer"
              text="Fabric Installer"
              github />
          </h3>
          <p>
            Tool for creating Fabric-ready profiles for the official Minecraft
            launcher
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-loom"
              text="Loom"
              github />
          </h3>
          <p>Gradle-based build system, used for developing Fabric mods</p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/yarn"
              text="Yarn"
              github />
          </h3>
          <p>
            Deobfuscated friendly names for the most recent versions of the game
            based on community contributions
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/intermediary"
              text="Intermediary"
              github />
          </h3>
          <p>
            Stable cross-version names and match information between Minecraft
            releases
          </p>
        </li>
      </ul>
    </div>
    <div id="projects-libs">
      <h2>libs</h2>
      <ul class="projects">
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-language-kotlin"
              text="Fabric Language Kotlin"
              github />
          </h3>
          <p>Fabric Loader module for supporting Kotlin language in mods</p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-language-scala"
              text="Fabric Language Scala"
              github />
          </h3>
          <p>Fabric Loader module for supporting Scala language in mods</p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/fabric-language-groovy"
              text="Fabric Language Groovy"
              github />
          </h3>
          <p>Fabric Loader module for supporting Groovy language in mods</p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/Mixin"
              text="Mixin"
              github />
          </h3>
          <p>
            Trait/mixin framework for Java created by Mumfrey for Sponge -
            forked by Fabric to adapt to our use cases
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/tiny-mappings-parser"
              text="tiny-mappings-parser"
              github />
          </h3>
          <p>Library for processing Tiny-format mapping files</p>
        </li>
      </ul>
    </div>
    <div id="projects-tools-1">
      <h2>tools</h2>
      <ul class="projects">
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/Enigma"
              text="Enigma"
              github />
          </h3>
          <p>
            Tool for deobfuscation of Java classes originally by
            <ExternalLink
              href="https://www.cuchazinteractive.com/enigma/"
              text="Cuchaz Interactive" />
            . Our changes include countless bugfixes, optimizations and
            improvements across the codebase, as well as user experience and
            compatibility improvements.
            <br />
            <br />
            <ExternalLink
              href="https://www.cuchazinteractive.com/enigma/"
              text="Downloads can be found here" />
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/stitch"
              text="Stitch"
              github />
          </h3>
          <p>
            Assortment of small tools providing various functionality used by
            the Fabric project in command-line form, such as generating and
            updating “intermediaries” for cross-version name stability, based on
            Matcher output or merging client and server Minecraft .JARs.
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/weave"
              text="Weave"
              github />
          </h3>
          <p>
            Earlier iteration of Stitch and is now generally only used to export
            Enigma-format mappings to Tiny-format files
          </p>
        </li>
      </ul>
    </div>
    <div id="projects-tools-2">
      <h2>tools (continuation)</h2>
      <ul class="projects">
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/tiny-remapper"
              text="tiny-remapper"
              github />
          </h3>
          <p>
            tiny-remapper project provides a fast, optimized tool for accurately
            remapping JAR files using the Tiny mapping format.
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/sfPlayer1/Matcher"
              text="Matcher"
              github />
          </h3>
          <p>
            sfPlayer1’s tool for tracking elements in obfuscated Java archives
            across releases used for updating Yarn mappings
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/intellij-fernflower"
              text="Fernflower"
              github />
          </h3>
          <p>
            Modified version of JetBrains’ upstream with line number mapping
            information exposed
          </p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/procyon"
              text="Procyon"
              github />
          </h3>
          <p>Modified version of Procyon decompiler with minor bug fixes</p>
        </li>
        <li>
          <h3>
            <ExternalLink
              href="https://github.com/FabricMC/cfr"
              text="CFR"
              github />
          </h3>
          <p>
            Modified version of CFR Java decompiler with minor code generation
            quality extensions
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
