<template>
  <AppHeader fixed>
    <SidebarToggler class="d-lg-none" display="md" mobile />
    <b-link class="navbar-brand" to="#"></b-link>
    <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen="true" />
    <b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3" to="/dashboard"><h4>Smart Farm</h4></b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
    </b-navbar-nav>
    <!--<AsideToggler class="d-lg-none" mobile />-->
  </AppHeader>
</template>
<script>
import { Header as AppHeader, SidebarToggler } from "@coreui/vue";

export default {
  name: "DefaultHeader",
  components: {
    AppHeader,
    SidebarToggler
  },
};
</script>
