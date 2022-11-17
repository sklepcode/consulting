<template>
  <VContainer>
    <VForm>
      <VAutocomplete
        v-model="operation.clientId"
        :items="clients"
        placeholder="Клиент"
        item-text="companyName"
        item-value="id"
      />
      <VAutocomplete
        v-model="operation.supplierId"
        :items="suppliers"
        placeholder="Поставщик"
        item-text="companyName"
        item-value="id"
      />
      <VBtn color="primary" outlined @click="createOperation">Создать</VBtn>
    </VForm>
  </VContainer>
</template>

<script>
import clientsApi from "@/api/clients";
import suppliersApi from "@/api/suppliers";
import operationsApi from "@/api/operations";

export default {
  data: () => ({
    operation: {
      clientId: null,
      supplierId: null,
    },
    suppliers: [],
    clients: [],
  }),
  async created() {
    const { data: suppliers } = await suppliersApi.fetchSuppliers();
    const { data: clients } = await clientsApi.fetchClients();
    this.suppliers = suppliers;
    this.clients = clients;
  },
  methods: {
    async createOperation() {
      await operationsApi.createOperation(this.operation);
      await this.$router.push("/");
    },
  },
};
</script>
