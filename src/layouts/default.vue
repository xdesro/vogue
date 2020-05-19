<template>
  <div class="app">
    <a href="#main" class="skip-link">Skip to main content</a>
    <Nav />
    <nuxt />
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      deltaY: 0,
      easedDeltaY: 0,
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    },
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        document.querySelector("html").setAttribute("dark", "");
      } else {
        document.querySelector("html").removeAttribute("dark");
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  },
  mounted() {
    document.addEventListener("mousemove", this.handleMouseMove);
    this.$nextTick(() => {
      gsap.ticker.add(this.updateAnimation);
    });
  },
  methods: {
    handleMouseMove(e) {
      this.deltaY = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 2;
      gsap.to(this, 1, {
        easedDeltaY: this.deltaY,
      });
    },
    updateAnimation() {
      this.$el.style.setProperty("--translateX", `${this.easedDeltaY * 4}vw`);
    },
  },
};
</script>
