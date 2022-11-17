import { TYPES } from "@/store/modules/snackbar-messages/types";

const mutations = {
  [TYPES.SET_SNACKBAR_MESSAGE](state, payload) {
    state.messages = state.messages.concat(payload);
  },
  [TYPES.UNSET_SNACKBAR_MESSAGE](state, targetId) {
    state.messages = state.messages.filter(
      (message) => message.id !== targetId
    );
  },
};

export default mutations;
