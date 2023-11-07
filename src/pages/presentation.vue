<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <div>
          <iframe
            width="100%"
            height="1000px"
            frameborder="3"
            style="background-color: #e3f6f5 !importan"
            src="/src/assets/OTT-presDeck-03.pdf"
          ></iframe>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const $q = useQuasar();

    return {};
  },
  computed: {},
  onMounted() {
    alert("hola");
  },
  methods: {
    ridirectToOtherSite(url) {
      window.location.href = url;
    },
  },
});
</script>
