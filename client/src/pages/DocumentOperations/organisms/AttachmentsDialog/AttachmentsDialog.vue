<template>
  <VDialog v-if="isVisible" width="1000" @close="$emit('close')">
    <VCarousel height="800">
      <VCarouselItem
        v-for="(attachment, index) in attachments"
        :key="index"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <object
          :data="`http://localhost:5000/attachments/${attachment}`"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </VCarouselItem>
    </VCarousel>
  </VDialog>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: () => false,
    },
    attachments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
