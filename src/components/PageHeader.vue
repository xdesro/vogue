<template>
  <header class="header">
    <h1 class="header__title" :data-title="title">{{title}}—</h1>
  </header>
</template>
<script>
import { TweenLite } from "gsap";
export default {
  props: ["title"],
  data() {
    return {
      deltaY: 0,
      easedDeltaY: 0
    };
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
      this.deltaY =
        ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 2;
      TweenLite.to(this, 1, {
        easedDeltaY: this.deltaY
      });
    },
    updateAnimation() {
      this.$el.style.setProperty("--translateX", `${this.easedDeltaY * 4}vw`);
    }
  }
};
</script>
