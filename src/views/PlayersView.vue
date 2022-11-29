<template>
  <TheHeader />
  <div class="container">
    <p>Players</p>
    <PlayersTable :players="players" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PlayersTable from "@/components/PlayersTable.vue";

export default {
  name: "PlayersView",
  components: {
    PlayersTable,
    TheHeader,
  },
  data() {
    return {
      players: [],
    };
  },

  methods: {
    async fetchPlayers() {
      const response = await fetch("http://localhost:1000/api/players");
      const players = await response.json();
      this.players = players;

      console.log(players);
    },
  },

  created() {
    this.fetchPlayers();
  },
};
</script>

