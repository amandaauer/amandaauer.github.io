<template>
  <div>
    <section class="head">
      <header>
        <h1>
          Highscore
        </h1>
      </header>
    </section>
    <section tabelle>
      <article class="frnds">
        <h2>
          Deine Freunde:
        </h2>
      </article>
      <v-data-table
        :headers="headers"
        :items="player"
        :sort-desc="[false, true]"
        class="scoretable"
      ></v-data-table>
    </section>
    <section class="allplayers">
      <article class="elle">
        <h2>
          Alle Nutzer:
        </h2>
      </article>
      <v-data-table
        :headers="headers"
        :items="playerz"
        :sort-desc="[false, true]"
        class="scoretable"
      ></v-data-table>
    </section>
    <section class="back">
      <router-link
        to="Startscreen"
        style="text-decoration: none;margin-left: 2%"
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
  name: "Highscore",
  data() {
    return {
      headers: [
        {
          text: "Player",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Score", value: "score" }
      ],
      player: [
        {
          name: "Ann-Kathrin",
          score: 5097
        },
        {
          name: "Amanda",
          score: 4768
        },
        {
          name: "Helena",
          score: 3879
        },
        {
          name: "Nick",
          score: 2981
        },
        {
          name: "Svenja",
          score: 1893
        }
      ],
      playerz: [
        {
          name: "Ann-Kathrin",
          score: 5097
        },
        {
          name: "Amanda",
          score: 4768
        },
        {
          name: "Helena",
          score: 3879
        },
        {
          name: "Nick",
          score: 2981
        },
        {
          name: "Svenja",
          score: 1893
        }
      ]
    };
  }
};
</script>

<style scoped>
.scoretable {
  margin-top: 5%;
  width: 70%;
  margin-left: 15%;
  background: #2d47ae;
  color: white;
  font-family: "Hind Vadodara";
}
.head {
  font-family: "Fredericka the Great";
  text-align: center;
  font-size: 40px;
  color: white;
}
.head h1 {
  font-weight: lighter;
}
.frnds {
  font-family: 25px;
  color: white;
  margin-left: 15%;
  font-family: "Fredericka the Great";
  margin-bottom: -2%;
}
.frnds h2 {
  font-weight: lighter;
  font-family: "Hind Vadodara";
}
.allplayers {
  margin-top: 5%;
}
.elle {
  font-family: 25px;
  color: white;
  margin-left: 15%;
  font-family: "Fredericka the Great";
  margin-bottom: -2%;
}
.elle h2 {
  font-weight: lighter;
  font-family: "Hind Vadodara";
}
.back {
  margin-top: 5%;
}
</style>
