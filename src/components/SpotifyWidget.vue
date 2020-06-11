<template>
  <transition name="spotify">
    <div class="spotify" v-if="spotify">
      <a class="spotify__link" href="https://open.spotify.com/user/1239993406?si=5AjW4kDxQVKeofWOR_i7Yw">
        <IconSocial class="spotify__icon" icon="spotify" />
      </a>
      <p class="spotify__track">
        <a href="spotify.url">{{ spotify.name }}</a>
      </p>
      <ul class="spotify__artists">
        <li class="spotify__artist" v-for="(artist, index) in spotify.artists" :key="index">
          <a :href="artist.url">{{ artist.name }}</a>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
// import * as Spotify from "spotify-web-api-js";
import IconSocial from "~/components/icons/IconSocial";
export default {
  data() {
    return {
      spotify: false,
    };
  },
  components: {
    IconSocial,
  },
  methods: {
    async getSpotify() {
      try {
        const response = await this.$axios.$get("/.netlify/functions/spotify");
        console.log(response);
        this.spotify = response;
        this.error = null;
      } catch (err) {
        this.error = err.response;
        this.response = "-";
      }
    },
  },
  mounted() {
    console.log(this.$axios);
    this.getSpotify();
  },
};
</script>
