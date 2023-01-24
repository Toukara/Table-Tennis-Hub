<template>
  <TheHeader />
  <PlayerCard :player="player" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import Chart from "chart.js/auto";
import PlayerCard from "@/components/PlayerCard.vue";

export default {
  name: "PlayerView",
  components: {
    TheHeader,
    PlayerCard,
  },
  data() {
    return {
      player: {},
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart");

    const data = {
      labels: ["Victoires", "Défaites"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      datasets: [
        {
          data: [10, 20],
          backgroundColor: ["#48c774", "#ff3860"],
          hoverOffset: 4,
        },
      ],
    };

    new Chart(ctx, {
      type: "pie",
      data: data,
    });
  },

  methods: {
    async fetchPlayer() {
      const response = await fetch(`http://127.0.0.1:1000/api/players/${this.$route.params.id}`);
      const player = await response.json();
      this.player = player;

      console.log(player);
    },
  },

  created() {
    this.fetchPlayer();
  },
};
</script>
