<template>
  <div class="notFound">
    <div class="row">
      <div class="column">
        <div class="notFound-container">
          <div class="notFound-container-texts">
            <h1>404</h1>
            <h2>
              Página não encontrada.
            </h2>
            <router-link to="/trend">
              <img src="@/assets/icons/arrow-left.svg" alt="Voltar para a páginag trend">
              <p>
                voltar para tendência.
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped>
.notFound {
  min-height: 100vh;
}
.notFound-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h1 {
  margin-bottom: 8px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: var(--primary-dark-color);
}
h2 {
  margin-bottom: 16px;
  text-align: center;
  font-size: 18px;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
}
a p {
  margin-left: 8px;
  color: var(--text-primary);
}
@media (min-width: 1280px) {
  h1 {
    font-size: 44px;
  }
  h2 {
    font-size: 24px;
  }
}
</style>