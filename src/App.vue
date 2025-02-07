<script setup lang="ts">
import HeaderSite from './components/Header/HeaderSite.vue'
import FooterSite from './components/Footer/FooterSite.vue'
import TableSite from './components/Table/TableSite.vue'
import AgeSelector from './components/AgeSelector/AgeSelector.vue'
</script>

<template>
  <HeaderSite />

  <main class="main">
    <AgeSelector />

    <section>
      <TableSite />
    </section>
  </main>
  <FooterSite />
</template>

<style scoped>
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
