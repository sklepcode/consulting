<template>
  <VNavigationDrawer :value="isDrawerVisible" clipped app>
    <VListItem>
      <VListItemContent>
        <VListItemTitle class="text-h6"> Страницы </VListItemTitle>
        <VListItemSubtitle> Ниже находятся все страницы </VListItemSubtitle>
      </VListItemContent>
    </VListItem>
    <VDivider />
    <VList dense nav>
      <VListItem v-for="link in links" :key="link.value" :to="link.value" link>
        <VListItemIcon>
          <VIcon>{{ link.icon }}</VIcon>
        </VListItemIcon>
        <VListItemContent>
          <VListItemTitle>{{ link.text }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script>
import { links } from "./constants/links";

export default {
  data() {
    return {
      isDrawerVisible: true,
      links,
    };
  },
  methods: {
    toggleDrawerVisibility() {
      this.isDrawerVisible = !this.isDrawerVisible;
    },
  },
};
</script>
