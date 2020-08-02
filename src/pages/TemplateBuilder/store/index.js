const initialState = {
  pageNum: 0,
  objective: '',
};

const getters = {
  page: (state) => state.pageNum,
  objective: (state) => state.objective,
};

const actions = {
  advancePage({ commit, state }) {
    const { pageNum } = state;
    commit('SET_PAGE_NUM', pageNum + 1);
  },
  reducePage({ commit, state }) {
    const { pageNum } = state;
    commit('SET_PAGE_NUM', pageNum - 1);
  },
  resetPage({ commit }) {
    commit('SET_PAGE_NUM', 0);
  },
  updateObjective({ commit }, { text } = { text: '' }) {
    commit('SET_OBJECTIVE_TEXT', text);
  },
};

const mutations = {
  SET_PAGE_NUM(state, page) {
    state.pageNum = page;
  },
  SET_OBJECTIVE_TEXT(state, text) {
    state.objective = text;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
