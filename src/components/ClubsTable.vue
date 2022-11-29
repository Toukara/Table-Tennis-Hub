<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Nom</th>
        <th>ID</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="club in clubs" :key="club.id">
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
</template>

<script>
export default {
  name: "ClubsTable",
  props: {
    clubs: {
      type: Array,
      required: true,
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
