<template>
  <div>
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
