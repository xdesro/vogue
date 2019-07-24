<template>
  <div class="app">
    <Nav />
    <nuxt />
  </div>
</template>
<script>
import { TweenLite } from "gsap";
import Nav from "~/components/Nav";
export default {
  components: {
    Nav
  },
  data() {
    return {
      deltaY: 0,
      easedDeltaY: 0
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode;
    }
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        document.querySelector("html").setAttribute("dark", "");
      } else {
        document.querySelector("html").removeAttribute("dark");
      }
    }
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

