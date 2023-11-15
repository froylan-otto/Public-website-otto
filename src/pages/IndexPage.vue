<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <div class="quote">
          <div
            class="q-pt-xl q-px-xl full-width full-height flex flex-center fondo"
            v-bind:style="heroImage"
          >
            <h3 class="text-white text-center">
              <span class="text-h4 q-mx-xl">
                A Data Reporting & Analytics infrastructure systems and platform
                for the music industry
              </span>

              <br />
              <div class="text-grey-6 text-h5 q-ml-xl q-mb-md q-mt-md">
                The tool focused on the music industry
              </div>
              <br />
              <q-btn
                type="a"
                @click="ridirectToOtherSite(url_contact_form)"
                size="lg"
                color="light-blue-14"
                label="GET IT"
                class="text-white"
              />
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center text-white">
              <div class="text-h4 text-bold text-primary">Benefits</div>
            </h5>
          </div>
        </div>
        <!-- start card information -->
        <div class="row q-mb-xl" style="background-color: #e3f6f5 !important">
          <card-information :Title="'Upload file'" />
          <card-information
            :Title="'Process File'"
            :image="'/CardInformation/processFile.svg'"
          />
          <card-information
            :Title="'Get Report'"
            :image="'/CardInformation/getReport.svg'"
          />
          <card-information
            :Title="'Get Report'"
            :image="'/CardInformation/generateStatement.svg'"
          />
        </div>
        <!-- End cards information -->
        <div class="row" style="background-color: #fff !important">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center text-white">
              <div class="text-h4 text-bold text-primary">Tools</div>
            </h5>
          </div>
        </div>
        <div id="id_services" style="background-color: #fff !important">
          <div class="q-pa-xl">
            <tools-info
              :image="'/Tools/homeDashboard.png'"
              :title="'Dashboard'"
              :imageFirst="false"
            />
            <tools-info :title="'Files'" :imageFirst="true" />
            <tools-info
              :image="'/Tools/homeDashboard.png'"
              :title="'Settings'"
              :imageFirst="false"
            />
          </div>
        </div>
        <div class="pricing" id="id_pricing">
          <div class="" style="background-color: #e3f6f5 !important">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">
                  <div class="text-h4 text-bold text-primary">Plans</div>
                  <br />
                </h5>
              </div>
            </div>

            <div class="row flex justify-center">
              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-px-lg">
                <card-plan
                  :image="'logo-ottito.svg'"
                  class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-px-lg"
                />
              </div>

              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-px-lg">
                <card-plan :image="'logo-ottito.svg'" />
              </div>

              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12 q-px-lg">
                <card-plan :image="'logo-ottito.svg'" />
              </div>
            </div>

            <!-- <div class="flex justify-center">
              <card-plan :image="'logo-ottito.svg'" />
              <card-plan />
              <card-plan :dark="true" />
            </div> -->
          </div>
        </div>

        <div class="row" style="background: #0d2031">
          <div class="col-12 text-center text-h5 text-white q-py-md q-pl-xl">
            © ottomate ltd 2023

            <br />
            <span class="text-caption">
              A Data Reporting & Analytics infrastructure systems and platform
              for the music industry
            </span>
          </div>
          <!-- <div class="col-7 q-py-md text-white">
            <div class="text-h6 text-white">PRODUCTS</div>

            <q-list class="text-white">
              <q-item-label>OTTO-light</q-item-label>
              <q-item-label>Otto as a Service</q-item-label>
              <q-item-label>Ottito</q-item-label>
            </q-list>
          </div> -->
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import CardPlan from "src/components/CardPlan.vue";
import CardInformation from "src/components/CardInformation.vue";
import ToolsInfo from "src/components/ToolsInfo.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CardPlan, CardInformation, ToolsInfo },
  setup() {
    const $q = useQuasar();

    return {
      tab: ref("home"),
      url_admin_site: process.env.GLOBAL_ENV.ADMIN_SITE,
      url_contact_form: process.env.GLOBAL_ENV.CONTACT_FORM,
      url_public_site: process.env.GLOBAL_ENV.PUBLIC_SITE,
    };
  },
  computed: {
    heroImage() {
      return {
        backgroundImage: `url('https://ottito.io/images/common/network.jpg')`,
      };
    },
    style() {
      return {
        width: "340px",
        height: "263px",
        backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
        textAlign: "center",
        boxShadow: "1px 1px 2px #e6e6e6",
        display: "inline-block",

        url_admin_site: process.env.GLOBAL_ENV.ADMIN_SITE,
        url_contact_form: process.env.GLOBAL_ENV.CONTACT_FORM,
        url_public_site: process.env.GLOBAL_ENV.PUBLIC_SITE,
      };
    },
  },
  methods: {
    ridirectToOtherSite(url) {
      window.location.href = url;
    },
  },
});
</script>

<style lang="sass" scoped>

.fondo
  background: url("~/assets/background.jpg") no-repeat center center / cover


.image-circle
  width: 200px
  height: 200px
  margin: auto
.content-circle-imagen
  width: 200px
  height: 200px
  border-radius: 60% !important
  display: flex
  margin: auto



.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important


.quote
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.pricing
  background: url(/statics/images/pricing.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat
</style>
