<template>
  <li class="skeletonCard">
    <div class="skeletonCard-img">
      <canvas width="200" height="300"></canvas>
    </div>

    <div class="skeletonCard-texts">
      <div class="skeletonCard-average"></div>

      <div class="skeletonCard-title"></div>

      <div class="skeletonCard-date"></div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SkeletonCard",
}
</script>

<style scoped>
.skeletonCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 269.8px;
  border: 1px solid var(--stroke-color);
  border-radius: 8px;
  overflow: hidden;
  animation: fadeSkeleton infinite 1s linear alternate;
}
.skeletonCard-img,
.skeletonCard-average,
.skeletonCard-title,
.skeletonCard-date {
  width: 100%;
  background-color: var(--secondary-background);
}
.skeletonCard-img,
.skeletonCard-img canvas {
  max-width: 100%;
}
.skeletonCard-img canvas {
  width: 100%;
}
.skeletonCard-texts {
  padding: 8px 8px 16px;
  height: 100%;
}
.skeletonCard-average,
.skeletonCard-title {
  margin-bottom: 8px;
}
.skeletonCard-average {
  max-width: 93px;
  height: 13px;
}
.skeletonCard-title {
  max-width: 130px;
  height: 30px;
}
.skeletonCard-date {
  max-width: 170px;
  height: 27px;
}
@media (min-width: 1280px) {
  .skeletonCard-texts {
    padding: 8px 16px;
  }
  .skeletonCard-average {
    height: 16.8px;
  }
  .skeletonCard-title {
    height: 32.8px;
  }
  .skeletonCard-date {
    height: 13.6px;
  }
}
</style>