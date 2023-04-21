<template>
  <section class="featured-movie pt-50 pb-50">
    <div class="container-fluid">
      <h2 class="text-4xl fw-bold color-palette-1 mb-30">Weekly Trending Movies</h2>
      <div class="d-flex flex-row flex-sm-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4">
        <div v-for="movie in movies" :key="movie.show" class="featured-movie-card position-relative">
          <a :href="movie.show.url" target="_blank">
            <div class="blur-sharp">
              <img v-if="movie.show.image" :src="movie.show.image.medium" width="205" height="270" alt="Ini gambar" />
            </div>
            <div class="cover position-absolute bottom-0 m-32">
              <div class="d-flex flex-column h-100 justify-content-between text-decoration-none">
                <div class="movie-icon mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
                    <g id="surface1">
                      <path
                        style="stroke: none; fill-rule: nonzero; fill: rgb(0%, 0%, 0%); fill-opacity: 1"
                        d="M 35 0 C 44.660156 0 53.414062 3.917969 59.746094 10.25 C 66.082031 16.585938 70 25.335938 70 35 C 70 44.664062 66.082031 53.414062 59.746094 59.746094 C 53.414062 66.082031 44.660156 70 35 70 C 25.335938 70 16.585938 66.082031 10.25 59.746094 C 3.917969 53.414062 0 44.664062 0 35 C 0 25.339844 3.917969 16.585938 10.25 10.25 C 16.585938 3.917969 25.335938 0 35 0 Z M 45.582031 36.886719 C 47.460938 35.675781 47.453125 34.320312 45.582031 33.246094 L 30.503906 22.75 C 28.976562 21.789062 27.375 22.355469 27.417969 24.355469 L 27.476562 45.472656 C 27.609375 47.640625 28.847656 48.234375 30.671875 47.230469 Z M 56.429688 13.570312 C 50.945312 8.085938 43.367188 4.695312 35 4.695312 C 26.628906 4.695312 19.054688 8.085938 13.570312 13.570312 C 8.085938 19.054688 4.695312 26.632812 4.695312 35 C 4.695312 43.371094 8.085938 50.945312 13.570312 56.429688 C 19.054688 61.914062 26.628906 65.304688 35 65.304688 C 43.367188 65.304688 50.945312 61.914062 56.429688 56.429688 C 61.914062 50.945312 65.304688 43.371094 65.304688 35 C 65.304688 26.628906 61.914062 19.054688 56.429688 13.570312 Z M 56.429688 13.570312 "
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <p class="fw-semibold text-white text-xl m-0">{{ movie.show.name }}</p>
                  <p class="fw-light text-white m-0">{{ movie.show.premiered }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    setMovies(data) {
      this.movies = data;
    },
  },
  mounted() {
    axios
      .get("http://api.tvmaze.com/search/shows?q=girls")
      .then((response) => {
        this.setMovies(response.data);
      })

      .catch((error) => console.log("Error", error));
  },
};
</script>

<style></style>
