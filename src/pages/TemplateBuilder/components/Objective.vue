<template>
  <div class="objective-container" v-if="show">
    <label for="objective" class="objective-label">Describe yourself in few words</label>
    <textarea
      id="objective"
      rows="10"
      cols="50"
      class="objective-text-area"
      :value="objective"
      @input="updateObjectiveText"/>
  </div>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    objective: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    updateObjectiveText(event) {
      this.timer = setTimeout(() => {
        this.$emit('update', event.target.value);
      }, 300);
    },
  },
  destroyed() {
    if (this.timer) clearTimeout(this.timer);
  },
};
</script>

<style scoped lang="scss">
  @import "../../../style/colors";
  .objective-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    .objective-label {
      font-size: 22px;
      padding: 0 5px;
      color: $basic_header_color;
      height: 30px;
      line-height: 30px;
    }
    .objective-text-area {
      height: 100%;
      border: none;
      padding: 5px;
      margin: 0 10px 10px 10px;
      background-color: $basic_content;
      &:focus, &:active {
        border: 1px solid $basic_content;
      }
    }
  }
</style>
