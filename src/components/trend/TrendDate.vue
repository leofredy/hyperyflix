<template>
  <p>
    {{ getReleaseMovie }}
  </p>
</template>

<script>
export default {
  name: "TrendDate",
  props: {
    releaseDate: {
      type: String,
      required: true
    }
  },
  computed: {
    getReleaseMovie() {
      const DateLong = new Intl.DateTimeFormat(
        'pt-BR', 
        { 
          weekday: 'short', 
          year: "numeric", 
          month: "long", 
          day: "numeric" 
        }
      ).format(new Date(this.releaseDate))
        .replace(".", "");

      return DateLong[0].toUpperCase() + DateLong.slice(1);
    }
  }
}
</script>

<style scoped>
p {
  max-width: 118px;
}
@media (min-width: 1280px) {
  p {
    max-width: 100%;
  }
}
</style>