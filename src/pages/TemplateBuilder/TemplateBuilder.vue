<template>
  <div>
    <resume-modal :show="showModal" @close="closeModal">
      <template slot="header">{{ modalHeader[page] }}</template>
      <template slot="body">
        <objective @advancePage="advancePage" :show="page === 0"/>
      </template>
    </resume-modal>
    <lazy-hydrate when-visible v-if="!showModal">
      <resume-button btnText="Start the progress!" @click="openModal"/>
    </lazy-hydrate>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LazyHydrate from 'vue-lazy-hydration';
import ResumeModal from '../../components/ResumeModal.vue';
import { modalHeader, STORE_NAME } from './store/const';
import { advancePage } from './store/actions';

export default {
  components: {
    LazyHydrate,
    ResumeModal,
    ResumeButton: () => import('../../components/ResumeButton.vue'),

    // parts
    Objective: () => import('./components/Objective.vue'),
  },
  computed: {
    ...mapGetters({
      page: `${STORE_NAME}/page`,
    }),
  },
  data() {
    return {
      showModal: false,
      modalHeader,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    advancePage() {
      this.$store.dispatch(advancePage);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
