<template>
  <div class="container" id="addClub">
    <div class="addClub">
      <label for="AddClub">Ajouter club</label>
      <div class="inputs">
        <input type="text" placeholder="Ex : 07620040 | Ex: Loos en Gohelle" name="AddClub" id="addClub" class="input toAddNewClub" v-model="searchBar" />
        <button type="submit" class="button is-info" v-bind:class="{ 'is-loading': isActive }" @click="verifyInput(this.searchBar)" :disabled="this.isActive">
          Submit !
        </button>
      </div>
    </div>
    {{ this.isNumber(this.searchBar) }}
    <div class="searchedClubs" v-show="!this.isActive">
      <ul>
        <li v-for="club in searchedClubs" :key="club.id" class="searchedItem" @click="createClub(club.id)">
          <p>{{ club.name }}</p>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <router-link class="button is-info" :to="{ name: 'players' }"> Joueurs </router-link>
      <router-link class="button is-info" :to="{ name: 'clubs' }"> Clubs </router-link>
    </div>
  </div>

  <!-- Create a card message in the bottom corner to say "Le club est en cours d'ajout !" -->
  <div class="message" v-show="this.isActive">
    <div class="message-body">
      <p>Le club est en cours d'ajout !</p>
    </div>
  </div>
</template>

<script>
import { postClubs } from "@/api/clubs.js";
import axios from "@/lib/axios.js";
import cheerio from "cheerio";

export default {
  name: "AddClub",
  data() {
    return {
      searchBar: "",
      isActive: false,
      searchedClubs: [],
    };
  },
  methods: {
    async createClub(id) {
      // Change the state of the button
      this.isActive = true;

      // Fetch the club
      const response = await postClubs(id);

      document.getElementById("addClub").scrollIntoView({ behavior: "smooth", block: "center" });

      console.log(response.status);
      if (response.status === 201) {
        this.$router.push({ name: "club", params: { id: id } });
      } else {
        this.isActive = false;
      }
    },

    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    async verifyInput(input) {
      // if input is not a number

      console.log(typeof input);
      console.log(input);

      const ABCRegex = /^[a-zA-Z]+$/;

      if (!this.isNumber(input) && ABCRegex.test(input)) {
        // const { data: page } = await axios.get(`/clubs/form/resultats?NAME=${input}`);
        const { data: page } = await axios.get(`/clubs/form/resultats?NAME=${input}`);

        const $ = cheerio.load(page);

        const textHtmlSplited = $.text()
          .split("\n")
          .filter((i) => i);

        if (textHtmlSplited.includes("Rech. Club")) {
          $("li.arrow").each((i, el) => {
            const name = $(el).text().trim();
            const id = $(el).find("a").attr("href").split("?")[0].split("/").pop();

            this.searchedClubs.push({ name, id });
          });

          // console.log($("li.arrow").html());
        } else {
          // const { data: club } = await axios.get(`/clubs/form/resultats?NAME=${input}`, {
          //   headers: {
          //     "Content-Type": "application/x-www-form-urlencoded",
          //   },
          // });

          // const $ = cheerio.load(club);

          // console.log($.text());
          console.log("Second option");
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
}

.btn {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-image: linear-gradient(to right, #29323c, #485563);
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 6px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
}

.toAddNewClub {
  width: 30vw;
}

.addClub {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.inputs {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
}

label {
  font-size: 18px;
  font-weight: 500;
}

.searchedClubs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  margin-top: 20px;
  background-color: whitesmoke;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  border-radius: 4px;
}

.searchedItem {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 4px;
  &:hover {
    background-color: rgb(229, 229, 229);
  }
}

.message {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  z-index: 1000;
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  transition: all 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
</style>
