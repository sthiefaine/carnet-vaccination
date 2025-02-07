<template>
  <div class="age-selector">
    <span class="age-text">J'ai</span>
    <div class="age-selector-container">
      <input type="number" min="0" max="100" />
      <button>Mois</button>
      <button>Ans</button>
      <button>Valider</button>
    </div>
  </div>
</template>

<style scoped>
.age-selector {
  display: flex;
  align-items: center;
  padding: 30px;
}

.age-text {
  margin-right: 1rem;
  font-size: 1.5rem;
}

.age-selector-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  width: max-content;
}
</style>
