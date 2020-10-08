<template>
  <v-app id="inspire">
    <v-app-bar
      class="appbar"
      app
      clipped-right
      height="120"
      style="background: #131b42; margin-left: 20%"
      width="60%"
    >
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none">
          <header class="überschrift">
            Magic Board
          </header>
        </router-link>
      </v-toolbar-title>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="60%">
          <template v-slot:activator="{ on }">
            <v-icon
              style="color: white; font-size: 45px;background: #4C7FCC"
              class="iconin"
              v-on="on"
              >mdi-login-variant</v-icon
            >
          </template>
          <div class="anmeldekarte">
            <section class="anmeldetitel">
              <h1 class="anmelden">Anmelden</h1>
            </section>
            <section class="anmeldepart">
              <v-container>
                <article>
                  <v-text-field
                    name="Username"
                    label="Username"
                    id="email"
                    v-model="Username"
                    type="Username"
                    required
                    class="eingabefeld"
                    style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px"
                  ></v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    required
                    class="eingabefeld"
                    style="width: 30% ;background: #FFFFFF; opacity: 0.6;margin-left: 35%;border-radius: 20px; margin-top: 3%"
                  ></v-text-field>
                  <v-container class="pwgotten">
                    <article class="link">
                      <router-link
                        to=""
                        class="routerpw"
                        style=" text-decoration: none; color: white"
                        ><p style="font-family: 'Hind Vadodara'">
                          Passwort vergessen?
                        </p></router-link
                      >
                    </article>
                  </v-container>
                  <router-link to="Startscreen" style="text-decoration: none"
                    ><v-icon
                      @click="dialog = false"
                      type="submit"
                      class="anmeldbutton"
                      style="font-size: 70px; color: white; background: #4C7FCC; border: transparent; margin-left: 45%; margin-top: -2%"
                      >mdi-login-variant</v-icon
                    ></router-link
                  >
                </article>
              </v-container>
            </section>
            <section class="bindestrich">
              <article class="neubei">
                <span
                  style="font-family: 'Hind Vadodara';color: #FFFFFF; margin-left: 42%"
                  >Neu beim Magic Board?</span
                >
              </article>
            </section>

            <section class="neuanmeldteil">
              <v-container>
                <article>
                  <router-link to="/" style="text-decoration: none"
                    ><v-btn
                      @click="dialog = false"
                      style="width: 30%; background: #FFFFFF; opacity: 0.6;margin-left: 35%; border-radius: 20px;font-family: 'Hind Vadodara'"
                      >REGISTRIEREN</v-btn
                    ></router-link
                  >
                </article>
              </v-container>
            </section>
            <v-btn text @click="dialog = false" class="zurückbutton"
              ><v-icon
                style="color: white; font-size: 70px; margin-bottom: 10%;background: #4C7FCC"
                >mdi-arrow-left-drop-circle-outline</v-icon
              ></v-btn
            >
            <router-link to="Einstellungen" style="text-decoration: none"
              ><v-icon
                @click="dialog = false"
                style="font-size: 70px;float: right; color: white; margin-right: 2%;background: #4C7FCC"
                >mdi-settings</v-icon
              ></router-link
            >
          </div>
        </v-dialog>
      </v-row>
      <router-link to="" class="topnavrouter"
        ><v-icon
          style="color: white; font-size: 45px;background: #4C7FCC"
          class="iconout"
          >mdi-logout-variant</v-icon
        ></router-link
      >
    </v-app-bar>
    <v-img src="./assets/Hintergrund.jpg" style="width: 60%; margin-left: 20%">
      <v-content class="content">
        <router-view class="view" />
      </v-content>
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    dialog: false
  })
};
</script>
<style scoped>
logo {
  height: 80px;
  width: 100px;
  align-content: flex-start;
  align-self: center;
  margin-top: 20%;
}
.topnavrouter {
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  align-self: center;
}
.appbar {
  justify-content: space-between;
}
.überschrift {
  text-align: center;
  font-family: "Fredericka the Great";
  font-size: 50px;
  font-weight: lighter;
  color: white;
}
.iconin {
  margin-right: -30%;
}
.iconout {
  float: right;
  margin-right: 200%;
}
.anmeldekarte {
  background-image: url(./assets/Hintergrund.jpg);
  height: 520px;
  width: 100%;
}
.anmelden {
  color: white;
  font-size: 40px;
  font-family: "Fredericka the Great";
  text-align: center;
  font-weight: lighter;
}
.anmeldbutton {
  font-size: 30px;
  color: white;
}
.pwgotten {
  margin-left: 36%;
  margin-top: -1%;
}
</style>
