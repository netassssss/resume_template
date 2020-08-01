<template>
  <div class="resume-modal-container"
       v-if="show">
    <img :src="times" class="modal-times" @click="closeModal"/>
    <div v-if="$slots['header']" class="modal-header">
      <slot name="header"/>
    </div>
    <div v-if="$slots['body']" class="modal-body">
      <slot name="body"/>
    </div>
    <div v-if="$slots['actions']" class="modal-actions">
      <slot name="actions"/>
    </div>
  </div>
</template>

<script>

import times from '../assets/times.png';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      times,
    };
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

    background-color: #fff;
    box-shadow: 0 0 2px 2px rgba(230, 230, 230, 0.8);
    border-radius: 4px;
    z-index: 2;

    .modal-times {
      position: absolute;
      width: 20px;
      height: 20px;
      right: 20px;
      top: 20px;
      cursor: pointer;
      color: $basic_header_color;
    }
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
    .modal-actions {
      width: 100%;
      height: 30px;
    }
  }
</style>
