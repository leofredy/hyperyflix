<template>
  <ul class="trendList">
    <li 
      v-for="(movie, index) in movies"
      :key="index"
      class="trendList-card"
    >
      <div class="trendList-card-containerImg">
        <img 
          v-if="movie.poster_path"
          width="164"
          height="246"
          :loading="index < 9 ? '' : 'lazy'"
          :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" 
          :alt="movie.original_title"
        >
        <img 
          v-else
          width="164"
          height="246"
          :loading="index < 9 ? '' : 'lazy'"
          src="@/assets/img/poster-default.jpg" 
          :alt="movie.original_title"
        >
      </div>
      <div class="trendList-card-texts">
        <TrendVoteAverage 
          class="trendList-card-texts-voteAverage"
          :voteAverage="movie.vote_average"
        />
        <h2 class="trendList-card-texts-title">
          {{ movie.title }}
        </h2>
        <TrendDate v-if="movie.release_date" :releaseDate="movie.release_date"/>
        <p v-else>Sem data de lançamento</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TrendList",
  components: {
    TrendVoteAverage: require("@/components/trend/TrendVoteAverage").default,
    TrendDate: require("@/components/trend/TrendDate.vue").default,
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.trendList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
}
.trendList-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 269.8px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--stroke-color);
}
.trendList-card-containerImg img {
  width: 100%;
}
.trendList-card-texts {
  padding: 8px 8px 16px;
  height: 100%;
  background-color: var(--primary-background);
}
.trendList-card-texts-voteAverage,
.trendList-card-texts-title {
  margin-bottom: 8px;
}
@media (min-width: 480px) {
  .trendList {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 704px) {
  .trendList {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 928px) {
  .trendList {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (min-width: 1280px) {
  .trendList {
    row-gap: 16px;
  }
  .trendList-card {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  .trendList-card:hover {
    transform: scale(1.03);
  }
  .trendList-card-texts {
    padding: 8px 16px;
  }
}
</style>