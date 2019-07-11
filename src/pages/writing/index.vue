<template>
  <div>
    <header class="header">
      <h1 class="header__title">Writing—</h1>
    </header>
    <main class="main">
      <ul class="writing-list">
        <li class="writing-list__item" v-for="(post, index) in posts" :key="index">
          <div class="writing-list__content">
            <p class="writing-list__category">Tutorial</p>
            <p class="writing-list__title">{{ post.fields.title }}</p>
            <p
              class="writing-list__excerpt"
            >It's a simple enough animation, with a really nice loading effect and staggered timeline that make it feel super fluid. I've been really into Vue.js lately, and this seemed like a perfect opportunity to code out a little app. Live your life, but I'm gonna use SCSS for style here.</p>
          </div>
          <nuxt-link
            class="writing-list__link writing-list__link--external"
            :to="`writing/${post.fields.slug}`"
          >view the post—</nuxt-link>
          <img class="writing-list__image" :src="post.fields.heroImage.fields.file.url" alt />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
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
