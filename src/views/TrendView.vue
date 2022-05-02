<template>
  <main class="trendView">
    <div class="row">
      <div class="column">
        <img src="@/assets/img/logo.jpg" alt="Logo da HyperyFlix">
        <h1>
          Veja as tendências da semana ou dia de 2022
        </h1>

        <div class="trendView-list">
          <div class="trendView-list-top">
            <Select
              :label="'Semana'"
              :options="['Semana', 'Dia']"
              :value="valueSelect"
              @change="changeSelect"
            />

            <p class="trendView-list-top-quantityMovies">
              1 a 20 de 20000 filme(s)
            </p>
          </div>

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
  },
  data() {
    return {
      valueSelect: "Semana",
    }
  },
  methods: {
    changeSelect(value) {
      this.valueSelect = value;
    }
  }
};
</script>
<style scoped>
.trendView {
  padding-top: 52px;
}
.trendView img{
  margin: 0px auto 8px;
}
.trendView h1 {
  text-align: center;
}
.trendView-list-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trendView-list-top-quantityMovies {
  font-size: 14px;
}
</style>