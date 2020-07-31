<template>
  <div class="objective-container">
    {{objective}}
  </div>
</template>

<script>
import { objective } from '../consts';

export default {
  data() {
    return {
      objective,
    };
  },
};
</script>

<style scoped lang="scss">
  .objective-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 20px;
  }
</style>
