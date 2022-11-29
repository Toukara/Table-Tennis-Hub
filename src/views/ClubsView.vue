<template>
  <TheHeader />
  <div class="container">
    <p>Clubs</p>
    <ClubsTable :clubs="clubs" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ClubsTable from "@/components/ClubsTable.vue";

export default {
  name: "ClubsView",
  components: {
    ClubsTable,
    TheHeader,
  },
  data() {
    return {
      clubs: [],
    };
  },

  methods: {
    async fetchClubs() {
      const response = await fetch("http://localhost:1000/api/clubs");
      const clubs = await response.json();
      this.clubs = clubs;

      console.log(clubs);
    },
  },

  created() {
    this.fetchClubs();
  },
};
</script>
