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
          <h5 class="text-bold text-primary">
            A MARKET OPPORTUNITY: SEEKING ARNERS OR BUYERS
          </h5>
          <q-img
            class="q-my-xl"
            src="~/assets/imagesHome/marker-opportunity.svg"
            style="width: 40%; border-radius: 15px"
          ></q-img>
        </div>
        <!-- emd marker oportunity -->

        <div style="background: #e3f6f5" class="q-py-xl">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center text-white">
                <div class="text-h4 text-bold text-primary">TOOLS</div>
              </h5>
            </div>
          </div>

          <div id="id_services">
            <div class="q-pa-xl" v-for="tool in Tools" :key="tool">
              <tools-info
                :image="tool.image"
                :title="tool.title"
                :imageFirst="tool.imageFirst"
              />
            </div>
          </div>
        </div>
        <div class="pricing" id="id_pricing">
          <div class="q-py-xl">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">
                  <div class="text-h5 text-primary text-bold">PLANS</div>
                  <br />
                </h5>
              </div>
            </div>

            <div class="row justify-evenly q-ma-xl">
              <card-plan
                class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2"
                :image="'otto-newlogo2013.png'"
              />

              <card-plan
                class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2"
                :image="'otto-newlogo2013.png'"
              />

              <card-plan
                class="col-sm-12 col-xs-12 col-md-12 col-lg-2 col-xl-2"
                :image="'otto-newlogo2013.png'"
                :dark="true"
              />
            </div>

            <!-- <div class="flex justify-center">
              <card-plan :image="'logo-ottito.svg'" />
              <card-plan />
              <card-plan :dark="true" />
            </div> -->
          </div>
        </div>

        <!-- start ABOUT US -->
        <div class="text-center" style="margin: 120px 0px">
          <h5 class="text-bold text-primary">ABOUT US</h5>
          <div class="flex col">
            <div style="width: 50%" class="text-h5 q-pa-xl flex justify-center">
              <div style="width: 80%" class="text-justify text-grey-8">
                During the past 10 YEARS, OTTO has been in the forefront of
                technical development for the indies having designed, built and
                managed a bespoke data and financial reporting system and a full
                CRM system for Merlin Network, the global rights agency serving
                over 20% of the music industry, processing OVER $2BN in
                revenues.
              </div>
            </div>
            <div style="width: 50%">
              <q-img
                class="q-my-xl"
                src="~/assets/imagesHome/ABOUT_US.svg"
                style="width: 80%; border-radius: 15px"
              ></q-img>
            </div>
          </div>
        </div>
        <!-- emd ABOUT US -->

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
import CardExpertise from "src/components/CardExpertise.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CardPlan, CardInformation, ToolsInfo, CardExpertise },
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
