<template>
  <VApp>
    <BaseNavigationDrawer ref="baseNavigationDrawer" />
    <VAppBar color="primary" clipped-left app>
      <VAppBarNavIcon class="white--text" @click="toggleDrawerVisibility" />
      <VAppBarTitle class="white--text text-center">
        Приложение для долбёжки поставщиков
      </VAppBarTitle>
    </VAppBar>
    <VMain>
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>
    <BaseSnackbar />
  </VApp>
</template>

<script>
import BaseNavigationDrawer from "@/components/layout/BaseNavigationDrawer/BaseNavigationDrawer";
import BaseSnackbar from "@/components/UI/BaseSnackbarContainer/BaseSnackbarContainer";

export default {
  components: {
    BaseNavigationDrawer,
    BaseSnackbar,
  },
  methods: {
    toggleDrawerVisibility() {
      this.$refs.baseNavigationDrawer.toggleDrawerVisibility();
    },
  },
};
</script>
