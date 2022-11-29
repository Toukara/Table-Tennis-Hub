<template>
  <TheHeader />
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div>
          <h1 class="club-name">{{ club.name }}</h1>
          <p class="club-address">Adresse : {{ club.address }}</p>
          <div class="buttons">
            <button v-if="copyStatus === false" class="button toCopy is-info" @click="copy(club.address)">Copier Adresse</button>
            <button v-else class="button copied is-success" @click="copy(club.address)">Copié</button>
            <button class="button toMap" @click="goToMaps(club.address)">Aller sur Maps&copysr;</button>
          </div>

          <div class="contacts">
            <p>{{ club.contacts.name }}</p>
            <a :href="`mailto:${club.contacts.email}`">{{ club.contacts.email }}</a>
            <a :href="`tel:${club.contacts.phone}`">{{ club.contacts.phone }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="playersCount">
      <p>Nombre de joueurs : {{ players.length }}</p>
    </div>
    <div class="search">
      <input class="input" type="text" />
      <button class="button is-info">Rechercher</button>
    </div>
    <PlayersTable :players="players" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PlayersTable from "@/components/PlayersTable.vue";

export default {
  name: "ClubView",
  components: {
    TheHeader,
    PlayersTable,
  },
  data() {
    return {
      club: {},
      players: [],
      copyStatus: false,
    };
  },

  methods: {
    async fetchClub() {
      const response = await fetch(`http://localhost:1000/api/clubs/${this.$route.params.id}`);
      const club = await response.json();
      this.club = club;

      console.log(club);
    },

    async fetchPlayers(clubID) {
      const response = await fetch(`http://localhost:1000/api/clubs/${clubID}/players`);
      const players = await response.json();
      this.players = players;

      console.log(players);
    },

    async copy(element) {
      try {
        await navigator.clipboard.writeText(element);
        console.log("Copied to clipboard");
        this.copyStatus = true;
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },

    goToMaps(element) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${element}`, "_blank");
    },
  },

  created() {
    this.fetchClub();
    this.fetchPlayers(this.$route.params.id);
  },
};
</script>

<style scoped>
.club-address {
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.card-content {
  text-align: left;
}

.card {
  margin-bottom: 1rem;
}
.club-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contacts > * {
  margin-bottom: 0.5rem;
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;

  margin-top: 1rem;
}

.input {
  max-width: 25vw;
}
</style>
 