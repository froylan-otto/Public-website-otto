<template>
  <q-card
    class="card-plan shadow-6 q-my-sm"
    :class="[dark ? 'bg-primary' : 'bg-white']"
  >
    <q-card-section class="text-center">
      <q-avatar size="100px" class="q-mt-md bg-primary">
        <img :src="image" class="rounded-imege" />
      </q-avatar>
    </q-card-section>
    <q-card-section class="text-center column">
      <q-card-title
        class="text-h6 text-bold"
        :class="[dark ? 'text-white' : 'text-primary']"
        >{{ title }}</q-card-title
      >
      <q-card-subtitle
        class="text-subtitle"
        :class="[dark ? 'text-white' : 'text-grey-10']"
        >For small sizes companies</q-card-subtitle
      >
      <!-- precio membrecia -->
      <div class="q-my-md">
        <!-- <q-card-title
          class="text-h3 text-bold"
          :class="[dark ? 'text-white' : 'text-primary']"
          style="font-weight: 900"
          >$0.0</q-card-title
        >
        <q-card-subtitle
          class="text-subtitle text-subtitle"
          :class="[dark ? 'text-white' : ' text-grey-8']"
          >/per month</q-card-subtitle
        > -->
      </div>
    </q-card-section>

    <q-list class="q-mx-lg">
      <q-item v-for="(feature, index) in features" :key="index">
        <q-item-section side class="">
          <q-icon name="check_circle" color="green-12" />
        </q-item-section>
        <q-item-section class="">
          <q-item-label :class="[dark ? 'text-white' : ' text-grey-14']">{{
            feature
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-card-section class="join-now-section">
      <q-btn
        class="join-now-btn rounded-button shadow-10 q-my-lg"
        color="light-blue-14"
        label="Details"
        @click="goToDetails(tab)"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "None title",
    },
    image: {
      type: String,
      default: "/otto-newlogo2013.png",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    tab: {
      type: String,
      default: "otto",
    },
    features: {
      type: Array,
      default: () => ["Feature 1", "Feature 2", "Feature 3"],
    },
  },
  name: "CardPlan",
  setup() {
    return {};
  },
  methods: {
    goToDetails(tab) {
      this.$emit("tabSelected", tab);
      var elmnt = document.getElementById(tab);
      elmnt.scrollIntoView();
    },
  },
};
</script>

<style scoped>
.q-item {
  /* style features */
  min-height: 0px !important;
  padding-bottom: 0px;
}
.card-plan {
  /*width: 15%;  Ajusta según tus necesidades para que haya dos tarjetas por fila */
  border-radius: 15px;
  display: block;
  position: relative;
  /* min-height: 730px; */
}
.card-plan::after {
  content: " ";
  display: block;
  height: 10em; /* ajusta según sea necesario */
}
.per-month {
  font-size: 0.8em;
}

.join-now-section {
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.rounded-button {
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
}
</style>
