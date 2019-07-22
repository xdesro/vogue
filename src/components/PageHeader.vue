<template>
  <header class="header">
    <h1 class="header__title" :data-title="title">{{title}}—</h1>
  </header>
</template>
<script>
import { TweenLite } from "gsap";
export default {
  props: ["title"]
};
</script>
