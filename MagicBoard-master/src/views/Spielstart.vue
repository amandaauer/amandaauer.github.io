<template>
  <div>
    <section class="menü">
      <article class="zflplay">
        <router-link to="Schwierigkeitsgrad" style="text-decoration: none"
          ><v-icon style="background: #4C7FCC;font-size: 70px;color: #FFFFFF"
            >mdi-refresh</v-icon
          ></router-link
        >
        <p>Zufällige Spieler</p>
      </article>
      <article class="frndsuch">
        <router-link to="Freundesuchen" style="text-decoration: none"
          ><v-icon style="background: #4C7FCC;font-size: 70px;color: #FFFFFF"
            >mdi-account-search</v-icon
          ></router-link
        >
        <p>Freunde suchen</p>
      </article>
      <article class="frndlist">
        <router-link to="Freundeliste" style="text-decoration: none"
          ><v-icon style="background: #4C7FCC;font-size: 70px;color: #FFFFFF"
            >mdi-account-badge-horizontal</v-icon
          ></router-link
        >
        <p>Freundesliste</p>
      </article>
    </section>
    <section class="freundeliste">
      <v-list dense class="frindliste">
        <h3>Freunde:</h3>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to">
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                style="color: white;border-bottom: white solid 1px; align-self: center;font-family: 'Hind Vadodara'"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </section>
    <section class="zurück">
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
  name: "Spielstart",
  data: () => ({
    item: 1,
    items: [
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" }
    ]
  })
};
</script>

<style scoped>
.zflplay {
  display: flex;
  margin-top: 10%;
}
.frndsuch {
  display: flex;
  margin-top: 5%;
}
.frndlist {
  display: flex;
  margin-top: 5%;
}
.menü {
  margin-left: 20%;
}
.menü p {
  font-family: "Hind Vadodara";
  color: white;
  margin-top: 2%;
  margin-left: 1%;
  font-size: 30px;
}
.freundeliste {
  width: 25%;
  float: right;
  margin-right: 10%;
  height: 250px;
  overflow: auto;
  position: sticky;
  margin-top: 5%;
}
.freundeliste h3 {
  font-family: "Fredericka the Great";
  color: white;
}
.frindliste {
  background-image: url(../assets/Hintergrund.jpg);
}
.zurück {
  margin-top: 25%;
  margin-left: 2%;
}
</style>
