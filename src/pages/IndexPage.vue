<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <div class="">
          <div class="q-py-xl q-px-xl flex flex-center" :style="heroImage">
            <h3 class="text-white text-center">
              <span class="text-h5 q-mx-xl">
                A Data Reporting & Analytics infrastructure systems and platform
                for the music industry
              </span>

              <br />
              <div class="text-grey-6 text-h6 q-ml-xl q-mb-md q-mt-md">
                The tool focused on the music industry
              </div>
              <br />
              <q-btn
                type="a"
                @click="ridirectToOtherSite(url_contact_form)"
                size="lg"
                color="light-blue-14"
                label="GET IT"
                class="text-white text-bold q-mb-xl q-px-xl"
                rounded
              />
            </h3>
          </div>
        </div>
        <div class="bg-white q-mb-xl">
          <div class="">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h5 text-bold text-primary">BENEFITS</div>
              </h5>
            </div>
          </div>
          <!-- start card information -->
          <div class="flex col justify-evenly" style="widht: 100%">
            <card-information
              :Title="'Upload file'"
              :icon="'fas fa-file-upload'"
            />
            <card-information :Title="'Process File'" :icon="'fas fa-file'" />
            <card-information :Title="'Get Report'" :icon="'fas fa-file-pen'" />
            <card-information :Title="'Process File'" />
          </div>
        </div>
        <!-- End cards information -->
        <q-separator />
        <!-- start cards expertise -->
        <div class="text-center q-my-xl" style="margin: 120px 0px">
          <h5 class="text-bold text-primary" style="margin-bottom: 0px">
            OUR KEY EXPERTISE: WHY US AND WHY NOW
          </h5>
          <h6 class="text-grey-14 q-mt-lg q-ma-xl">
            <span :class="textKey"> OTTO</span> has the foundation,
            <span :class="textKey">architecture and logic allowing </span> to
            build upon th <span :class="textKey">tools</span> and products
            saving substantial time, effort and money.
          </h6>
          <!-- sub cards -->
          <div class="row justify-evenly q-my-xl">
            <card-expertise
              class="col-lg-2 col-11"
              v-for="info in info_expertise"
              :key="info"
              :title="info.title"
              :items="info.items"
            />
          </div>
        </div>
        <!-- end cards expertise -->
        <!-- start marker oportunity -->
        <div class="text-center" style="margin: 120px 0px">
          <h5 class="text-bold text-primary">A MARKET OPPORTUNITY</h5>
          <!-- <q-img
            class="q-my-xl"
            src="S2_Lecture.jpg"
            style="width: 40%; border-radius: 15px"
          ></q-img> -->
          <q-img
            class="q-my-xl"
            src="~/assets/imagesHome/marker-opportunity.svg"
            style="width: 40%; border-radius: 15px"
          ></q-img>
        </div>
        <!-- emd marker oportunity -->

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
              style="width: 800px"
            ></q-img>
          </div>
        </div>

        <div class="pricing" id="id_pricing">
          <div class="q-py-xl">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">
                  <div class="text-h5 text-primary text-bold">
                    PRODUCTS AND SERVICES
                  </div>
                  <br />
                </h5>
              </div>
            </div>

            <div class="row justify-evenly q-ma-xl">
              <card-plan
                v-for="item in cardPlan"
                :key="item"
                class="col-sm-12 col-xs-12 col-md-12 col-lg-3 col-xl-3"
                :image="item.image"
                :dark="item.dark"
                :title="item.title"
                :features="item.features"
                :tab="item.tab"
                @tabSelected="selectTab"
              />
            </div>

            <!-- <div class="flex justify-center">
              <card-plan :image="'logo-ottito.svg'" />
              <card-plan />
              <card-plan :dark="true" />
            </div> -->
          </div>

          <div class="bg-white q-mx-xl" id="details">
            <q-card-section>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
                style="border-radius: 100px"
              >
                <q-tab name="ottito" class="bg-primary">
                  <q-img src="logo-ottito.svg" style="width: 70px"></q-img>
                </q-tab>
                <q-tab name="otto" class="bg-primary">
                  <q-img
                    src="otto-newlogo2013.png"
                    style="width: 70px; border-radius: 100px"
                  ></q-img>
                </q-tab>

                <q-tab name="oas" class="bg-primary">
                  <q-img src="logoOAS.svg" style="width: 70px"></q-img>
                </q-tab>
              </q-tabs>

              <q-tab-panels v-model="tab" animated>
                <!-- start tab panel profile -->
                <q-tab-panel name="ottito">
                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/ottito1.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>

                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/ottito2.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>
                </q-tab-panel>
                <!-- end tab panel profile -->

                <!-- start tab account  -->
                <q-tab-panel name="otto">
                  <!-- div class="flex col justify-evenly" style="widht: 100%"> -->
                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/otto1.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>

                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/otto2.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>

                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/otto3.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>

                  <div class="flex row justify-evenly">
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/otto4.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>
                  <!--  </div> -->
                </q-tab-panel>
                <!-- end tab account -->

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
                          >The API IS fully customizable. The built-in UI
                          accesses all data via an API. Any data available via
                          the interface can be implemented. Functionalities
                          include:
                        </span>
                      </div>
                    </div>
                    <q-img
                      class="q-my-xl"
                      src="~/assets/productsImages/Frame16generalOverview.svg"
                      style="width: 800px"
                    ></q-img>
                  </div>
                </q-tab-panel>
                <!-- End connections -->
              </q-tab-panels>
            </q-card-section>
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
import CardExpertise from "src/components/CardExpertise.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CardPlan, CardInformation, CardExpertise },
  setup() {
    const cardPlan = [
      {
        image: "logo-ottito.svg",
        title: "OTTITO",
        features: [
          "Statements Managment",
          "Remote file Retrieving (DSPs, Merlin)",
          "Users & Orgs magnament",
        ],
        dark: false,
        tab: "ottito",
      },
      {
        image: "/otto-newlogo2013.png",
        title: "OTTO",
        features: [
          "Reporting and outputs",
          "Business Analytics infraestructure",
          "Users & Orgs magnament",
          "Catalogue Audit and matching",
          "File cleaning module",
        ],
        dark: false,
        tab: "otto",
      },
      {
        image: "/logoOAS.svg",
        title: "OAS",
        features: [
          "key data snapshots",
          "Statements Managment",
          "Remote file Retrieving (DSPs, Merlin)",
          "Reporting and outputs",
          "Business Analytics infraestructure",
          "File cleaning module",
          "Usage Reports and Trends Managment",
          "Users & Orgs magnament",
          "Catalogue Audit and matching",
        ],
        dark: true,
        tab: "oas",
      },
    ];
    const Tools = [
      {
        image: "/Tools/homeDashboard.png",
        title: "Dashboard",
        imageFirst: false, // false = right
        features: [
          {
            item: "Analytical Information",
            icon: "fa-solid fa-chart-simple",
            colorIcon: "red",
            description: "Display Analytical Information ",
          },
          {
            item: "View Key Data",
            icon: "fas fa-lightbulb",
            colorIcon: "orange",
            description: " ",
          },
          {
            item: "Snapshots",
            icon: "far fa-rectangle-list",
            colorIcon: "light-green",
            description: "Summary information generated from sales reports",
          },
        ],
      },
      {
        image: "/Tools/GnerateReport.svg",
        title: "Files",
        imageFirst: true, // false = right
        features: [
          {
            item: "Add reports",
            icon: "fas fa-file-circle-plus",
            colorIcon: "blue",
            description: "Eneables manual adding of usage reports",
          },
          {
            item: "Matching features",
            icon: "far fa-object-ungroup",
            colorIcon: "pink",
            description:
              "With matching features (resulting file or unmatches sales line",
          },
          {
            item: "Normalisated data",
            icon: "fas fa-ruler",
            colorIcon: "light-green",
            description: "Generates a normalised CSV summary output",
          },
          {
            item: "Retrieves automatically",
            icon: "fas fa-wand-sparkles",
            colorIcon: "orange",
            description:
              "Retrieves automatically files from Merlin’s members account and other DSPs FTPs to ingest usage reports",
          },
          {
            item: "Download",
            icon: "fas fa-circle-arrow-down",
            colorIcon: "green",
            description:
              "Generate statements in CSV and / or PDF per label in the given report",
          },
        ],
      },
      {
        image: "/Tools/settings.png",
        title: "Settings",
        imageFirst: false, // false = right
        features: [
          {
            item: "Global configuration",
            icon: "fas fa-globe",
            colorIcon: "red",
            description: " Specifies the choice report processing parameters",
          },
          {
            item: "Especify configuration",
            icon: "fas fa-sitemap",
            colorIcon: "light-green",
            description: "Manages organizational information",
          },
        ],
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
      cardPlan,
      tab: ref("otto"),
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
    selectTab(tabName) {
      //details
      var elmnt = document.getElementById("details");
      elmnt.scrollIntoView();
      this.tab = tabName;
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
