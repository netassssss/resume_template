<template>
  <div class="languages-container">
    <div class="languages-header">
      <img :src="language"/>
      <div>Languages</div>
    </div>
    <language-item
      :class-wrapper="$style['class-wrapper']"
      :class-header="$style['class-header']"
      :skills="languagesContent"/>
  </div>
</template>

<script>
import language from '../../../assets/language.png';
import LanguageItem from './skills/SkillItem.vue';
import { languages as languagesContent } from '../consts';

export default {
  components: {
    LanguageItem,
  },
  data() {
    return {
      language,
      languagesContent,
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../../../style/colors";
  .languages-container {
    width: 100%;
    height: 100%;
    margin-top: 64px;
    padding-left: 1rem;
    .languages-header {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
      color: $basic_header_color;
      img {
        width: 20px;
        height: 20px;
        color: $basic_header_color;
      }
      > div {
        padding-left: 10px;
      }
    }
  }
</style>
<style module lang="scss">
  .class-header {
    width: 65px !important;
  }
  .class-wrapper {
    padding-right: 64px !important;
    &:nth-child(even) {
      padding-left: 0 !important;
    }
  }
</style>
