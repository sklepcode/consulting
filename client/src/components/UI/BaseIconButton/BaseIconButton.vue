<template>
  <VTooltip top>
    <template v-slot:activator="{ on }">
      <VBtn v-on="on" :color="color" icon @click="$emit('click')">
        <VIcon>{{ icon }}</VIcon>
      </VBtn>
    </template>
    <span>{{ tooltipText }}</span>
  </VTooltip>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => "primary",
    },
    icon: {
      type: String,
      required: true,
    },
    tooltipText: {
      type: String,
      required: true,
    },
  },
};
</script>
