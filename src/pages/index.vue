<template>
  <div class="container index">
    <img class="index__logo" src="~/assets/img/icon-logo.svg" alt role="presentation" />
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
    <main class="index__content" id="main" role="main">
      <div class="index__hire">
        <p class="index__purpose">interaction & animation & accessibility</p>
        <p class="index__hireability index__hireability--unavailable">
          <!-- <nuxt-link to="/contact"> -->
          available for full-time hire
          <!-- </nuxt-link> -->
        </p>
      </div>
      <p class="index__date">Fall 2019</p>
      <!-- <SpotifyWidget class="index__music" /> -->
      <p class="index__location">denver, colorado</p>
    </main>
    <div class="index__accent-pic-container">
      <picture class="index__accent-pic" alt role="presentation">
        <source srcset="~/assets/img/sky.webp" type="image/webp" />
        <source srcset="~/assets/img/sky.jpg" type="image/jpg" />
      </picture>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

// import SpotifyWidget from "~/components/SpotifyWidget";

export default {
  data() {
    return {
      deltaX: 0,
      easedDeltaX: 0
    };
  },
  components: {
    // SpotifyWidget
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    this.$nextTick(() => {
      TweenLite.ticker.addEventListener("tick", this.updateAnimation);
    });
  },
  methods: {
    handleMouseMove(e) {
      this.deltaX =
        ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2;
      TweenLite.to(this, 0.5, {
        easedDeltaX: this.deltaX
      });
    },
    updateAnimation() {
      this.$el.style.setProperty("--translateX", `${this.easedDeltaX * 10}px`);
    }
  }
};
</script>
