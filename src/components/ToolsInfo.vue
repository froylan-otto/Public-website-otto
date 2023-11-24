<template>
  <div class="row justify-evenly q-my-xl q-py-xl">
    <!-- start section featurea -->
    <div class="col-md-4 col-lg-6 col-sm-4 col-xs-12">
      <div
        class="text-h4 text-center text-bold text-uppercase text-light-blue-14 q-my-xl"
      >
        {{ title }}
      </div>

      <q-card v-for="i in features" :key="i" flat class="q-ml-xl bg-secondary">
        <q-item>
          <q-item-section avatar>
            <q-icon :name="i.icon" :color="i.colorIcon" class="q-ml-xl" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h5 text-grey-7 text-bold">{{
              i.item
            }}</q-item-label>
            <q-item-label caption class="text-grey-6">
              {{ i.description }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <!-- start image section -->
    <div
      class="col-md-8 col-lg-6 col-sm-8 col-xs-12 row justify-center"
      :class="[imageFirst ? 'order-first rotateNegative' : 'rotatePositive']"
      style="width: 50%"
    >
      <q-img
        class="shadow-10"
        :src="image"
        style="width: 60%; border-radius: 15px"
      ></q-img>
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
          item: "feat 1",
          icon: "fas fa-car",
          colorIcon: "orange",
          description: "loremipsum ajskdhasjkd asjkdha sdkjhasjk ",
        },
        {
          item: "feat 2",
          icon: "fas fa-check",
          colorIcon: "pink",
          description: "loremipsum ajskdhasjkd asjkdha sdkjhasjk ",
        },
      ],
    },
    image: {
      type: String,
      default: "/Tools/homeDashboard.png",
    },
    imageFirst: { type: Boolean, default: false },
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
