<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ currentPost.fields.title }}</h1>
    </header>
    <main class="main main--content">
      <!-- <div v-for="(post, index) in posts" :key="index">{{post.fields}}</div> -->
      <div class="container" v-html="$md.render(currentPost.fields.body)"></div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    currentPost() {
      // console.log(this.$store.state.post.currentPost.entry_id);
      return this.$store.state.post.currentPost;
    },
    isLoading() {
      return this.$store.state.post.isLoading;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("post/getPostBySlug", params.slug);
  }
};
</script>
