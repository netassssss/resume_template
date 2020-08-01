<template>
  <div class="skill-item-container">
    <div
      v-for="(skill, si) in skillsPretty"
      :key="si" class="skill-item-wrapper" :class="classWrapper">
      <div class="skill-item-title" :class="classHeader">{{ skill }}</div>
      <div class="skill-item">
        <div v-for="(num1, i1) in getSkillLevel(skill)" :key="createKey(i1)">
          <div class="circle"></div>
        </div>
        <div v-for="(num2, i2) in getReverseLevel(skill)" :key="createKey(i2)">
          <div class="circle-empty"></div>
        </div>
      </div>
      <div class="skill-level">{{ levelName[getSkillLevel(skill) - 1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Object,
      default: () => ({}),
    },
    classHeader: {
      type: String,
      default: '',
    },
    classWrapper: {
      type: String,
      default: '',
    },
  },
  computed: {
    skillsPretty() {
      return Object.keys(this.skills);
    },
  },
  data() {
    return {
      levelName: ['None', 'Fair', 'Good', 'Very Good', 'Excellent'],
    };
  },
  methods: {
    getSkillLevel(skill) {
      return this.skills[skill];
    },
    getReverseLevel(skill) {
      return 5 - this.skills[skill];
    },
    createKey(index) {
      return `${index}-${Math.ceil(Math.random() * 1000)}`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../../../style/colors";
  @mixin circle-main($bg) {
    background-color: $bg;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    margin: 0 2px;
  }
  .skill-item-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .skill-item-wrapper {
      display: flex;
      align-items: center;
      height: 30px;
      padding: 26px 5px 0 0;
      position: relative;
      .skill-item-title {
        width: 85px;
      }
      .skill-level {
        position: absolute;
        left: 95px;
        top: 30px;
        margin-top: 25px;
        font-size: 14px;
        font-weight: 200;
        font-style: italic;
      }
    }
    .skill-item {
      width: 130px;
      height: 30px;
      display: flex;
      align-items: center;
    }
    .circle {
      @include circle-main($basic_header_color);
    }
    .circle-empty {
      @include circle-main($basic_content);
      border: 1px solid $basic_header_color;
    }
  }
</style>
