<template>
  <div v-if="items.length === 0">
    <h3>Aucun(s) {{ this.itemType === "players" ? "joueur.euse(s)" : "club(s)" }} n'a pu être trouvé(s)</h3>
  </div>
  <div v-else>
    <div class="container" v-if="this.itemType === 'players'">
      <div class="search">
        <p>Rechercher :</p>
        <input type="text" v-model="search" class="input" placeholder="Ex: Dupont" />
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th @click="sort('firstname')" class="clickable">Nom</th>
            <th @click="sort('lastname')" class="clickable">Prénom</th>
            <th v-show="this.conditions == 'isGlobal'" @click="sort('club')" class="clickable">Club</th>
            <th>Licence</th>
            <th @click="sort('pts')" class="clickable">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in sortItems" :key="player.id">
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

    <div v-else-if="this.itemType === 'clubs'">
      <div class="search">
        <p>Rechercher :</p>
        <input type="text" v-model="search" class="input" placeholder="Ex: Dupont" />
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th @click="sort('name')" class="clickable">Nom</th>
            <th @click="sort('id')" class="clickable">ID</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="club in sortItems" :key="club.id">
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
    <div v-else>
      <p>Erreur</p>
    </div>
  </div>

  <button @click="topFunction" class="button is-link toTop" id="GoToTop" />
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
      currentSort: "pts",
      currentSortDir: "asc",
    };
  },

  methods: {
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },

    topFunction: function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },

  computed: {
    filteredPlayers: function () {
      return this.items.filter((item) => {
        return item.firstname.toLowerCase().includes(this.search.toLowerCase()) || item.lastname.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    filteredClubs: function () {
      return this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase()) || item.id.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    sortItems: function () {
      const items = this.itemType === "players" ? [...this.filteredPlayers] : [...this.filteredClubs];

      return items.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (this.itemType === "players" && this.currentSort === "pts") return (b.points.officiels - a.points.officiels) * modifier;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
  },

  mounted() {
    window.onscroll = function () {
      let mybutton = document.getElementById("GoToTop");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
  },

  unmounted() {
    window.onscroll = null;
  },
};
</script>

<style scoped lang="scss">
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

.clickable {
  cursor: pointer;
  &:hover {
    // Smooth transition
    transition: all 0.2s ease-in-out;
    // Change color
    color: rgb(57, 57, 57);
    // Change background color
    background-color: rgba(57, 57, 57, 0.094);
  }
  &::after {
    // Add arrow icon
    content: "⇅";
    // Add space between icon and text
    margin-left: 0.5rem;
  }
}

.toTop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  opacity: 0.65;
  z-index: 99;
  &::after {
    content: "▲";
  }
  &:hover {
    opacity: 1;
  }
}
</style>
