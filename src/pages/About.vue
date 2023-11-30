<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <div class="">
          <div class="q-py-xl q-px-xl flex flex-center" :style="heroImage">
            <h3 class="text-white text-center">
              <span class="text-h4 q-mx-xl"> ABOUT US </span>

              <br />
              <div class="text-grey-6 text-h6 q-ml-xl q-mb-md q-mt-md">
                The tool focused on the music industry
              </div>
              <br />
            </h3>
          </div>
        </div>

        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="primary"
              navigation
              padding
              arrows
              height="700px"
              class="text-white shadow-1 rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-img
                  class="q-my-xl"
                  src="~/assets/aboutUs/about1.svg"
                  style="width: 550px"
                ></q-img>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <div class="q-mt-md text-center">
                  <q-img
                    class="q-my-xl"
                    src="~/assets/aboutUs/about2.svg"
                    style="width: 550px"
                  ></q-img>
                </div>
              </q-carousel-slide>
            </q-carousel>
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
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
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
