<template>
  <VContainer>
    <DocumentOperationsTable />
    <AttachmentsDialog
      :isVisible="isAttachmentsDialogVisible"
      :attachments="[]"
      @close="isAttachmentsDialogVisible = false"
    />
  </VContainer>
</template>

<script>
import DocumentOperationsTable from "./organisms/DocumentOperationsTable/DocumentOperationsTable";
import AttachmentsDialog from "./organisms/AttachmentsDialog/AttachmentsDialog";

export default {
  components: {
    DocumentOperationsTable,
    AttachmentsDialog,
  },
  data: () => ({
    isAttachmentsDialogVisible: false,
  }),
};
</script>
