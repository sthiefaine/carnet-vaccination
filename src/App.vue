<script setup lang="ts">
import HeaderSite from './components/Header/HeaderSite.vue'
</script>

<template>
  <HeaderSite />

  <main class="main">
    <h2>Mes vaccinations</h2>

    <section>
      <h3>Liste des vaccins</h3>
    </section>
  </main>
</template>

<style scoped>
.main {
  flex-grow: 1;
}
</style>
