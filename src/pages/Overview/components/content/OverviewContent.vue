<template>
  <div class="overview-content-wrapper">
    <div
      class="overview-content-container">
      <overview-obective />
      <div class="experience-cotnainer">
        <img :src="experience" class="experience-icon"/>
        <div>Experience</div>
      </div>
      <div v-for="(contentItem, index) in workResume"
           :key="index">
        <content-item
          :company="contentItem.company"
          :length="contentItem.length"
          :header="contentItem.header"
          :content="contentItem.content"/>
      </div>
      <overview-education />
    </div>
    <div class="overview-right-side">
      <overview-skills />
      <overview-languages />
    </div>
  </div>
</template>

<script>
import ContentItem from './ContentItem.vue';
import OverviewObective from '../OverviewObjective.vue';
import { workResume } from '../../consts';
import experience from '../../../../assets/experience.png';
import OverviewSkills from '../skills/OverviewSkills.vue';
import OverviewEducation from '../Education.vue';
import OverviewLanguages from '../Languages.vue';

export default {
  components: {
    ContentItem,
    OverviewSkills,
    OverviewObective,
    OverviewEducation,
    OverviewLanguages,
  },
  data() {
    return {
      workResume,
      experience,
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../../../../style/colors";
  .overview-content-wrapper {
    grid-area: overview-content-wrapper;
    display: grid;
    grid-template-columns: 1fr 32rem;
    grid-template-rows: 1fr;
    grid-template-areas:
      "overview-content-container overview-right-side";
    width: 100%;
    height: 100%;
  }
  .overview-content-container {
    grid-area: overview-content-container;
    height: 100%;
    background-color: $basic_content;
    padding-left: 1rem;
    padding-top: 1rem;
    .experience-cotnainer {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: $basic_header_color;
      padding-bottom: 20px;
      .experience-icon {
        width: 20px;
        height: 20px;
        padding-right: 10px;
      }
    }
  }
  .overview-right-side {
    grid-area: overview-right-side;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
