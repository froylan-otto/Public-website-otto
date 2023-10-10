<template>
  <!-- headedr -->

  <div
    class="q-pt-xl flex justify-between bg-secondary"
    style="width: 100%; height: auto"
  >
    <div class="column justify-center" style="width: 50%">
      <div class="text-h3 text-grey-9 q-ml-xl q-mb-md" style="width: 700px">
        Optimize your process, improve visualization through graphs and help you
        control your history.
      </div>
      <div class="text-grey-7 text-h6 q-ml-xl q-mb-md">
        The tool focused on the music industry
      </div>

      <q-btn
        size="md"
        label="Get it free"
        class="q-ml-xl q-px-md"
        color="light-blue-14"
        style="width: 160px"
      />
    </div>
    <div
      class="column justify-center items-center q-pb-xl"
      style="height: auto; width: 50%"
    >
      <q-img
        class="q-ma-xl self-start"
        src="~/assets/imagesHome/menFile.svg"
        style="width: 380px"
        shadow-6
      ></q-img>
      <q-img
        class="self-center q-mb-xl"
        src="~/assets/imagesHome/womanAndManFile.svg"
        style="width: 400px"
        shadow-6
      ></q-img>
    </div>
  </div>

  <!-- end header -->
  <!-- div de cards -->
  <div class="q-pa-xl column flex-center bg-white">
    <div class="text-h3 text-grey-9 text-center q-py-xl">Benefits</div>
    <div class="text-h5 text-grey-8" style="width: 780px">
      Variedad de veneficios al subir tu archivo y configurar tu tipo de cambio
      de moneda de una manerga agil y recibir el reporte via E-mail.
    </div>
    <!-- START cards benefit -->
    <div class="flex no-wrap justify-around q-py-xl" style="width: 60%">
      <!-- UPLOAD FILE CARD -->
      <q-card class="my-card-hm no-shadow">
        <div class="content-circle-imagen">
          <img src="~/assets/imagesHome/uploadFile.svg" class="image-circle" />
        </div>

        <q-card-section>
          <div class="text-h5 text-center text-grey-7">Upload files</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card-hm no-shadow">
        <div class="content-circle-imagen">
          <img src="~/assets/imagesHome/processFile.svg" class="image-circle" />
        </div>

        <q-card-section>
          <div class="text-h5 text-center text-grey-7">Process file</div>
        </q-card-section>
      </q-card>
      <q-card class="my-card-hm no-shadow">
        <div class="content-circle-imagen">
          <img src="~/assets/imagesHome/getReport.svg" class="image-circle" />
        </div>

        <q-card-section>
          <div class="text-h5 text-center text-grey-7">Get report</div>
        </q-card-section>
      </q-card>
    </div>
    <!-- END cards benefit -->
  </div>

  <q-separator class="q-ma-xl" />
  <!-- end div de cards -->
  <div class="row column flex-center">
    <h3 class="text-h3 text-grey-9 text-center" color="primary">TOOLS</h3>
    <div class="text-h5 text-grey-8" style="width: 780px">
      Variedad de veneficios al subir tu archivo y configurar tu tipo de cambio
      de moneda de una manerga agil y recibir el reporte via E-mail
    </div>
  </div>
  <div class="row">
    <!-- START SECTION N -->

    <div class="flex flex-center q-py-xl" style="width: 100%">
      <!-- solo ocuparan un 80% -->
      <div class="column flex-center" style="width: 50%">
        <div class="text-h4 text-bold text-light-blue-14">Dashboard</div>
        <ul class="text-grey-8">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <!-- div imagen -->
      <div style="width: 50%">
        <q-img
          src="~/assets/imagesHome/homeDashboard.png"
          style="height: 100%; width: 600px; border-radius: 5px"
        ></q-img>
      </div>
      <!-- end div imagen -->
    </div>
    <!-- END SECTION N -->
    <!-- START SECTION N -->
    <div class="flex flex-center q-my-xl" style="width: 100%">
      <!-- div imagen -->
      <div style="width: 50%">
        <q-img
          src="~/assets/imagesHome/homeDashboard.png"
          style="height: 100%; width: 600px; border-radius: 5px"
        ></q-img>
      </div>
      <!-- end div imagen -->
      <!-- solo ocuparan un 80% -->
      <div class="" style="width: 20%">
        <div class="text-h4 text-bold text-light-blue-14">Files</div>
        <ul class="text-grey-8">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </div>
    <!-- END SECTION N -->
  </div>

  <div class="row column flex-center bg-primary">
    <h3 class="text-h3 text-grey-4 text-center" color="primary">Plans</h3>
    <div class="text-h5 text-grey-5" style="width: 780px">
      Variedad de veneficios al subir tu archivo y configurar tu tipo de cambio
      de moneda de una manerga agil y recibir el reporte via E-mail
    </div>
  </div>
  <div class="q-pa-lg row flex flex-center q-gutter-md bg-primary">
    <!-- CARD BASIc -->
    <q-card class="cardPlan no-shadow bg-primary">
      <q-card-section class="q-ma-sm">
        <div class="text-h5 text-grey-4">Basic Plan: Cat</div>
      </q-card-section>
      <q-separator color="grey-7" class="q-ma-sm" />
      <q-card-section>
        <q-list>
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption
                >Feature 1.</q-item-label
              >
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 2</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 3</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 3</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
        </q-list>
      </q-card-section>

      <q-card-actions class="absolute-bottom" vertical>
        <q-btn class="bg-light-blue-14 text-white" flat> Select </q-btn>
      </q-card-actions>
    </q-card>
    <!-- CARD mid -->
    <q-card class="cardPlan no-shadow bg-primary">
      <q-card-section class="q-ma-sm">
        <div class="text-h5 text-grey-4">Mid Plan: Chita</div>
      </q-card-section>
      <q-separator color="grey-7" class="q-ma-sm" />
      <q-card-section>
        <q-list>
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption
                >Feature 1.</q-item-label
              >
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 2</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 3</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 3</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
        </q-list>
      </q-card-section>

      <q-card-actions class="absolute-bottom" vertical>
        <q-btn class="bg-light-blue-14 text-white" flat> Select </q-btn>
      </q-card-actions>
    </q-card>
    <!-- CARD Top -->
    <q-card class="cardPlan no-shadow bg-primary">
      <q-card-section class="q-ma-sm">
        <div class="text-h5 text-grey-4">Top Plan: Tiger</div>
      </q-card-section>
      <q-separator color="grey-7" class="q-ma-sm" />
      <q-card-section>
        <q-list>
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption
                >Feature 1.</q-item-label
              >
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 1</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 2</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
          <!-- start item -->
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="white" name="check" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-white">Feature 3</q-item-label>
              <q-item-label class="text-grey-6" caption>Feature 3</q-item-label>
            </q-item-section>
          </q-item>
          <!-- end item -->
        </q-list>
      </q-card-section>

      <q-card-actions class="absolute-bottom" vertical>
        <q-btn class="bg-light-blue-14 text-white" flat> Select </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <!-- Start Footer information -->
  <div class="bg-grey-3 col q-pt-md" style="width: 100%; height: 200px">
    <div class="row">
      <div class="col-2 text-h5 text-bold text-grey-7 q-py-md q-pl-xl">
        OTTOMATE
      </div>
      <div class="col-10 q-py-md">
        <div class="text-h6 text-grey-9">PRODUCTOS</div>
        <q-list class="text-grey-7">
          <q-item-label>OTTO-light</q-item-label>
          <q-item-label>Otto as a Service</q-item-label>
          <q-item-label>Ottito</q-item-label>
        </q-list>
      </div>
    </div>
  </div>
  <!-- End Footer information -->
</template>
<script>
export default {
  name: "tourPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: false,
      working: false,
      btnAction: false,
      alert: "",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
  methods: {},
  mounted() {
    //console.log("Ruta: " + this.$route.name);
    //console.log("Pagina " + this.$route.query.page);
    //console.log("ESTOY EN EL COMPONENTE DE TOUR");
  },
};
</script>
<style lang="sass" scope>
.my-card-hm
  width: 100%
  max-width: 250px
.content-circle-imagen
  background-color: $primary
  width: 200px
  height: 200px
  border-radius: 60% !important
  display: flex
  margin: auto

.image-circle
  width: 120px
  height: 120px
  margin: auto
.cardPlan
  border: 2px solid #FFFF
  border-radius: 10px
  width: 18%
  height: 500px
</style>
