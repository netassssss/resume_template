<template>
  <div class="overview-container" id="convertMe">
    <overview-header />
    <overview-content />
    <div class="save-pdf" v-if="showBtn">
      <button id="ignorePDF" @click="createPDF">Save</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import OverviewHeader from './components/header/OverviewHeader.vue';
import OverviewContent from './components/content/OverviewContent.vue';
import JsPdfCreator  from '../../utils/JsPDFHelper.js';

export default {
  components: {
    OverviewContent,
    OverviewHeader,
  },
  data() {
    return {
      showBtn: true,
    };
  },
  methods: {
    createPDF () {
    this.showBtn = false;
      setTimeout(async () => {
        const source = window.document.getElementById('app');
        const pdfCreator = new JsPdfCreator(source, 'Neta_Seesam_2021');
        await pdfCreator.savePdf();
        this.showBtn = true;
    }, 0);
    },
  },
};
</script>

<style scoped lang="scss">
  .overview-container {
    font-family: sans-serif;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 9rem 1fr 2rem;
    grid-template-areas:
      "overview-header-container"
      "overview-content-wrapper"
      "save-pdf";
  }
</style>
