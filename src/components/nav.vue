<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item">
        <nuxt-link class="nav__link nav__link--no-decoration" to="/">
          <span class="nav__link-text">/</span>
          <IconLogo class="nav__link-icon" />
        </nuxt-link>
      </li>
      <!-- <li class="nav__list-item" v-for="(route, index) in routes" :key="index">
        <nuxt-link class="nav__link" :to="route.path">{{route.name}}</nuxt-link>
      </li>-->
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/work">Work</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/writing">Writing</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/about">About</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link class="nav__link" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconLogo from "~/components/icons/icon-logo";
export default {
  components: {
    IconLogo
  },
  computed: {
    routes() {
      const routes = this.$router.options.routes.filter(
        route => route.path != `/`
      );
      return routes;
    }
  }
};
</script>
