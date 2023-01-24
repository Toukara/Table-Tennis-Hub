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
          <a class="navbar-item"> Home </a>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" :to="{ name: 'players' }"> Joueurs </router-link>
            <router-link class="navbar-item" :to="{ name: 'clubs' }"> Clubs </router-link>
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
