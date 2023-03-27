<template>
  <TheHeader />
  <header>
    <div>
      <h1 class="text is-title">PingPongPlus.</h1>
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
    <div class="components">
      <AddClub />
      <div class="component">
        <div class="container">
          <NewsComponent />
        </div>
      </div>
      <div class="component noBorders">
        <div class="container">
          <HowToAdd />
        </div>
      </div>
      <div></div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/Navbar.vue";
import AddClub from "@/components/AddClub.vue";
import NewsComponent from "@/components/News.vue";
import HowToAdd from "@/components/HowToAdd.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    AddClub,
    NewsComponent,
    HowToAdd,
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -3vh 0;

  background-color: rgba(245, 245, 245, 0.77);
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

  z-index: 5;
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
  background-color: rgba(0, 0, 0, 0.4);
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

.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10vh 0;
  padding: 35px;

  border-top: 1px solid rgb(36, 36, 36);
  border-bottom: 1px solid rgb(36, 36, 36);
}

.components {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 8vh 0;

  z-index: 3;
}

.noBorders {
  border-top: none;
  border-bottom: none;
}
</style>
