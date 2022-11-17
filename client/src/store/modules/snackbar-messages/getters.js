import { TYPES } from "@/store/modules/snackbar-messages/types";

const getters = {
  [TYPES.GET_SNACKBAR_MESSAGES](state) {
    return state.messages;
  },
};

export default getters;
