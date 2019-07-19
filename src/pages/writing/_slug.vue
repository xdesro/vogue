<template>
  <div class="layout layout--post">
    <PostHeader :post="currentPost" section="writing" />
    <main class="main post__content">
      <ul class="post__tags">
        <li v-for="(tag, index) in currentPost.fields.tags" :key="index" class="post__tag">{{tag}}</li>
      </ul>
      <div class="post__text" v-html="$md.render(currentPost.fields.body)"></div>
    </main>
  </div>
</template>

<script>
import PostHeader from "~/components/PostHeader";
export default {
  transition: "post",
  components: { PostHeader },
  computed: {
    currentPost() {
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
