<template>
  <h3
    :class="[
      getTypeAverage,
      'titleVoteAverage'
    ]"
  >
    {{ `${getVoteAverage} % relevante` }}
  </h3>
</template>

<script>
export default {
  name: "TrendVoteAverage",
  props: {
    voteAverage: {
      type: Number,
      required: true,
    }
  },
  computed: {
    getTypeAverage() { 
      let classAverage = "bad";

      if (this.getVoteAverage > 90) {
        classAverage = "excellent";
      } else if (this.getVoteAverage > 50) {
        classAverage = "well";
      } 

      return classAverage;
    },
    getVoteAverage() {
      return parseFloat(this.voteAverage).toFixed(1) * 10;
    }
  },
}
</script>

<style scoped>
.bad {
  color: var(--error-color);
}
.well {
  color: var(--warning-color);
}
.excellent {
  color: var(--success-color);
}
</style>