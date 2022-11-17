import store from "@/store";
import { TYPES as SNACKBAR_MESSAGES_TYPES } from "@/store/modules/snackbar-messages/types";

export default (payload) =>
  store.dispatch(
    `snackbarMessages/${SNACKBAR_MESSAGES_TYPES.ADD_SNACKBAR_MESSAGE}`,
    payload
  );
