<template>
  <q-card
    class="card-plan q-ma-xl shadow-6"
    :class="[dark ? 'bg-primary' : 'bg-white']"
    style="width: 80%"
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
        >Basic Plan</q-card-title
      >
      <q-card-subtitle
        class="text-subtitle"
        :class="[dark ? 'text-white' : 'text-grey-10']"
        >For small sizes companies</q-card-subtitle
      >
      <!-- precio membrecia -->
      <div class="q-my-md">
        <q-card-title
          class="text-h3 text-bold"
          :class="[dark ? 'text-white' : 'text-primary']"
          style="font-weight: 900"
          >$0.0</q-card-title
        >
        <q-card-subtitle
          class="text-subtitle text-subtitle"
          :class="[dark ? 'text-white' : ' text-grey-8']"
          >/per month</q-card-subtitle
        >
      </div>
    </q-card-section>

    <q-list class="q-mx-lg">
      <q-item v-for="(feature, index) in features" :key="index">
        <q-item-section side class="">
          <q-icon name="check_circle" color="green-12" />
        </q-item-section>
        <q-item-section class="">
          <q-item-label :class="[dark ? 'text-white' : ' text-grey-14']">{{
            feature + index
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-card-section class="join-now-section">
      <q-btn
        class="join-now-btn rounded-button shadow-10 q-my-lg"
        color="light-blue-14"
        label="Join Now"
      />
    </q-card-section>
  </q-card>
</template>

<!--
  <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-px-lg">
    <q-card>
      <q-card-section
        class="text-white q-pa-md"
        style="background: #0d2031"
      >
        <div class="text-h6 text-center">Top Plan: Tiger</div>
      </q-card-section>
      <q-card-section class="q-pa-md">
        <q-list
          dense
          padding
          style="border-bottom: 1px solid lightgrey"
        >
          <q-item
            ><span class="text-weight-bold"
              >For average companies</span
            ></q-item
          >
          <q-item> Feature 1 </q-item>
          <q-item> Feature 2 </q-item>
          <q-item> Feature 3 </q-item>
        </q-list>
      </q-card-section>
      <q-card-section class="q-pa-none" style="color: #0d2031">
        <div class="text-center">
          <span class="text-h2 text-center">$0</span>/mo
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-center q-px-lg">
          <q-btn
            size="md"
            class="full-width q-pa-xs"
            :style="'background: #0d2031; color: white'"
            label="Choose Plan"
          />
          <br />
        </div>
      </q-card-section>
    </q-card>
  </div>
-->

<script>
export default {
  props: {
    image: {
      type: String,
      default: "/otto-newlogo2013.png",
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  name: "CardPlan",
  setup() {
    return {
      features: ["Feature 1", "Feature 2", "Feature 3"], // Reemplaza con tus características estáticas
    };
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
  width: 18%; /* Ajusta según tus necesidades para que haya dos tarjetas por fila */
  border-radius: 15px;
}

.per-month {
  font-size: 0.8em;
}

.join-now-section {
  text-align: center;
}

.rounded-button {
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
}
</style>
