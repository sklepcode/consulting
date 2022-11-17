<template>
  <VSnackbar
    v-model="isVisible"
    :style="`margin-bottom: ${index * 60}px`"
    :timeout="5000"
    :color="color"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <VBtn v-bind="attrs" color="white" icon @click="isVisible = false">
        <VIcon small>mdi-close</VIcon>
      </VBtn>
    </template>
  </VSnackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { TYPES as SNACKBAR_MESSAGES_TYPES } from "@/store/modules/snackbar-messages/types";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    isVisible: false,
  }),
  watch: {
    id: {
      handler() {
        this.isVisible = true;
      },
      immediate: true,
    },
    isVisible(value) {
      if (!value) {
        this.deleteSnackbarMessage(this.id);
      }
    },
  },
  computed: {
    ...mapGetters("snackbarMessages", {
      messages: SNACKBAR_MESSAGES_TYPES.GET_SNACKBAR_MESSAGES,
    }),
  },
  methods: {
    ...mapActions("snackbarMessages", {
      deleteSnackbarMessage: SNACKBAR_MESSAGES_TYPES.DELETE_SNACKBAR_MESSAGE,
    }),
  },
};
</script>
