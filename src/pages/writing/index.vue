<template>
  <div class="layout layout--writing">
    <PageHeader title="Writing" />
    <main class="main" id="main" role="main">
      <ul class="writing-list">
        <WritingListItem v-for="(post, index) in posts" :key="index" :post="post" />
      </ul>
    </main>
  </div>
</template>

<script>
import WritingListItem from "~/components/WritingListItem";
import PageHeader from "~/components/PageHeader";
export default {
  transition: "writing-list-page",
  components: { WritingListItem, PageHeader },
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
