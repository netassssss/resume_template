<template>
  <div class="overview-container" id="convertMe">
    <overview-header />
    <overview-content />
    <button id="ignorePDF" v-if="showBtn" @click="createPDF">Save</button>
  </div>
</template>

<script>
/* eslint-disable */
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import OverviewHeader from './components/header/OverviewHeader.vue';
import OverviewContent from './components/content/OverviewContent.vue';

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
  getStyleRuleValue(selector) {
    const sheets = document.styleSheets;
    console.log(sheets);
    for (let i = 0; i < sheets.length; i += 1) {
      const sheet = sheets[i];
      if( !sheet.cssRules ) { continue; }
      for (let j = 0; j < sheet.cssRules.length; j += 1) {
        const rule = sheet.cssRules[j];
        if (rule.selectorText && rule.selectorText.split(',').find(f => f.indexOf(selector) > -1)) {
          return Object.keys(rule.style)
            .filter(r => !isNaN(parseInt(r, 10)))
            .reduce((acc, key) => {
              const val = rule.style[key];
              const camelCase = val.split('-')[1] ?
                val.split('-')[1].slice(0, 1).toUpperCase() + val.split('-')[1].slice(1) : '';
              const value = val.split('-')[0] + camelCase;
              return { ...acc, [val]: rule.style[value] };
            }, {});
        }
      }
    }
    // return null;
  },
   getCanvas(element) {
    return html2canvas(element, {
      scale: 2,
      width: 1350,
      height: 1755,
      x: 0,
      y: 0,
      imageTimeout: 2000,
      removeContainer: true,
    });
  },
    createPDF () {
    this.showBtn = false;
      setTimeout(async () => {
        const source = window.document.getElementById('app');
        const canvas = await this.getCanvas(source);
        const img = canvas.toDataURL("image/png");
        let pdfName = 'test';
        const doc = new jsPDF({
          orientation: 'p',
          unit: 'pt',
          format: 'a4',
        });
        doc.addImage(img, 'JPEG', 0, 0, 608, 800, 'someAlias', 'FAST');
        doc.save(`${pdfName}.pdf`);
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
