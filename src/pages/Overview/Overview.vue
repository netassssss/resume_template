<template>
  <div class="overview-container" id="convertMe">
    <overview-header />
    <overview-content />
    <button id="ignorePDF" v-if="showBtn" @click="createPDF">Save</button>
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
        const pdfCreator = new JsPdfCreator(source, 'Neta_Seesam_test_2020');
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
  }
</style>
