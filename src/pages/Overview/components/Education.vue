<template>
  <div class="education-container">
    <div class="education-header">
      <img :src="education"/>
      <div>Education</div>
    </div>
    <div style="width: 100%; display: flex; flex-direction: column; justify-content: center;">
      <div class="education-inner-header">{{ educationTitle }}</div>
      <div class="education-inner-subtitle">{{ educationInstitution }}</div>
    </div>
    <div class="education-content">{{ educationContent }}</div>
  </div>
</template>

<script>
import education from '../../../assets/education.png';
import { education as educationContent, educationInstitution, educationTitle } from '../consts';

export default {
  data() {
    return {
      education,
      educationTitle,
      educationContent,
      educationInstitution,
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../../../style/colors";
  .education-container {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    .education-header {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: $basic_header_color;
      padding-bottom: 20px;
      img {
        width: 20px;
        height: 20px;
        color: $basic_header_color;
      }
      > div {
        padding-left: 10px;
      }
    }
    .education-content {
      font-size: 18px;
      font-weight: 200;
    }
    .education-inner-header {
      color: #000;
      font-weight: bold;
      font-size: 20px;
    }
    .education-inner-subtitle {
      font-size: 14px;
      font-weight: 300;
      font-style: italic;
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
</style>
