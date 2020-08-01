<template>
  <div class="resume-modal-container"
       v-if="show"
       v-on-clickaway="closeModal">
    <div v-if="$slots['header']" class="modal-header">
      <slot name="header"/>
    </div>
    <div v-if="$slots['body']" class="modal-body">
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../style/colors";
  .resume-modal-container {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 15%;
    left: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: $basic_content;
    box-shadow: 0 0 2px 2px rgba(230, 230, 230, 0.8);
    border-radius: 4px;
    z-index: 2;

    .modal-header {
      height: 60px;
      width: 100%;
      background-color: #fff;
      color: $basic_header_color;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid $basic_header_color;
    }
    .modal-body {
      width: 100%;
      height: calc(100% - 30px);
    }
  }
</style>
