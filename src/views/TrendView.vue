<template>
  <main class="trendView">
    <div class="row">
      <div class="column">
        <router-link to="/trend">
          <img 
            width="88"
            height="29"
            src="@/assets/img/logo.jpg" 
            alt="Logo da HyperyFlix"
          >
        </router-link>
        <h1>
          Veja as tendências da semana ou dia de 2022
        </h1>

        <div class="trendView-list">
          <SkeletonTrendFull v-if="loading"/>
          <template v-else>
            <div class="trendView-list-top">
              <Select
                :label="'Semana'"
                :options="['Semana', 'Dia']"
                :value="valueSelect"
                @change="changeSelect"
                class="trendView-list-top-select"
              />

              <p class="trendView-list-top-quantityMovies">
                {{ getQuantityListMovies }}
              </p>
            </div>
            <TrendList
              v-if="trendMovies.length"
              :movies="trendMovies"
            />
            <SkeletonTrendList v-else/>
          </template>
        </div>
        <div class="trendView-listBottom">
          <p class="trendView-listBottom-quantityMovies">
            {{ getQuantityListMovies }}
          </p>
          <Pagination
            :range="getRangePage"
            :currentPage="page"
            :lastPage="1000"
            @changePage="changePage"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TrendView",
  components: {
    Select: require("@/components/utils/Select").default,
    TrendList: require("@/components/trend/TrendList").default,
    SkeletonTrendList: require("@/components/skeletons/trend/SkeletonTrendList").default,
    SkeletonTrendFull: require("@/components/skeletons/SkeletonTrendFull").default,
    Pagination: require("@/components/utils/Pagination").default
  },
  data() {
    return {
      valueSelect: this.$route.query.time === "day" ? "Dia" : "Semana",
      trendMovies: [],
      totalResult: 0,
      page: parseInt(this.$route.query.page) || 1,
      lastPage: 0,
      loading: true,
      timeMovie: this.$route.query.time || "week",
      exaustWidth: 0,
      width: window.innerWidth
    }
  },
  computed: {
    getQuantityListMovies() {
      return `${(20 * (this.page - 1)) + 1} a ${20 * this.page} de ${this.totalResult} filme(s)`;
    },
    getRangePage() {
      return this.width > 500 ? 5 : 3;
    }
  },
  methods: {
    changeSelect(value) {
      this.valueSelect = value;
      const queryTimeWindow = value === "Semana" ? "week" : "day";
      this.$router.push({ query: {...this.$route.query, time: queryTimeWindow}});
      this.timeMovie = queryTimeWindow;
      this.trendMovies = [];
      this.fetchTrendMovies();
    },
    changePage(value) {
      this.page = value;
      this.trendMovies = [];
      this.fetchTrendMovies();
    },
    fetchTrendMovies() {
      fetch(`https://api.themoviedb.org/3/trending/movie/${this.timeMovie}?api_key=e62c77550d317944fc8d4f72e3ece093&language=pt-BR&page=${this.page}`)
        .then(response => response.json())
        .then(data => {
          this.trendMovies = data.results;
          this.totalResult = data.total_results;
          this.page        = data.page;
          this.lastPage    = data.total_pages;
          this.loading     = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    resizeEvent() {
      window.addEventListener("resize", () => {
        clearTimeout(this.exaustWidth);
        this.exaustWidth = setTimeout(() => {
          this.width = window.innerWidth;
        }, 500);
      });
    },
  },
  created() {
    this.fetchTrendMovies();
    this.resizeEvent();
  },
};
</script>
<style scoped>
.trendView {
  padding: 52px 0 36px;
  min-height: 100vh;
}
.trendView img{
  margin: 0px auto 8px;
}
.trendView h1 {
  margin-bottom: 36px;
  text-align: center;
}
.trendView-list {
  margin-bottom: 24px;
}
.trendView-list-top {
  margin-bottom: 16px;
}
.trendView-list-top-select {
  margin-bottom: 8px;
}
.trendView-listBottom-quantityMovies {
  margin-bottom: 8px;
  text-align: end;
}
@media (min-width: 767px) {
  .trendView img{
    width: 100%;
    max-width: 153px;
  }
}
@media (min-width: 1024px) {
  .trendView-list-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .trendView-list-top-select {
    margin-bottom: 0px;
  }
  .trendView-listBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .trendView-listBottom-quantityMovies {
    margin-bottom: 0;
  }
}
</style>