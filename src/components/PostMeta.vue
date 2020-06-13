<template>
  <small class="blogpost-meta">
    <span class="author">{{ post.author }}</span>
    <span class="date">{{ post.date }}</span>
    <span v-if="post.timeToRead" class="time-to-read">{{ post.timeToRead }} min read</span>
    <span v-if="post.tags && !disableTags" class="tags">
      <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path">#{{tag.title}}</g-link>
    </span>
  </small>
</template>

<script>
export default {
  props: {
    post: Object,
    disableTags: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.blogpost-meta {
  color: var(--text-grey);
  display: block;
  margin: 0.5rem auto 0.5rem 0;

  & > *:not(:last-child):after {
    content: "•";
    margin: 0 0.5rem;
  }

  & > .tags > *:not(:last-child) {
    margin-right: 0.5rem;
  }
}
</style>