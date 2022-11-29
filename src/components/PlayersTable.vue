<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Club</th>
        <th>Licence</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in players" :key="player.id">
        <td>
          <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.firstname }}</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.lastname }}</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'club', params: { id: player.clubId } }">{{ player.clubName }}</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.license }}</router-link>
        </td>
        <td>
          <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.points.officiels }}</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PlayersTable",
  props: {
    players: {
      type: Array,
      required: true,
    },
  },

  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.15rem;
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: rgba(57, 57, 57, 0.094);
}

tbody tr {
  padding: 1rem;
}

a {
  color: rgb(57, 57, 57);
  text-decoration: none;
}
</style>
