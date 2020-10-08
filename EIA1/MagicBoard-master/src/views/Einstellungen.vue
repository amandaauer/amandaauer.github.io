<template>
  <div>
    <section class="einst" id="sound">
      <v-icon style="background: #4C7FCC;font-size: 60px;color: #FFFFFF"
        >mdi-volume-off</v-icon
      >
      <h3>Sound</h3>
    </section>
    <section class="einst" id="musik">
      <v-icon style="background: #4C7FCC;font-size: 60px;color: #FFFFFF"
        >mdi-music</v-icon
      >
      <h3>Musik</h3>
    </section>
    <section class="einst" id="benach">
      <v-icon style="background: #4C7FCC;font-size: 60px;color: #FFFFFF"
        >mdi-bell</v-icon
      >
      <h3>Benachrichtigung</h3>
    </section>
    <section class="einst" id="agb">
      <router-link to="AGB" style="text-decoration: none"
        ><v-icon style="background: #4C7FCC;font-size: 60px;color: #FFFFFF"
          >mdi-book</v-icon
        ></router-link
      >
      <h3>AGB</h3>
    </section>
    <section class="einst" id="logout">
      <v-icon style="background: #4C7FCC;font-size: 60px;color: #FFFFFF"
        >mdi-logout-variant</v-icon
      >
      <h3>Logout</h3>
    </section>
    <section class="back">
      <router-link to="Startscreen"
        ><v-icon
          style="color: white; font-size: 70px; margin-bottom: 10%;background: #4C7FCC"
          >mdi-arrow-left-drop-circle-outline</v-icon
        ></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Einstellungen"
};
</script>

<style scoped>
.einst {
  display: flex;
  margin-left: 10%;
  margin-top: 7%;
}
.einst h3 {
  align-self: center;
  color: white;
  margin-left: 2%;
  font-size: 30px;
  font-family: "Hind Vadodara";
}
.back {
  margin-top: 10%;
  margin-left: 5%;
}
</style>
