<template>
  <VContainer>
    <BaseSnackbar
      v-for="(message, index) in messages"
      :key="message.id"
      :id="message.id"
      :text="message.text"
      :color="message.color"
      :index="index"
    />
  </VContainer>
</template>

<script>
import { mapGetters } from "vuex";

import { TYPES as SNACKBAR_MESSAGES_TYPES } from "@/store/modules/snackbar-messages/types";
import BaseSnackbar from "./molecules/BaseSnackbar";

export default {
  components: {
    BaseSnackbar,
  },
  data: () => ({ isDrawerVisible: null }),
  computed: {
    ...mapGetters("snackbarMessages", {
      messages: SNACKBAR_MESSAGES_TYPES.GET_SNACKBAR_MESSAGES,
    }),
  },
};
</script>
