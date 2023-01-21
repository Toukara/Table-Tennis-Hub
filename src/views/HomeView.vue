<template>
  <TheHeader />
  <header>
    <div>
      <h1 class="text is-title">Lorem ipsum dolor sit amet consectetur.</h1>
      <div class="header">
        <div class="blur">
          <div class="header-text">
            <h2 class="is-text">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, cum doloremque. Eligendi quidem tempore rerum doloremque voluptatem magnam
              necessitatibus dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="addClub">
        <label for="AddClub">Ajouter club</label>
        <div class="inputs">
          <input type="text" placeholder="Ex : 62783994" name="AddClub" id="addClub" class="input toAddNewClub" v-model="clubId" @keypress="isNumber" />
          <button type="submit" class="button is-info" v-bind:class="{ 'is-loading': isActive }" @click="createClub(this.clubId)" :disabled="isLoading">
            Submit !
          </button>
        </div>
      </div>
      {{ clubId }}
    </div>
  </main>

  <div class="buttons">
    <router-link class="button is-info" :to="{ name: 'players' }"> Joueurs </router-link>
    <router-link class="button is-info" :to="{ name: 'clubs' }"> Clubs </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
  },
  data() {
    return {
      clubId: "",
      isActive: false,
    };
  },
  methods: {
    async createClub(id) {
      // Change the state of the button
      this.isActive = true;

      // Fetch the club
      const response = await fetch(`http://127.0.0.1:1000/api/clubs/${id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.status);
      if (response.status === 201) {
        this.$router.push({ name: "club", params: { id: id } });
      } else {
        this.isActive = false;
      }
    },

    isNumber($event) {
      console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #29323c;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.header {
  background-image: url("../../public/images/header-template.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  max-height: 45vh;

  border-bottom: 5px solid rgb(255, 255, 255);
  box-shadow: 0px 15px 10px -15px rgb(17, 17, 17);

  margin-bottom: 4vh;
}

.blur {
  background: rgba(80, 80, 80, 0.278);
  backdrop-filter: blur(3.5px);
  height: 100%;
  width: 100%;
}

.header-text {
  // background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: rgb(255, 255, 255);
  font-weight: bold;
  border: 3px solid rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  padding: 15px;
  text-align: center;
  max-width: 65vw;

  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

.text {
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  color: rgb(53, 53, 53);
  &.is-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  &.is-subtitle {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
  }
}

.part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
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
</style>
