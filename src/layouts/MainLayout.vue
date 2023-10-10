<template>
  <q-layout view="lHh Lpr lFf" style="background: #e3f6f5">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center" class="text-bold">
          OTTO LIGHT
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $q = useQuasar();

    return {};
  },
  methods: {},
});
</script>
<style>
body {
  font-family: Lato;
}
</style>
