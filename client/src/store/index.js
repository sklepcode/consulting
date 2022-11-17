import Vue from "vue";
import Vuex from "vuex";

import snackbarMessages from "./modules/snackbar-messages";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbarMessages,
  },
});
