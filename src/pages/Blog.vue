<template>
  <layout>
    <div class="separator" id="separator-1" />

    <h1>all blog posts</h1>

    <section v-for="year in years" :key="year">
      <h2>{{year}}</h2>
      <post-card class="post-card" v-for="edge in postsByYear(year)" :key="edge.node.id" :post="edge.node"/>
    </section>
  </layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "MMM D, YYYY")
        author
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path (to: "new_path")
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  components: {
    PostCard
  },

  metaInfo: {
    title: 'Blog'
  },
  
  computed: {
    years() {
      const years = {};
      const posts = this.$page.posts.edges;
      posts.map((post) => {
        const year = post.node.date.split(" ")[2];
        years[year] = "";
      });
      return Object.keys(years).sort((a, b) => {
        return b - a;
      });
    }
  },

  methods: {
    postsByYear(year) {
      const posts = this.$page.posts.edges;
      return posts.filter((post) => {
        return post.node.date.includes(year);
      })
    }
  }
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: 1.5rem;
}
</style>
