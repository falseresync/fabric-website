<template>
  <layout>
    <div class="separator" id="separator-1" />

    <h1># {{ $page.tag.title }}</h1>

    <section v-for="year in years" :key="year">
      <h2>{{year}}</h2>
      <post-card class="post-card" v-for="edge in postsByYear(year)" :key="edge.node.id" :post="edge.node"/>
    </section>
  </layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            author
            path (to: "new_path")
            date (format: "MMM D, YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },

  metaInfo() {
    return {
      title: `# ${this.$page.tag.title}`
    };
  },

  computed: {
    years() {
      const years = {};
      const posts = this.$page.tag.belongsTo.edges;
      posts.map(post => {
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
      const posts = this.$page.tag.belongsTo.edges;
      return posts.filter(post => {
        return post.node.date.includes(year);
      });
    }
  }
};
</script>

<style lang="scss">
</style>
