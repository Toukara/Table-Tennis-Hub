<template>
  <TheHeader />
  <div class="container">
    <p>Clubs</p>
    <ClubsTable :items="clubs" itemType="clubs" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ClubsTable from "@/components/ItemsTable.vue";

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
      const response = await fetch("http://127.0.0.1:1000/api/clubs");
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
