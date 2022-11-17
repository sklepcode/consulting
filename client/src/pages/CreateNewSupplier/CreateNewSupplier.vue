<template>
  <VContainer class="mt-12">
    <VRow align="center" justify="center">
      <VCol cols="12" md="6">
        <VForm
          ref="form"
          v-model="isFormValid"
          @submit.prevent="createSupplier"
        >
          <VCard flat>
            <VCardTitle> Создание нового поставщика </VCardTitle>
            <VCardSubtitle> Пожалуйста, заполните поля формы </VCardSubtitle>
            <VCardText>
              <VTextField
                v-model="supplier.companyName"
                class="rounded-0"
                :rules="[(v) => !!v || 'Название компании обязательно']"
                placeholder="Название компании"
                outlined
              />
              <VTextField
                v-model="supplier.contactName"
                class="rounded-0"
                :rules="[(v) => !!v || 'Контактное лицо обязательно']"
                placeholder="Контактное лицо"
                outlined
              />
              <VTextField
                v-model="supplier.phone"
                class="rounded-0"
                :rules="[(v) => !!v || 'Телефон обязателен']"
                placeholder="Телефон"
                outlined
              />
              <VTextField
                v-model="supplier.email"
                class="rounded-0"
                :rules="[(v) => !!v || 'Электронный адрес обязателен']"
                placeholder="Электронный адрес"
                outlined
              />
              <VCheckbox
                v-model="supplier.electronicDocumentManagement"
                label="Наличие ЭДО"
              />
            </VCardText>
            <VCardActions>
              <VBtn
                class="rounded-0 mr-3"
                color="primary"
                outlined
                @click="clearForm"
              >
                <VIcon class="mr-1">mdi-delete-variant</VIcon>
                Очистить
              </VBtn>
              <VBtn class="rounded-0" color="primary" type="submit" outlined>
                <VIcon class="mr-1">mdi-plus</VIcon>
                Создать
              </VBtn>
            </VCardActions>
          </VCard>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import suppliersApi from "@/api/suppliers";

export default {
  data: () => ({
    isFormValid: false,
    supplier: {
      companyName: "",
      contactName: "",
      phone: "",
      email: "",
      electronicDocumentManagement: true,
    },
  }),
  methods: {
    async createSupplier() {
      this.$refs.form.validate();
      if (this.isFormValid) {
        await suppliersApi.createSupplier(this.supplier);
        await this.$router.push("/suppliers");
      }
    },
    clearForm() {
      this.$refs.form.reset();
    },
  },
};
</script>
