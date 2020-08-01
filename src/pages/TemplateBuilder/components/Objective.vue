<template>
  <div class="objective-container" v-if="show">
    <label for="objective" class="objective-label">Describe yourself in few words</label>
    <textarea id="objective" rows="10" cols="50" class="objective-text-area"/>
    <lazy-hydrate when-visible>
      <div class="objective-actions">
        <resume-button btn-text="Back" button-style="cancel"/>
        <resume-button btn-text="Continue" @click="advancePage"/>
      </div>
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
    ResumeButton: () => import('../../../components/ResumeButton.vue'),
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    advancePage() {
      this.$emit('advancePage');
    },
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
      padding: 5px;
      color: $basic_header_color;
      border-bottom: 1px solid $basic_header_color;
    }
    .objective-text-area {
      height: 100%;
      border: none;
      padding: 5px;
      margin: 10px;
      &:focus, &:active {
        border: 1px solid $basic_content;
      }
    }
    .objective-actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
    }
  }
</style>
