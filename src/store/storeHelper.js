import Vuex from 'vuex';
import sessions from './index';
import resumeBuilder from '../pages/TemplateBuilder/store';

const debug = process.env.NODE_ENV !== 'production';

let store;
export const generateStore = () => {
  if (store) return store;
  store = new Vuex.Store({
    modules: {
      sessions,
      resumeBuilder,
    },
    strict: debug,
  });
  return store;
};

export default {
  generateStore,
};
