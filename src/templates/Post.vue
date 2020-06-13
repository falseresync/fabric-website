<template>
  <layout>
    <g-image class="cover-image" alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />

    <h1>{{ $page.post.title }}</h1>

    <post-meta :post="$page.post" />

    <div class="post-content" v-html="$page.post.content" />

    <post-meta :post="$page.post" />
  </layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    author
    path (to: "new_path")
    date (format: "MMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.cover-image {
  width: 100%;
}

.post-content {
  * {
    max-width: 100%;
  }
}
</style>