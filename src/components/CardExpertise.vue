<template>
  <q-card class="bg-secondary q-mb-xl card-experiste q-pa-xl">
    <q-section>
      <div class="text-center text-light-blue-14 text-bold text-uppercase">
        {{ title }}
      </div>
      <q-list class="text-grey-8 text-center" v-for="item in items" :key="item">
        <q-item>
          <q-item-section>{{ item }}</q-item-section>
        </q-item></q-list
      >
    </q-section>
  </q-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "none title",
    },
    items: {
      type: Array,
      default: () => ["item 1", "item 2"],
    },
  },
  setup() {},
};
</script>
<style scoped>
.card-experiste {
  max-width: 18% !important;
}
</style>
