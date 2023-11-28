<template>
  <div class="row justify-evenly" :style="containerReponsive">
    <!-- start section featurea -->
    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 q-mb-sm">
      <div
        class="text-h4 text-center text-bold text-uppercase text-light-blue-14 q-my-xl"
      >
        {{ title }}
      </div>

      <q-card
        v-for="i in features"
        :key="i"
        flat
        class="q-ml-xl bg-secondary"
        style="width: 100%"
      >
        <q-item>
          <q-item-section avatar>
            <q-icon :name="i.icon" size="1.5em" :color="i.colorIcon" class="" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h5 text-grey-8">{{
              i.item
            }}</q-item-label>
            <q-item-label caption class="text-grey-7">
              {{ i.description }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <!-- start image section -->
    <div
      class="col-md-8 col-lg-8 col-sm-12 col-xs-12 row justify-center"
      :class="positionImage"
    >
      <q-img class="shadow-1" :src="image" :style="imgResponsive"></q-img>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "None",
    },
    features: {
      type: Array,
      default: () => [
        {
          item: "Display Analytical Information",
          icon: "fas fa-plus",
          colorIcon: "orange",
          description: "Display Analytical Information",
        },
        {
          item: "View Key Data",
          icon: "fas fa-check",
          colorIcon: "pink",
          description: " ",
        },
      ],
    },
    image: {
      type: String,
      default: "/Tools/homeDashboard.png",
    },
    imageFirst: { type: Boolean, default: false },
  },
  computed: {
    positionImage() {
      const class1 = "order-first rotateNegative";
      let clase = this.imageFirst
        ? "order-first rotateNegative"
        : "rotatePositive";
      // saber cuando se esta en una pantalla pequeña
      // si es asi, se le quita la propiedad order-first por temas de responsividad
      const isMovil =
        this.$q.screen.sm || this.$q.screen.xs || this.$q.screen.md;
      if (isMovil) {
        clase = " ";
      }
      return clase;
    },
    //funcion para borderear y size ajustment image
    imgResponsive() {
      const isMovil = this.$q.screen.sm || this.$q.screen.xs;
      return {
        borderRadius: isMovil ? "5px" : "15px",
        width: isMovil ? "100%" : "60%",
      };
    },
    containerReponsive() {
      const isMovil = this.$q.screen.sm || this.$q.screen.xs;
      return {
        marginBottom: isMovil ? "10px" : "100px",
      };
    },
  },
  setup() {},
};
</script>
<style scoped>
.rotateNegative {
  transform: rotate(-5deg);
}
.rotatePositive {
  transform: rotate(5deg);
}
</style>
