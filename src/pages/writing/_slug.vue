<template>
  <div>
    <header class="header">
      <h1 class="header__title">{{ title }}</h1>
    </header>
    <main class="main">
      <div class="container" v-html="$md.render(body)"></div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app, payload, route, store }) {
    const post = await require(`~/content/writing/${params.slug}.json`);
    return post;
  }
};
</script>
