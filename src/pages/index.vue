<template>
  <div class="container">
    <img class="index__logo" src="~/assets/img/icon-logo.svg" />
    <header class="index__header">
      <h1 class="index__name">
        Henry
        <br />
        <span class="index__header--wrap">Desroches</span>
      </h1>
      <p class="index__role">
        Creative
        <br />
        <span class="index__header--wrap">Developer</span>
      </p>
    </header>
    <main class="index__content">
      <p class="index__purpose">interaction | animation | accessibility</p>
      <p class="index__date">Fall 2019</p>
      <div class="index__status">
        <p class="index__location">denver, colorado</p>
        <p class="index__hireability">available for hire</p>
      </div>
    </main>
  </div>
</template>
<script>
import IconLogo from "~/components/icons/icon-logo";
import Nav from "~/components/nav";
export default {
  components: {
    Nav,
    IconLogo
  },
  computed: {}
};
</script>
