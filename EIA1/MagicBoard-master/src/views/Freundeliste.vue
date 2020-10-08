<template>
  <div>
    <section class="Freundeliste">
      <v-list dense class="frindliste">
        <h3>Freunde:</h3>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="item in items"
            :key="item.text"
            :to="item.to"
            link
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                style="color: white;border-bottom: white solid 1px; align-self: center;font-family: 'Hind Vadodara'"
                link
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </section>
    <section class="back">
      <router-link to="Spielstart" style="text-decoration: none;margin-left: 2%"
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
  name: "Freundeliste",
  data: () => ({
    items: [
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" },
      { text: "Lorem", to: "Schwierigkeitsgrad" }
    ]
  })
};
</script>

<style scoped>
.frindliste {
  margin-top: 5%;
  width: 70%;
  margin-left: 15%;
  background: #2d47ae;
  color: white;
  font-family: "Hind Vadodara";
}
</style>
