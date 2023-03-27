<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'home' }">
        <img src="@/assets/logo.svg" width="30" height="28" />
      </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'home' }">
          <a class="navbar-item"> Accueil </a>
        </router-link>

        <router-link class="navbar-item" :to="{ name: 'players' }">
          <a class="navbar-item"> Joueurs </a>
        </router-link>

        <router-link class="navbar-item" :to="{ name: 'clubs' }">
          <a class="navbar-item"> Clubs </a>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Plus </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" :to="{ name: 'news' }"> News </router-link>
            <hr class="navbar-divider" />
            <router-link class="navbar-item" :to="{ name: 'rick' }"> Report an issue </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.navbar {
  padding: 0 1rem;
}
</style>
