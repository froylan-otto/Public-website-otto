<template>
  <q-card class="bg-primary q-my-xl">
    <q-card-section class="text-white text-bold">
      <q-icon :name="icon" size="sm" color="white" />
      {{ Title }}
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  name: "CardInformation",
  props: {
    image: {
      type: String,
      default: "/CardInformation/uploadFile.svg",
    },
    Title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default: "fas fa-check",
    },
  },
  setup() {},
};
</script>
<style scoped>
.my-card {
  width: 100%;
}
</style>
