<template>
  <div class="app">
    <Search/>
    <Uselist/>
  </div>
</template>

<script>
import Search from "./components/Search";
import Uselist from "./components/Uselist";

export default {
  name: "App",
  components: {
    Search,
    Uselist
  },
};
</script>

<style>
  .app {
    padding: 20px;
  }
</style>
