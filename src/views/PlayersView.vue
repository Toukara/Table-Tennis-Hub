<template>
  <TheHeader />
  <div class="container">
    <PlayersTable :items="players" conditions="isGlobal" itemType="players" />
  </div>
</template>

<script>
import TheHeader from "@/components/Navbar.vue";
import PlayersTable from "@/components/ItemsTable.vue";

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
      const response = await fetch("http://127.0.0.1:1000/api/players");
      const players = await response.json();

      // short players by points
      players.sort((a, b) => {
        return b.points.officiels - a.points.officiels;
      });

      this.players = players

      console.log(players);
    },
  },

  created() {
    this.fetchPlayers();
  },
};
</script>
