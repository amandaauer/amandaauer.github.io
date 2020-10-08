<template>
  <div class="home">
    <section class="first">
      <article class="fistart">
        <header>
          <h1>
            Registrieren
          </h1>
        </header>
      </article>
    </section>
    <section>
      <v-text-field
        name="E-MAil"
        label="E-MAil"
        id="E-MAil"
        v-model="email"
        type="E-MAil"
        required
        class="eingabefeld"
        style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Username"
        label="Username"
        id="Username"
        v-model="Username"
        required
        class="eingabefeld"
        style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Passwort"
        label="Passwort"
        id="Passwort"
        v-model="Passwort"
        type="Passwort"
        required
        class="eingabefeld"
        style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;margin-top: 5%"
      ></v-text-field>
      <v-text-field
        name="Passwort bestätitgen"
        label="Passwort bestätitgen"
        id="Passwort bestätitgen"
        v-model="confirmpassword"
        required
        class="eingabefeld"
        style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 5%"
      ></v-text-field>
    </section>
    <section class="settings">
      <router-link to="Einstellungen" style="text-decoration: none"
        ><v-icon
          style="font-size: 70px;float: right; color: white; margin-right: 5%;margin-top5%;background: #4C7FCC"
          >mdi-settings</v-icon
        ></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
.home {
  font-family: "Hind Vadodara";
}
.fistart h1 {
  color: white;
  font-size: 40px;
  font-family: "Fredericka the Great";
  text-align: center;
  font-weight: lighter;
}
</style>
