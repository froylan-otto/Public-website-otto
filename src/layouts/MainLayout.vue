<template>
  <q-layout view="lHh Lpr lFf" style="background: #e3f6f5">
    <q-header
      class="no-shadow heading bg-primary q-py-lg"
      bordered
      style="height: 100px"
    >
      <q-toolbar class="col-4 flex justify-between">
        <q-avatar size="60px">
          <img
            src="~/assets/imagesHome/otto-newlogo2013.png"
            class="image-circle"
          />
        </q-avatar>
        <q-tabs align="top" class="q-mr-xl" v-model="tab">
          <q-route-tab
            :to="{ name: 'tourPage' }"
            replace
            name="home"
            label="Home"
          />
          <q-route-tab :to="{ name: 'tourPage' }" replace label="About us" />
          <q-route-tab :to="{ name: 'tourPage' }" replace label="Register" />
          <q-route-tab :to="{ name: 'loginPage' }" label="SIGN IN" />
          <!-- <q-route-tab :to="{ name: 'signup' }" label="SIGN UP" /> -->
          <!-- <q-route-tab :to="{ name: 'registration' }" label="REGISTRATION" /> -->
        </q-tabs>
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

    return {
      tab: ref("home"),
    };
  },
  methods: {},
});
</script>
<style>
body {
  font-family: Lato;
}
</style>
