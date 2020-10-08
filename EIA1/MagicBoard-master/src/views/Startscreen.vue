<template>
  <div>
    <section class="plbt">
      <router-link
        to="Spielstart"
        style="text-decoration: none"
        class="playbutton"
        ><v-icon style="color: white; font-size: 70px;background: #4C7FCC"
          >mdi-play</v-icon
        ></router-link
      >
    </section>
    <section class="highfrie">
      <article class="score">
        <router-link to="Highscore" style="text-decoration: none"
          ><v-icon style="background: #4C7FCC;font-size: 70px;color: #FFFFFF"
            >mdi-trophy</v-icon
          ></router-link
        >
        <p>Dein Highscore:</p>
        <p>2345</p>
      </article>
      <article class="friends">
        <router-link to="Spielstart" style="text-decoration: none"
          ><v-icon style="background: #4C7FCC;font-size: 70px;color: white"
            >mdi-account-multiple-plus</v-icon
          ></router-link
        >
        <p>Freunde finden</p>
      </article>
    </section>
    <section class="settings">
      <router-link to="Einstellungen" style="text-decoration: none"
        ><v-icon
          style="font-size: 70px;float: right; color: white; margin-right: 2%;margin-top5%;background: #4C7FCC"
          >mdi-settings</v-icon
        ></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Startscreen"
};
</script>

<style scoped>
.playbutton {
}
.plbt {
  margin-top: 15%;
  margin-left: 45%;
}
.score {
  display: flex;
  margin-top: 5%;
  margin-left: 30%;
}
.score p {
  font-size: 30px;
  font-family: "Hind Vadodara";
  margin-top: 1%;
  margin-left: 1%;
  color: white;
}
.friends {
  display: flex;
  margin-top: 5%;
  margin-left: 30%;
}
.friends p {
  font-family: "Hind Vadodara";
  font-size: 30px;
  margin-top: 1%;
  margin-left: 1%;
  color: white;
}
</style>
