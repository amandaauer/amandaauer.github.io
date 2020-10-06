<template>
  <div>
    <section>
      <header>
        <h1>
          Schwierigkeitsgrade
        </h1>
      </header>
    </section>
    <section class="erstereihe">
      <router-link to="Zeichnen" class="klas1" style="text-decoration: none"
        ><v-card class="schwierigkeitskarte" width="250" height="150">
          <v-card-text class="klassen">
            <p>Leicht</p>
          </v-card-text>
        </v-card></router-link
      >
      <router-link to="Zeichnen" class="klas2" style="text-decoration: none"
        ><v-card class="schwierigkeitskarte" width="250" height="150">
          <v-card-text class="klassen">
            <p>Mittel</p>
          </v-card-text>
        </v-card></router-link
      >
    </section>
    <section class="zweitereihe">
      <router-link to="Zeichnen" class="klas1" style="text-decoration: none"
        ><v-card class="schwierigkeitskarte" width="250" height="150">
          <v-card-text class="klassen">
            <p>Schwer</p>
          </v-card-text>
        </v-card></router-link
      >
      <router-link to="Zeichnen" class="klas2" style="text-decoration: none"
        ><v-card class="schwierigkeitskarte" width="250" height="150">
          <v-card-text class="klassen">
            <p>You could never</p>
          </v-card-text>
        </v-card></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Schwierigkeitsgrad"
};
</script>

<style scoped>
.erstereihe {
  display: flex;
  margin-top: 10%;
}
.zweitereihe {
  display: flex;
  margin-top: 10%;
}
.klas1 {
  margin-left: 19%;
}
.klas2 {
  margin-left: 19%;
}
.klassen {
  text-align: center;
}
.klassen p {
  margin-top: 22%;
  font-family: "Hind Vadodara";
  font-size: 35px;
  color: #ffffff;
}
.schwierigkeitskarte {
  background: #4c7fcc;
}
</style>
