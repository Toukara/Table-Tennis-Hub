<template>
  <TheHeader />
  <div class="container">
    <p>Player page</p>
    <div>
      <p>{{ player.firstname }}</p>
      <p>{{ player.lastname }}</p>
      <p>{{ player.license }}</p>
      <p>{{ player.clubId }}</p>
      <p>Classement : {{ player.points.classement }} | Début de saison : {{ player.points.start }} | Actuel : {{ player.points.officiels }}</p>
      <p>
        Progression Mensuelle :
        <span v-if="player.points.monthlyProgression >= 0 " class="green">{{ player.points.monthlyProgression }}</span>
        <span v-else class="red">{{ player.points.monthlyProgression }}</span>
      </p>
      <p>
        Progression Annuelle :
        <span v-if="player.points.allProgression >= 0" class="green">{{ player.points.allProgression }}</span>
        <span v-else class="red">{{ player.points.allProgression }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "PlayerView",
  components: {
    TheHeader,
  },
  data() {
    return {
      player: {},
    };
  },

  methods: {
    async fetchPlayer() {
      const response = await fetch(`http://localhost:1000/api/players/${this.$route.params.id}`);
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

<style scoped>
.green {
  color: green;
}

.red {
  color: red;
}
</style>
