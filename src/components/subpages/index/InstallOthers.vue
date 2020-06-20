<template>
  <div>
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
      As for Twitch, there is an <i>unofficial</i> mod named 
      <external-link
        href="https://www.curseforge.com/minecraft/mc-mods/jumploader"
      >Jumploader</external-link>
      allowing Fabric to work on Twitch, but it is <i>unofficial</i>.
    </div>
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";

export default {
  components: {
    ExternalLink
  }
}
</script>
