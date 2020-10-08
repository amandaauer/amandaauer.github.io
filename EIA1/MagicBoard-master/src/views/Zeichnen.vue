<template>
  <div>
    <section class="erstesec"></section>
    <section class="zeichensec">
      <paintable
        :active="isActive"
        :width="800"
        :height="800"
        :disableNavigation="disableNavigation"
        :hide="hidePaintable"
        :horizontalNavigation="true"
        :navigation="navigation"
        :name="isFirstPaintable ? 'my-screen' : 'my-second-screen'"
        :factor="1"
        :lineWidth="dynamicLineWidth"
        :lineWidthEraser="20"
        :useEraser="useEraser"
        :color="color"
        class="paint"
        ref="paintable"
        @toggle-paintable="toggledPaintable"
      >
      </paintable>
    </section>
    <section class="zweitesec">
      <router-link
        to="Spielende"
        class="endrouter"
        style="text-decoration: none"
        ><v-icon
          style="color: white; font-size: 70px; margin-bottom: 10%;background: #4C7FCC"
          >mdi-arrow-right-drop-circle-outline</v-icon
        ></router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "Zeichnen",
  data() {
    return {
      isFirstPaintable: true,
      hidePaintable: false,
      disableNavigation: false,
      dynamicLineWidth: 5,
      isActive: false,
      useEraser: false,
      color: "#000"
    };
  },
  computed: {
    navigation() {
      return {
        "draw-save": {
          body: "click here!",
          activeBody: "<strong>save</strong>"
        },
        color: {
          body: "color"
        }
      };
    }
  },
  methods: {
    toggledPaintable(isActive) {
      this.isActive = isActive;
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  position: initial !important;
}
h3 {
  font-weight: normal;
}
.paint {
  border: 5px solid #000;
  border-radius: 5px;
  margin: 40px auto;
  box-sizing: border-box;
  display: block;
  width: 810px !important;
  height: 810px !important;
  position: relative !important;
  overflow: hidden;
  background: white;
  margin-top: 3%;
}
footer {
  text-align: center;
}
footer a {
  color: #777;
  text-transform: uppercase;
  text-decoration: none;
}
button {
  border: 0;
  margin: 0 10px 0 0;
  font-size: 14px;
  padding: 10px 15px;
  opacity: 0.8;
  background-color: rgb(19, 102, 141);
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  opacity: 1;
}
.endrouter {
  float: right;
  margin-right: 3%;
}
</style>
