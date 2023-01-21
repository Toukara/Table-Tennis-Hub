<template>
  <div class="container" v-if="this.itemType == 'players'">
    <div class="search">
      <p>Rechercher :</p>
      <input type="text" v-model="search" class="input" placeholder="Ex: Dupont" />
    </div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th v-show="this.conditions == 'isGlobal'">Club</th>
          <th>Licence</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in filteredPlayers" :key="player.id">
          <td>
            <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.firstname }}</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'player', params: { id: player.license } }">{{ player.lastname }}</router-link>
          </td>
          <td v-show="this.conditions == 'isGlobal'">
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
  </div>

  <div v-else>
    <div class="search">
      <p>Rechercher :</p>
      <input type="text" v-model="search" class="input" placeholder="Ex: Dupont" />
    </div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Nom</th>
          <th>ID</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="club in filteredClubs" :key="club.id">
          <td>
            <router-link :to="{ name: 'club', params: { id: club.id } }">{{ club.name }}</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'club', params: { id: club.id } }">{{ club.id }}</router-link>
          </td>
          <td>
            <router-link :to="{ name: 'club', params: { id: club.id } }">{{ club.address }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ItemTable",
  props: {
    items: {
      type: Array,
      required: true,
    },
    conditions: {
      type: Array,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      search: "",
    };
  },

  computed: {
    filteredPlayers() {
      return this.items.filter((item) => {
        return item.firstname.toLowerCase().includes(this.search.toLowerCase()) || item.lastname.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    filteredClubs() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase()) || item.id.toLowerCase().includes(this.search.toLowerCase());
      });
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

.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  margin-top: 1rem;
}

.input {
  max-width: 25vw;
  height: 4.5vh;
  margin: 8px 0;
}
</style>
