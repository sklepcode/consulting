import { v4 as generateId } from "uuid";

import { TYPES } from "@/store/modules/snackbar-messages/types";

const actions = {
  [TYPES.ADD_SNACKBAR_MESSAGE]: function ({ commit }, payload) {
    commit(TYPES.SET_SNACKBAR_MESSAGE, {
      ...payload,
      id: generateId(),
    });
  },
  [TYPES.DELETE_SNACKBAR_MESSAGE]: function ({ commit }, payload) {
    commit(TYPES.UNSET_SNACKBAR_MESSAGE, payload);
  },
};

export default actions;
