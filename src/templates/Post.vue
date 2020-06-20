<template>
  <layout>
    <g-image class="cover-image" alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
    <div class="separator" id="separator-1" v-else />

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

  a {
    text-decoration: underline;
  }

  blockquote {
    border-left: 0.3rem solid var(--brand-light);
    margin: 1rem 0;
    padding: 1rem 0 1rem 1.5rem;

    p {
      margin: 0;
    }
  }

  // Default PrismJS theme
  code {
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: #999;
    }

    .namespace {
      opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #c71b7b;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #8d5e25;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #20a7e0;
    }

    .token.function,
    .token.class-name {
      color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: #e90;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }
}
</style>