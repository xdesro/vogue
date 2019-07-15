<template>
  <div class="layout layout--writing">
    <Header title="Writing" />
    <main class="main">
      <ul class="writing-list">
        <WritingListItem v-for="(post, index) in posts" :key="index" :post="post" />
      </ul>
    </main>
  </div>
</template>

<script>
import WritingListItem from "~/components/WritingListItem";
import Header from "~/components/Header";
export default {
  components: { WritingListItem, Header },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("posts/getPosts", params.slug);
  }
};
</script>
