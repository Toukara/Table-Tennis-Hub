<template>
  <TheHeader />
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div>
          <h1 class="club-name">{{ club.name }}</h1>
          <p class="club-address">Adresse : {{ club.address }}</p>
          <div class="buttons">
            <button class="button" :class="[copyStatus ? 'is-success' : 'is-info']" @click="copy(club.address)">
              {{ copyStatus ? "Copié" : "Copier l'adresse" }}
            </button>
            <button class="button toMap" @click="goToMaps(club.address)">Aller sur Maps&copysr;</button>
          </div>

          <div class="contacts">
            <p>{{ club.contacts.name }}</p>
            <div class="contacts-email">
              <i class="fa-solid fa-envelope"></i>
              <a :href="`mailto:${club.contacts.email}`"> {{ club.contacts.email }}</a>
            </div>
            <div class="contacts-phone">
              <i class="fa-solid fa-phone"></i>
              <a :href="`tel:${club.contacts.phone}`">{{ PhoneNumber(club.contacts.phone) }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="playersCount">
      <p>Nombre de Licenciés : {{ players.length }}</p>
      <div class="buttons">
        <button class="button" :class="[exportStatus ? 'is-success' : 'is-info']" @click="exportPlayers()">
          {{ exportStatus ? "Exporté" : "Exporter les joueurs" }}
        </button>
        <div class="select">
          <select name="" id="" @change="changeDownloadType($event)">
            <option value="csv">CSV</option>
            <option value="xlsx">XLSX</option>
            <option value="json">JSON</option>
            <option value="docx">DOCX</option>
          </select>
        </div>
        {{ downloadType.toUpperCase() }}
      </div>
    </div>
    <PlayersTable :items="players" itemType="players" />
  </div>
</template>

<script>
import TheHeader from "@/components/Navbar.vue";
import PlayersTable from "@/components/ItemsTable.vue";

export default {
  name: "ClubView",
  components: {
    TheHeader,
    PlayersTable,
  },
  data() {
    return {
      club: {},
      players: [],
      copyStatus: false,
      exportStatus: false,
      downloadType: "csv",
    };
  },

  methods: {
    async fetchClub() {
      const response = await fetch(`http://127.0.0.1:1000/api/clubs/${this.$route.params.id}`);
      const club = await response.json();
      this.club = club;

      console.log(club);
    },

    async fetchPlayers(clubID) {
      const response = await fetch(`http://127.0.0.1:1000/api/clubs/${clubID}/players`);
      const players = await response.json();
      this.players = players;

      console.log(players);
    },

    async copy(element) {
      try {
        await navigator.clipboard.writeText(element);
        console.log("Copied to clipboard");
        this.copyStatus = true;
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    },

    goToMaps(element) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${element}`, "_blank");
    },

    async exportPlayers() {
      try {
        this.exportStatus = true;

        let filePath = `/assets/players.xlsx`;

        let a = document.createElement("a");
        a.href = filePath;
        a.download;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        console.log("Exported to file");
      } catch (err) {
        console.error("Failed to export: ", err);
      }
    },

    PhoneNumber(number) {
      let regex = /[0]{1}[1-7]{1}[0-9]{8}/;
      let result = number.match(regex);

      if (result) return result[0].replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      else return number;
    },

    changeDownloadType(event) {
      console.log(event);
      this.downloadType = event.target.value;
    },
  },

  created() {
    this.fetchClub();
    this.fetchPlayers(this.$route.params.id);
  },
};
</script>

<style scoped>
.club-address {
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.card-content {
  text-align: left;
}

.card {
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.club-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contacts > * {
  margin-bottom: 0.5rem;
}

.contacts > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.playersCount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
