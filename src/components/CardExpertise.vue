<template>
  <q-card class="bg-secondary q-mx-xl q-my-sm card-experiste q-pa-xl shadow-0">
    <q-section>
      <div
        class="text-h6 text-bold q-mt-lg text-center text-light-blue-14 text-bold text-uppercase"
      >
        {{ title }}
      </div>
      <q-list
        class="text-grey-8 text-bold text-center"
        v-for="item in items"
        :key="item"
      >
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
<style scoped></style>
