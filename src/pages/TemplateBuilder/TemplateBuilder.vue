<template>
  <div>
    <resume-modal :show="showModal" @close="closeModal">
      <template slot="header">{{ modalHeader[page] }}</template>
      <template slot="body">
        <objective
          @advancePage="advancePage"
          :show="page === 0"
          @update="updateObjective"
          :objective="objective"/>
      </template>
      <template slot="actions">
        <lazy-hydrate when-visible>
          <div class="modal-actions" :class="{'advance-btn' : page === 0}">
            <resume-button
              btn-text="Back"
              @click="reducePage"
              button-style="cancel"
              v-if="page > 0"/>
            <resume-button
              btn-text="Continue"
              @click="advancePage"/>
          </div>
        </lazy-hydrate>
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
import {
  advancePage,
  resetPage,
  reducePage,
  updateObjective,
} from './store/actions';

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
      objective: `${STORE_NAME}/objective`,
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
      this.$store.dispatch(resetPage);
    },
    advancePage() {
      this.$store.dispatch(advancePage);
    },
    reducePage() {
      this.$store.dispatch(reducePage);
    },
    updateObjective(text) {
      this.$store.dispatch(updateObjective, { text });
    },
  },
};
</script>

<style scoped lang="scss">
  .modal-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }
  .advance-btn {
    justify-content: flex-end;
  }
</style>
