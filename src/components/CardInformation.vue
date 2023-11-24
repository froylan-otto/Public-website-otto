<template>
  <q-card
    class="q-my-sm q-px-lg"
    :style="heroImage"
    style="border-radius: 15px"
  >
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <q-icon :name="icon" size="sm" color="grey-3" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-grey-3 text-bold"> {{ Title }}</q-item-label>
      </q-item-section>
    </q-item>
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
      default: "fas fa-upload",
    },
  },
  setup() {},
  computed: {
    heroImage() {
      return {
        backgroundImage: `url('https://ottito.io/images/common/network.jpg')`,
        backgroundSize: "1750% cover",
        backgroundPosition: "center center",
      };
    },
  },
};
</script>
<style scoped>
.my-card {
  width: 100%;
}

.fondo {
  background: url("~/assets/background.jpg") no-repeat center center / cover;
}
</style>
