<template>
  <div class="skills-container">
    <div class="separate-line"></div>
    <div class="skills-header">
      <img :src="skills" class="skills-icon"/>
      <div class="skills-title">Skills</div>
    </div>
    <skill-item :skills="skillObj"/>
  </div>
</template>

<script>
import skills from '../../../../assets/skills.png';
import { skills as skillObj } from '../../consts';
import SkillItem from './SkillItem.vue';

export default {
  components: {
    SkillItem,
  },
  data() {
    return {
      skills,
      skillObj,
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../../../../style/colors";
  .skills-container {
    width: 100%;
    margin-top: -1px;
    padding-left: 1rem;
    .separate-line {
      background: $basic_header_color;
      width: calc(100% + 1rem);
      height: 1px;
      margin-left: -1rem;
    }
    .skills-header {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      padding-top: 24px;
      .skills-icon {
        width: 20px;
        height: 20px;
      }
      .skills-title {
        padding-left: 10px;
        font-size: 20px;
        font-weight: 500;
        color: $basic_header_color;
      }
    }
  }
</style>
