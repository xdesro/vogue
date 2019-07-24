<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item">
        <nuxt-link class="nav__link nav__link--no-decoration" to="/" aria-label="home page">
          <IconLogo class="nav__link-icon" />
        </nuxt-link>
      </li>
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
import IconLogo from "~/components/icons/IconLogo";
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
