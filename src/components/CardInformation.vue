<template>
  <div
    class="col-md-3 col-lg-3 col-xs-6 col-sm-12"
    style="background-color: #e3f6f5 !important"
  >
    <q-card
      class="q-pa-sm flex flex-center text-center bg-primary"
      style="margin: 40px; border-radius: 50%; height: 250px; width: 250px"
    >
      <q-card-section>
        <div class="text-h6 text-bold text-white">{{ Title }}</div>
        <div class="content-circle-imagen">
          <img style="width: 60%" :src="image" class="image-circle" />
        </div>
      </q-card-section>
    </q-card>
  </div>
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
  },
  setup() {},
};
</script>
