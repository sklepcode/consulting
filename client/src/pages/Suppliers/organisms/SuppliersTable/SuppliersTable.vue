<template>
  <VDataTable
    class="elevation-1 suppliers-table"
    :headers="headers"
    :loading="loading.suppliers"
    :items="suppliers"
  >
    <template v-slot:top>
      <VSheet class="d-flex align-center" color="white" height="70">
        <div
          class="text-h6 ma-4 d-flex justify-space-between suppliers-table__top-bar"
        >
          <div class="d-flex align-center">Список поставщиков</div>
          <BaseIconButton
            icon="mdi-plus"
            tooltipText="Добавить поставщика"
            @click="$router.push('/create-new-supplier')"
          />
        </div>
      </VSheet>
    </template>
    <template #[`item.electronicDocumentManagement`]="{ value }">
      <VIcon :color="value ? 'green' : 'red'">
        {{ getElectronicDocumentManagementIcon(value) }}
      </VIcon>
    </template>
  </VDataTable>
</template>

<script>
import BaseIconButton from "@/components/UI/BaseIconButton/BaseIconButton";
import suppliersApi from "@/api/suppliers";
import { headers } from "./constants/headers";

export default {
  components: {
    BaseIconButton,
  },
  data() {
    return {
      headers,
      suppliers: [],
      loading: {
        suppliers: false,
      },
    };
  },
  async created() {
    await this.fetchSuppliers();
  },
  methods: {
    async fetchSuppliers() {
      try {
        this.loading.suppliers = true;
        const { data } = await suppliersApi.fetchSuppliers();
        this.suppliers = data;
      } catch (error) {
        //
      } finally {
        this.loading.suppliers = false;
      }
    },
    getElectronicDocumentManagementIcon(value) {
      return value
        ? "mdi-checkbox-marked-circle-outline"
        : "mdi-close-circle-outline";
    },
  },
};
</script>

<style lang="scss">
.suppliers-table {
  &__top-bar {
    width: 100%;
  }
}
</style>
