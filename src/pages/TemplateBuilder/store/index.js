const initialState = {
  pageNum: 0,
};

const getters = {
  page: (state) => state.pageNum,
};

const actions = {
  advancePage({ commit, state }) {
    const { pageNum } = state;
    commit('SET_PAGE_NUM', pageNum + 1);
  },
};

const mutations = {
  SET_PAGE_NUM(state, page) {
    state.pageNum = page;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
