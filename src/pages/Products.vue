<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <div class="">
          <div class="q-py-xl q-px-xl flex flex-center" :style="heroImage">
            <h3 class="text-white text-center">
              <span class="text-h4 q-mx-xl"> PRODUCTS </span>

              <br />
              <div class="text-grey-6 text-h6 q-ml-xl q-mb-md q-mt-md">
                The tool focused on the music industry
              </div>
              <br />
              <!-- <q-btn
                type="a"
                @click="ridirectToOtherSite(url_contact_form)"
                size="lg"
                color="light-blue-14"
                label="GET IT"
                class="text-white text-bold q-mb-xl q-px-xl"
                rounded
              /> -->
            </h3>
          </div>
        </div>
        <div class="bg-white q-mx-xl">
          <q-card-section>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="otto" class="bg-primary">
                <q-img
                  src="otto-newlogo2013.png"
                  style="width: 70px; border-radius: 100px"
                ></q-img>
              </q-tab>
              <q-tab name="ottito" class="bg-primary">
                <q-img src="logo-ottito.svg" style="width: 70px"></q-img>
              </q-tab>
              <q-tab name="oas" class="bg-primary">
                <q-img src="logoOAS.svg" style="width: 70px"></q-img>
              </q-tab>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <!-- start tab account  -->
              <q-tab-panel name="otto">
                <div class="flex col justify-evenly" style="widht: 100%">
                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/otto1.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>

                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/otto2.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>

                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/otto3.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>

                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/otto4.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>
                </div>
              </q-tab-panel>
              <!-- end tab account -->

              <!-- start tab panel profile -->
              <q-tab-panel name="ottito">
                <div class="flex col justify-evenly" style="widht: 100%">
                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/ottito1.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>

                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/ottito2.svg"
                    style="width: 70%; border-radius: 15px"
                  ></q-img>
                </div>
              </q-tab-panel>
              <!-- end tab panel profile -->

              <!-- Start connection -->
              <q-tab-panel name="oas">
                <div class="flex col justify-evenly" style="widht: 100%">
                  <div class="row">
                    <div class="col-6 q-mt-lg">
                      <span class="text-h4 q-mx-xl">
                        An ongoing development project whose purpose is to
                        provide an overall system as;
                      </span>
                    </div>
                    <div class="col-6 q-mt-lg q-px-lg">
                      <span class="text-h4 q-mx-xl"
                        >The API IS fully customizable. The built-in UI accesses
                        all data via an API. Any data available via the
                        interface can be implemented. Functionalities include:
                      </span>
                    </div>
                  </div>
                  <q-img
                    class="q-my-xl"
                    src="~/assets/productsImages/Frame16generalOverview.svg"
                    style="width: 80%; border-radius: 15px"
                  ></q-img>
                </div>
              </q-tab-panel>
              <!-- End connections -->
            </q-tab-panels>
          </q-card-section>
        </div>
        <div class="bg-white q-mb-xl">
          <div class="">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h5 text-bold text-primary">
                  INFRAESTRUCTURE
                </div>
              </h5>
            </div>
          </div>
          <!-- start card information -->
          <div class="flex col justify-evenly" style="widht: 100%">
            <q-img
              class="q-my-xl"
              src="~/assets/productsImages/Frameinfraestructure.svg"
              style="width: 80%; border-radius: 15px"
            ></q-img>
          </div>
        </div>
        <!-- End cards information -->
        <q-separator />

        <div class="bg-white q-mb-xl">
          <div class="">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h5 text-bold text-primary">PRODUCTS</div>
              </h5>
            </div>
          </div>
          <!-- start card information -->
          <div class="flex col justify-evenly" style="widht: 100%">
            <q-img
              class="q-my-xl"
              src="~/assets/productsImages/FrameBubble.svg"
              style="width: 80%; border-radius: 15px"
            ></q-img>
          </div>
        </div>
        <!-- End cards information -->
        <q-separator />

        <div class="bg-white q-mb-xl">
          <div class="">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h5 text-bold text-primary">
                  THE SUITE OVERVIEW
                </div>
              </h5>
            </div>
          </div>
          <!-- start card information -->
          <div class="flex col justify-evenly" style="widht: 100%">
            <q-img
              class="q-my-xl"
              src="~/assets/productsImages/Frame15suite.svg"
              style="width: 80%; border-radius: 15px"
            ></q-img>
          </div>
        </div>
        <!-- End cards information -->
        <q-separator />

        <div class="bg-white q-mb-xl">
          <div class="">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h5 text-bold text-primary">
                  GENERAL OVERVIEW
                </div>
              </h5>
            </div>
          </div>
          <!-- start card information -->
          <div class="flex col justify-evenly" style="widht: 100%">
            <q-img
              class="q-my-xl"
              src="~/assets/productsImages/Frame16generalOverview.svg"
              style="width: 80%; border-radius: 15px"
            ></q-img>
          </div>
        </div>
        <!-- End cards information -->
        <q-separator />
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
import CardExpertise from "src/components/CardExpertise.vue";

export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    const Tools = [
      {
        image: "/Tools/homeDashboard.png",
        title: "Dasboard",
        imageFirst: false, // false = right
      },
      {
        image: "/Tools/homeDashboard.png",
        title: "Files",
        imageFirst: true, // false = right
      },
      {
        image: "/Tools/homeDashboard.png",
        title: "Settings",
        imageFirst: false, // false = right
      },
    ];
    const info_expertise = ref([
      {
        title: "THOROUGH KNOWLEDGE OF THE DIGITAL INDUSTRY:",
        items: [
          " Trusted solution for reporting, analytics and catalog management",
          "Efficient requirements gathering and implementation planning",
        ],
      },
      {
        title: "MODERN CODING FOLLOWING BEST PRACTICES",
        items: ["and full up to date technological set of tools"],
      },
      {
        title: "SCALABLE, PORTABLE and RE-CREATABLE",
        items: [
          "Structure easily adaptable to clients needs",
          "nteroperability between modules and products of the OTTO suite and others dat",
        ],
      },
      {
        title: "CUSTOMIZABLE",
        items: [
          "to the needs of different sectors of music and media industries Digital Services, Label Services, distributors / aggregators, labels, publishers",
        ],
      },
    ]);
    return {
      tab: ref("home"),
      info_expertise,
      Tools,
      textKey: "text-bold text-light-blue-14",
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


.pricing
  background: url(/statics/images/pricing.jpg)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat
</style>
