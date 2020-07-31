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
    @import "../../../../style/colors";
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
