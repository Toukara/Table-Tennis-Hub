<template>
  <TheHeader />
  <div class="container">
    <p>This is a good home page UwU</p>

    <div class="boutons">
      <router-link class="button is-info" :to="{ name: 'players' }"> Joueurs </router-link>
      <router-link class="button is-info" :to="{ name: 'clubs' }"> Clubs </router-link>
    </div>
  </div>
  <TheFooter />
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.boutons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 4px;
}
</style>
