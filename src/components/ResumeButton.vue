<template>
  <div class="resume-button-container">
    <button :class="`btn-${buttonClass}`" @click="onClick">{{ btnText }}</button>
  </div>
</template>

<script>

const buttonOptions = ['default', 'success', 'cancel'];

export default {
  props: {
    btnText: {
      type: String,
      default: '',
    },
    buttonStyle: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    buttonClass() {
      if (!this.buttonStyle) return 'default';
      if (buttonOptions.indexOf(this.buttonStyle) === -1) return 'default';

      return this.buttonStyle;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../style/colors";
  .resume-button-container {
    @mixin default-class() {
      cursor: pointer;
      padding: 5px;
      min-width: 100px;
    }
    .btn {
      &-default {
        @include default-class();
        background-color: $basic_header_color;
        color: $basic_header;
        border: none;
        border-radius: 4px;
        &:hover {
          background-color: $default_hover_color;
          color: $basic_header_color;
        }
      }
      &-cancel {
        @include default-class();
        color: $basic_header_color;
        border: 1px solid $basic_header_color;
        border-radius: 4px;
        &:hover {
          background-color: $default_hover_color;
          color: $basic_header_color;
        }
      }
    }
  }
</style>
