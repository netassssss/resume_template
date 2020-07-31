<template>
  <div class="content-item-container">
    <div class="content-header">{{ header }}
      <div class="content-header-small">{{ company }}, {{ length }}</div>
    </div>
    <div class="content-inner">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    length: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
  .content-item-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 24px;
    .content-header {
      font-weight: bold;
      font-size: 20px;
      padding-bottom: 10px;
      .content-header-small {
        font-size: 14px;
        font-weight: 300;
        font-style: italic;
        padding-top: 5px;
      }
    }
    .content-inner {
      font-size: 18px;
      font-weight: 200;
    }
  }
</style>
