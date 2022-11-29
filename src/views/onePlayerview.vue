<template>
  <TheHeader />
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Licence FFTT</p>
      </header>
      <div class="card-content">
        <div>
          <div class="player-names">
            <p class="player-firstname">{{ player.firstname }}</p>
            <p class="player-lastname">{{ player.lastname }}</p>
          </div>
          <div class="player-infos">
            <p class="player-license">N°{{ player.license }}</p>
            <p>
              <router-link :to="{ name: 'club', params: { id: player.clubId } }" class="player-club">{{ player.clubName }} - {{ player.clubId }}</router-link>
            </p>
          </div>
          <div class="player-datas">
            <div class="points">
              <p class="player-points">Classement : {{ player.points.classement }}</p>
              <p class="player-points">Points débuts de saison: {{ player.points.start }}</p>
              <p class="player-points">Points actuels: {{ player.points.officiels }}</p>
            </div>
            <div class="progression">
              <p class="player-progression">
                Progression mensuelle:
                <span v-if="player.points.monthlyProgression >= 0" class="text is-positif"> {{ player.points.monthlyProgression }} </span>
                <span v-else class="text is-danger"> {{ player.points.monthlyProgression }} </span>
              </p>
              <p class="player-progression">
                Progression mensuelle:
                <span v-if="player.points.monthlyProgression >= 0" class="text is-positif"> {{ player.points.allProgression }} </span>
                <span v-else class="text is-danger"> {{ player.points.allProgression }} </span>
              </p>
            </div>
            <!-- ADD A DATA PIE/ DONUTS  -->
          </div>
        </div>
      </div>
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
.is-positif {
  color: rgb(8, 168, 8);
  font: bold;
}

.is-negative {
  color: rgb(255, 0, 0);
  font: bold;
}

.card-header {
  background-color: rgb(89, 86, 223);
  box-shadow: none;
}

.card-header-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}
.card-content {
  text-align: left;
}

.player-names {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
}

.player-firstname {
  font-weight: 600;
}

.player-lastname {
  font-weight: 400;
}

.player-infos {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  color: rgb(57, 57, 57);
}

.player-datas {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2.5vw;
}

.player-datas > * {
  margin-top: 0.5rem;
}
</style>
