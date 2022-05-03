<template>
  <ul class="skeletonTrend">
    <SkeletonCard
      v-for="index in 20"
      :key="index"
    />
  </ul>
</template>

<script>
export default {
  name: "SkeletonTrend",
  components: {
    SkeletonCard: require("@/components/skeletons/trend/SkeletonCard").default,
  }
}
</script>

<style scoped>
.skeletonTrend {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;
  row-gap: 8px;
}
@media (min-width: 480px) {
  .skeletonTrend {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 704px) {
  .skeletonTrend {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 928px) {
  .skeletonTrend {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (min-width: 1280px) {
  .skeletonTrend {
    row-gap: 16px;
  }
}
</style>