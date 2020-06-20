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
        <code>Add Instance</code>.
        Select desired Minecraft version in the prompt.
      </span>
    </div>
    <div class="point">
      <div class="icon">2</div>
      <span>
        Select your new instance and click
        <code>Edit Instance</code>.
        Choose
        <code>Version</code>
        and click
        <code>Install Fabric</code>.
        MultiMC will do the job automatically.
      </span>
    </div>
    <div class="point">
      <div class="icon">3</div>
      <span>
        Choose
        <code>Loader mods</code> and drag Fabric API onto the list.
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
