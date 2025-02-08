<script setup lang="ts">
import HeaderSite from './components/Header/HeaderSite.vue'
import FooterSite from './components/Footer/FooterSite.vue'
import TableSite from './components/Table/TableSite.vue'
import AgeSelector from './components/AgeSelector/AgeSelector.vue'
import ModalSite from './components/Modal/ModalSite.vue'

import { useModalStore } from './stores/modalStore'

const modalStore = useModalStore()
</script>

<template>
  <HeaderSite />

  <main class="main">
    <AgeSelector />

    <section>
      <h2 class="section-title">Ajouter mes vaccinations</h2>
      <TableSite />
    </section>
  </main>
  <FooterSite />
  <ModalSite v-if="modalStore.modalIsOpen" />
</template>

<style scoped>
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 1.2rem;
  margin-left: 1rem;
}
</style>
