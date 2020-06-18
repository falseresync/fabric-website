<template>
  <div>    
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
