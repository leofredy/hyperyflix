<template>
  <div class="skeletonTrendFull">
    <div class="skeletonTrendFull-top">
      <div class="skeletonTrendFull-select"></div>
      <div class="skeletonTrendFull-quantity"></div>
    </div>
    <SkeletonTrendList/>
  </div>
</template>

<script>
export default {
  name: "SkeletonTrendFull",
  components: {
    SkeletonTrendList: require("@/components/skeletons/trend/SkeletonTrendList").default,
  }
}
</script>

<style scoped>
.skeletonTrendFull-top {
  margin-bottom: 16px;
  animation: fadeSkeleton infinite 1s linear alternate;
}
.skeletonTrendFull-select,
.skeletonTrendFull-quantity {
  background-color: var(--secondary-background);
}
.skeletonTrendFull-select {
  margin-bottom: 8px;
  width: 96px;
  height: 38px;
  border-radius: 8px;
}
.skeletonTrendFull-quantity {
  width: 130px;
  height: 14px;
}
@media (min-width: 1024px) {
  .skeletonTrendFull-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .skeletonTrendFull-select {
    margin-bottom: 0px;
  }
}
</style>