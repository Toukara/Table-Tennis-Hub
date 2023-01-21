<template>
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
            <p class="player-license">Licence n° {{ player.license }}</p>
            <div class="player-infos-club">
              <p>
                <router-link :to="{ name: 'club', params: { id: player.clubId } }" class="player-club">{{ player.clubName }} - {{ player.clubId }}</router-link>
              </p>
            </div>
          </div>
          <div class="player-datas">
            <div class="points">
              <p class="player-points">Classement : {{ player.points.classement }}</p>
              <p class="player-points">Points débuts de saison: {{ player.points.start }}</p>
              <p class="player-points">Points actuels: {{ player.points.officiels }}</p>
            </div>
            <div class="separation"></div>
            <div class="progression">
              <p class="player-progression">
                Progression mensuelle:
                <span v-if="player.points.monthlyProgression >= 0" class="text is-positif"> {{ player.points.monthlyProgression }} </span>
                <span v-else class="text is-negatif"> {{ player.points.monthlyProgression }} </span>
              </p>
              <p class="player-progression">
                Progression annuelle:
                <span v-if="player.points.monthlyProgression >= 0" class="text is-positif"> {{ player.points.allProgression }} </span>
                <span v-else class="text is-negatif"> {{ player.points.allProgression }} </span>
              </p>
              <p class="player-progression"></p>
            </div>
            <div class="Pie">
              <canvas id="myChart" class="chart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.is-positif {
  color: rgb(8, 168, 8);
  font: bold;
}

.is-negatif {
  color: rgb(255, 0, 0);
  font: bold;
}

.card-header {
  background-color: rgb(62, 142, 208);
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
  margin-bottom: 2rem;
}

.player-infos-club {
  margin-top: 0.5rem;
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
  gap: 1.5vw;
}

.player-datas > * {
  margin-top: 0.5rem;
}

.separation {
  width: 3px;
  height: auto;
  max-height: 125px;
  background: rgba(57, 57, 57, 0.267);
}

.Pie {
  margin-right: auto;

  width: 230px;
  height: 230px;
  margin-top: -8px;
}

@media (max-width: 768px) {
  .player-datas {
    flex-direction: column;
  }
  .separation {
    display: none;
  }
  .Pie {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    width: 230px;
    height: 230px;
  }
}
</style>