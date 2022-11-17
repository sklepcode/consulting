<template>
  <VDataTable
    class="elevation-1"
    v-model="selectedOperations"
    :headers="headers"
    :items="operations"
    :loading="loading.operations"
    show-select
    @input="onOperationsSelect"
  >
    <template v-slot:top>
      <VSlideYTransition hide-on-leave>
        <VSheet
          v-if="isActionsBarVisible"
          class="d-flex align-center"
          color="primary"
          height="70"
        >
          <div class="text-h6 ma-4 white--text">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex">
                <div class="d-flex align-center">
                  Операций выбрано: {{ selectedOperations.length }}
                </div>
                <div class="ml-5">
                  <BaseIconButton
                    icon="mdi-send"
                    color="white"
                    tooltipText="Отправить письмо"
                    @click="onMessageSend"
                  />
                  <BaseIconButton
                    icon="mdi-delete-outline"
                    color="white"
                    tooltipText="Удалить операцию"
                    @click="onOperationDelete"
                  />
                </div>
              </div>
              <BaseIconButton
                icon="mdi-close"
                color="white"
                tooltipText="Закрыть панель"
                @click="onActionsBarHide"
              />
            </div>
          </div>
        </VSheet>
      </VSlideYTransition>
      <VSheet
        v-if="!isActionsBarVisible"
        class="d-flex align-center"
        color="white"
        height="70"
      >
        <div class="text-h6 ma-4">
          <div class="d-flex align-center">Операции по документам</div>
        </div>
      </VSheet>
    </template>
    <template #[`item.emailStatus`]="{ value, item }">
      <VProgressCircular
        v-if="loading.emails"
        size="24"
        color="primary"
        indeterminate
      />
      <VChip v-else :color="getStatusColor(value)" dark small>
        {{ getStatus(item) }}
      </VChip>
    </template>
    <template #[`item.client.electronicDocumentManagement`]="{ value }">
      <VIcon :color="value ? 'green' : 'red'">
        {{ getElectronicDocumentManagementIcon(value) }}
      </VIcon>
    </template>
  </VDataTable>
</template>

<script>
import emailsApi from "@/api/emails";
import operationsApi from "@/api/operations";
import { emailStatusMap } from "@/constants/emailStatuses";
import BaseIconButton from "@/components/UI/BaseIconButton/BaseIconButton";
import showSnackbar from "@/utils/showSnackbar";
import { headers } from "./constants/headers";

export default {
  components: {
    BaseIconButton,
  },
  data: () => ({
    headers,
    operations: [],
    selectedOperations: [],
    emails: [],
    loading: {
      operations: false,
      emails: false,
    },
    isAttachmentsDialogVisible: false,
  }),
  async created() {
    await this.fetchOperations();
    await this.fetchEmails();
  },
  computed: {
    isActionsBarVisible() {
      return this.selectedOperations.length;
    },
  },
  methods: {
    getStatusColor(status) {
      return emailStatusMap[status].color;
    },
    getStatus(item) {
      return emailStatusMap[item.emailStatus].translation;
    },
    async fetchOperations() {
      try {
        this.loading.operations = true;
        const { data } = await operationsApi.fetchOperations();
        this.operations = data;
      } catch (error) {
        //
      } finally {
        this.loading.operations = false;
      }
    },
    async fetchEmails() {
      try {
        this.loading.emails = true;
        const { data } = await emailsApi.fetchEmails();
        this.emails = data;
      } catch (error) {
        //
      } finally {
        this.loading.emails = false;
      }
    },
    onOperationsSelect(operations) {
      this.selectedOperations = operations;
    },
    onActionsBarHide() {
      this.selectedOperations = [];
    },
    getElectronicDocumentManagementIcon(value) {
      return value
        ? "mdi-checkbox-marked-circle-outline"
        : "mdi-close-circle-outline";
    },
    onMessageSend() {
      const text =
        this.selectedOperations.length === 1
          ? "Письмо успешно отправлено"
          : "Письма успешно отправлены";
      showSnackbar({
        color: "success",
        text,
      });
      this.selectedOperations = [];
    },
    onOperationDelete() {
      const text =
        this.selectedOperations.length === 1
          ? "Операция успешно удалена"
          : "Операции успешно удалены";
      showSnackbar({
        color: "success",
        text,
      });
      this.selectedOperations = [];
    },
  },
};
</script>
