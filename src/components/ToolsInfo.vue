<template>
  <div class="row q-col-gutter-sm q-my-xl">
    <div class="col-md-4 col-lg-6 col-sm-4 col-xs-12 text-center">
      <div class="text-h4 text-bold text-light-blue-14 q-mb-xl">
        {{ title }}
      </div>
      <div v-for="i in features" :key="i" class="text-left q-ml-xl">
        <label class="text-h6 text-bold text-grey-6 q-ml-xl" for=""
          ><q-icon
            name="check_circle"
            color="light-blue-14"
            class="q-mr-sm"
          />{{ i }}</label
        >
      </div>
    </div>
    <div
      class="col-md-8 col-lg-6 col-sm-8 col-xs-12 items-center justify-center"
      :class="[imageFirst ? 'order-first' : '']"
      style="width: 50%"
    >
      <q-img
        class="shadow-10"
        :src="image"
        style="width: 40%; border-radius: 15px"
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
      default: () => ["Feat 1", "Feat two", "Feat 3"],
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
