<script setup lang="ts">
import HeaderSite from './components/Header/HeaderSite.vue'
import FooterSite from './components/Footer/FooterSite.vue'
import TableSite from './components/Table/TableSite.vue'
</script>

<template>
  <HeaderSite />

  <main class="main">
    <h2>Mes vaccinations</h2>

    <section>
      <h3>Liste des vaccins</h3>
      <TableSite />
    </section>
  </main>
  <FooterSite />
</template>

<style scoped>
.main {
  flex-grow: 1;
}
</style>
