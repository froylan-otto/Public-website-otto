<template>
  <q-layout view="lHh Lpr lFf">
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
            @click="ridirectToOtherSite(url_public_site)"
            replace
            name="home"
            :to="{ name: 'home' }"
            label="Home"
          />
          <q-route-tab
            @click="ridirectToOtherSite(url_contact_form)"
            :to="{ name: 'contact' }"
            replace
            label="Contact us"
          />
          <q-route-tab
            @click="ridirectToOtherSite(url_presentation)"
            :to="{ name: 'presentation' }"
            label="Presentation"
          />

          <!-- <q-route-tab :to="{ name: 'register' }" replace label="Register" /> -->
          <q-route-tab
            @click="ridirectToOtherSite(url_admin_site)"
            label="SIGN IN"
          />
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
      url_presentation: process.env.GLOBAL_ENV.URL_PRESENTATION,
      url_admin_site: process.env.GLOBAL_ENV.ADMIN_SITE,
      url_contact_form: process.env.GLOBAL_ENV.CONTACT_FORM,
      url_public_site: process.env.GLOBAL_ENV.PUBLIC_SITE,
    };
  },
  methods: {
    ridirectToOtherSite(url) {
      window.location.href = url;
    },
  },
});
</script>
<style>
body {
  font-family: Lato;
}
</style>
