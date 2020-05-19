<template>
  <div class="layout layout--post">
    <PostHeader :post="currentPost" section="writing" />
    <main class="main post__content" id="main" role="main">
      <ul class="post__tags">
        <li v-for="(tag, index) in currentPost.fields.tags" :key="index" class="post__tag">{{ tag }}</li>
      </ul>
      <div class="post__text" v-html="$md.render(currentPost.fields.body)"></div>
    </main>
  </div>
</template>

<script>
export default {
  transition: "post",
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost;
    },
    isLoading() {
      return this.$store.state.post.isLoading;
    },
    meta() {
      return {
        title: `Henry Desroches | ${this.currentPost.fields.title}`,
        description: this.currentPost.fields.excerpt,
        image: this.currentPost.fields.socialSharingImage
          ? this.currentPost.fields.socialSharingImage.fields.file.url
          : false,
      };
    },
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          itemprop: "description",
          content: this.meta.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.meta.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.meta.description,
        },
        { hid: "og:title", name: "og:title", content: this.meta.title },
        {
          hid: "og:description",
          name: "og:description",
          content: this.meta.description,
        },
        {
          name: "twitter:card",
          content: this.meta.image ? "summary_large_image" : "summary",
        },
        {
          property: "og:image",
          content: this.meta.image ? `http:${this.meta.image}` : "https://henry.codes/open-graph.jpg",
        },
        {
          name: "twitter:image:src",
          content: this.meta.image ? `http:${this.meta.image}` : "https://henry.codes/open-graph.jpg",
        },
      ],
      script: [{ src: "https://static.codepen.io/assets/embed/ei.js" }],
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("post/getPostBySlug", params.slug);
  },
};
</script>
