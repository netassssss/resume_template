<template>
  <div class="overview-header-container">
    <overview-header-left />
    <overview-header-right />
  </div>
</template>

<script>
import OverviewHeaderLeft from './OverviewHeaderLeft.vue';
import OverviewHeaderRight from './OverviewHeaderRight.vue';

export default {
  components: {
    OverviewHeaderLeft,
    OverviewHeaderRight,
  },
};
</script>

<style scoped lang="scss">
  .overview-header-container {
    grid-area: overview-header-container;
    @import "../../../../style/colors";
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 32rem;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header-left-container header-container-right";
  }
</style>
