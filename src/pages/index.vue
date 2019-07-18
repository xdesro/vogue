<template>
  <div class="container index">
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
      <!-- <SpotifyWidget class="index__music" /> -->
      <div class="index__status">
        <p class="index__location">denver, colorado</p>
        <p class="index__hireability">available for hire</p>
      </div>
    </main>
    <div class="index__profile-pic-container">
      <img src="~/assets/img/spooky-profile-pic.png" alt class="index__profile-pic" />
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
      TweenLite.to(this, 1, {
        easedDeltaX: this.deltaX
      });
    },
    updateAnimation() {
      this.$el.style.setProperty("--translateX", `${this.easedDeltaX * 10}px`);
    }
  }
};
</script>
