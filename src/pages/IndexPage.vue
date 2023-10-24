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
              <div class="text-grey-7 text-h5 q-ml-xl q-mb-md q-mt-md">
                The tool focused on the music industry
              </div>
              <br />
              <q-btn
                type="a"
                href=""
                size="lg"
                color="secondary"
                label="GET IT"
                class="text-black"
              />
            </h3>
          </div>
        </div>
        <div
          class="row q-mt-xl q-mb-xl"
          style="background-color: #e3f6f5 !important"
        >
          <div
            class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
            style="background-color: #e3f6f5 !important"
          >
            <q-card
              class="q-pa-sm flex flex-center text-center"
              style="margin: 40px"
            >
              <q-card-section>
                <div class="content-circle-imagen">
                  <img
                    style="width: 100%"
                    src="~/assets/imagesHome/uploadFile.svg"
                    class="image-circle"
                  />
                </div>

                <div class="text-h6">Upload File</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center"
              style="margin: 40px"
            >
              <q-card-section>
                <div class="content-circle-imagen">
                  <img
                    style="width: 100%"
                    src="~/assets/imagesHome/processFile.svg"
                    class="image-circle"
                  />
                </div>

                <div class="text-h6">Process File</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center"
              style="margin: 40px"
            >
              <q-card-section>
                <div class="content-circle-imagen">
                  <img
                    style="width: 100%"
                    src="~/assets/imagesHome/getReport.svg"
                    class="image-circle"
                  />
                </div>

                <div class="text-h6">Get Report</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card
              class="q-pa-sm flex flex-center text-center"
              style="margin: 40px"
            >
              <q-card-section>
                <div class="content-circle-imagen">
                  <img
                    style="width: 100%"
                    src="~/assets/imagesHome/generateStatement.svg"
                    class="image-circle"
                  />
                </div>

                <div class="text-h6">Generate Statements</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div id="id_services" style="background-color: #fff !important">
          <div class="q-pa-xl">
            <div class="row q-col-gutter-sm q-my-xl">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center">
                <div class="text-h4 text-bold text-light-blue-14 q-mb-xl">
                  Dashboard
                </div>
                <label>Feature 1</label>
                <br />
                <label>Feature 2</label>
                <br />
                <label>Feature 3</label>
                <br />
              </div>
              <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <q-img
                  src="~/assets/imagesHome/homeDashboard.png"
                  style="width: 80%; border-radius: 5px"
                ></q-img>
              </div>
            </div>

            <div class="row q-col-gutter-sm q-mt-lg">
              <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 text-center">
                <div class="text-h4 text-bold text-light-blue-14 q-mb-xl">
                  Files
                </div>
                <label>Feature 1</label>
                <br />
                <label>Feature 2</label>
                <br />
                <label>Feature 3</label>
                <br />
              </div>
              <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <q-img
                  src="~/assets/imagesHome/homeDashboard.png"
                  style="width: 80%; border-radius: 5px"
                ></q-img>
              </div>
            </div>
          </div>
        </div>
        <div class="pricing" id="id_pricing">
          <div class="" style="background-color: #e3f6f5 !important">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white">
                  <div class="text-h4 text-bold text-light-blue-14">Plans</div>
                  <br />
                  <span class="text-center text-grey text-h6"
                    >Variety of benefits when uploading your file and
                    configuring your currency exchange rate in an agile way and
                    receiving the report via E-mail</span
                  >
                </h5>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-px-xl">
              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section
                    class="text-white"
                    style="background: #0d2031"
                  >
                    <div class="text-h6 text-center">Basic Plan: Cat</div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list
                      dense
                      padding
                      style="border-bottom: 1px solid lightgrey"
                    >
                      <q-item
                        ><span class="text-weight-bold"
                          >For small size companies</span
                        ></q-item
                      >
                      <q-item> Feature 1 </q-item>
                      <q-item> Feature 2 </q-item>
                      <q-item> Feature 3 </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #0d2031">
                    <div class="text-center">
                      <span class="text-h2 text-center">$0</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn
                        size="md"
                        class="full-width q-pa-xs"
                        style="background: #0d2031; color: white"
                        label="Choose Plan"
                      />
                      <br />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section
                    class="text-white"
                    style="background: #0d2031"
                  >
                    <div class="text-h6 text-center">Mid Plan: Chita</div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list
                      dense
                      padding
                      style="border-bottom: 1px solid lightgrey"
                    >
                      <q-item
                        ><span class="text-weight-bold"
                          >For medium companies</span
                        ></q-item
                      >
                      <q-item> Feature 1 </q-item>
                      <q-item> Feature 2 </q-item>
                      <q-item> Feature 3 </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #0d2031">
                    <div class="text-center">
                      <span class="text-h2 text-center">$0</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn
                        size="md"
                        class="full-width q-pa-xs"
                        style="background: #0d2031; color: white"
                        label="Choose Plan"
                      />
                      <br />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6 q-px-lg">
                <q-card>
                  <q-card-section
                    class="text-white q-pa-md"
                    style="background: #0d2031"
                  >
                    <div class="text-h6 text-center">Top Plan: Tiger</div>
                  </q-card-section>
                  <q-card-section class="q-pa-md">
                    <q-list
                      dense
                      padding
                      style="border-bottom: 1px solid lightgrey"
                    >
                      <q-item
                        ><span class="text-weight-bold"
                          >For average companies</span
                        ></q-item
                      >
                      <q-item> Feature 1 </q-item>
                      <q-item> Feature 2 </q-item>
                      <q-item> Feature 3 </q-item>
                    </q-list>
                  </q-card-section>
                  <q-card-section class="q-pa-none" style="color: #0d2031">
                    <div class="text-center">
                      <span class="text-h2 text-center">$0</span>/mo
                    </div>
                  </q-card-section>
                  <q-card-section>
                    <div class="text-center q-px-lg">
                      <q-btn
                        size="md"
                        class="full-width q-pa-xs"
                        :style="'background: #0d2031; color: white'"
                        label="Choose Plan"
                      />
                      <br />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>

        <div
          class="col q-pt-md"
          style="width: 100%; height: 200px; background: #0d2031"
        >
          <div class="row">
            <div class="col-3 text-h5 text-white q-py-md q-pl-xl">
              © ottomate ltd 2023
            </div>
            <div class="col-9 q-py-md text-white">
              <div class="text-h6 text-white">PRODUCTS</div>

              <q-list class="text-white">
                <q-item-label>OTTO-light</q-item-label>
                <q-item-label>Otto as a Service</q-item-label>
                <q-item-label>Ottito</q-item-label>
              </q-list>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
      };
    },
  },
  methods: {},
};
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
