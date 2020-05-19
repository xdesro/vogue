<template>
  <transition name="spotify">
    <div class="spotify" v-if="spotify.active">
      <a class="spotify__link" href="https://open.spotify.com/user/1239993406?si=5AjW4kDxQVKeofWOR_i7Yw">
        <IconSocial class="spotify__icon" icon="spotify" />
      </a>
      <p class="spotify__track">{{ spotify.track }}</p>
      <ul class="spotify__artists">
        <li class="spotify__artist" v-for="(artist, index) in spotify.artists" :key="index">{{ artist }}</li>
      </ul>
    </div>
  </transition>
</template>
<script>
import * as Spotify from "spotify-web-api-js";
import IconSocial from "~/components/icons/IconSocial";
export default {
  data() {
    return {
      spotify: {
        active: false,
        artists: null,
        track: null,
      },
    };
  },
  components: {
    IconSocial,
  },
  mounted() {
    const spot = new Spotify();
    /* eslint-disable no-undef */
    spot.setAccessToken(process.env.spotifyToken);
    spot.getMyRecentlyPlayedTracks({ limit: 1 }, (err, result) => {
      if (err) {
        console.log(err);
      }
      const { track } = result.items[0];
      const { artists } = track;
      this.spotify.track = track.name;
      const artistNames = [];
      artists.map((artist) => {
        artistNames.push(artist.name);
      });
      this.spotify.artists = artistNames;
      console.log(this.spotify.artists);
      this.spotify.active = true;
    });
  },
};
</script>
