<template>
  <div>
    <h3>
      <external-link :href="post.path">{{post.title}}</external-link>
    </h3>
    <div>{{description}}</div>
    <post-meta :post="post" :disable-tags="disableTags" />
  </div>
</template>

<script>
import ExternalLink from "~/components/ExternalLink";
import PostMeta from "~/components/PostMeta";

export default {
  components: {
    ExternalLink,
    PostMeta
  },

  props: {
    post: Object,
    disableTags: {
      type: Boolean,
      default: false
    },
    shortenDescription: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    description() {
      return this.shortenDescription
        ? this.post.description.substring(0, 140) + "..."
        : this.post.description;
    }
  }
};
</script>

<style lang="scss" scoped>
.heading {
  & > * {
    display: inline;
  }

  & > .continue {
    margin-left: 1rem;
  }
}

.continue {
  align-items: center;
  display: inline-flex;

  & > svg {
    height: 1em;
    width: 1em;
  }
}
</style>
