<template>  
  <div>
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
        <external-link :href="jar">Download Fabric Installer</external-link>
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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      <span>
        <div>
          <b>OR</b> Download with curl: 
        </div>
        <code>{{curl}}</code>
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
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      <span>
        <div>
          <b>OR</b> Download with wget:
        </div>
        <code>{{wget}}</code>
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
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";

export default {
  props: [ "jar" ],
  components: {
    ExternalLink
  },
  computed: {
    filename() {
      return this.jar.split("/").slice(-1)[0];
    },

    curl() {
      return `curl -o ${this.filename} ${this.jar}`;
    },
    
    wget() {
      return `wget -o ${this.filename} ${this.jar}`;
    }
  }
}
</script>