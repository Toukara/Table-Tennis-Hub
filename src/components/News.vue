<template>
  <h2 class="text is-title">News</h2>
  <div class="news-cards">
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="image placeholder" />
      <h3 class="text is-title">Title</h3>
      <p class="text is-content">Content</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="image placeholder" />
      <h3 class="text is-title">Title</h3>
      <p class="text is-content">Content</p>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/400x300" alt="image placeholder" />
      <h3 class="text is-title">Title</h3>
      <p class="text is-content">Content</p>
    </div>
  </div>
  <a>Afficher plus...</a>
</template>

<script>
export default {
  name: "NewsComponent",
};
</script>

<style scoped lang="scss">
.news-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 32px;
}
.text {
  &.is-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 10px;
  }
  &.is-content {
    font-size: 1rem;
    font-weight: 400;
    margin: 10px;
  }
}

a {
  text-decoration: none;
  color: rgb(57, 57, 57);
  font-size: 1rem;
  font-weight: 600;
  margin: 10px;

  &:hover {
    color: rgb(95, 95, 95);
    text-decoration: underline;
  }
}

.card {
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.06);
    backface-visibility: hidden;
    filter: blur(.0px);
  }
}
</style>
