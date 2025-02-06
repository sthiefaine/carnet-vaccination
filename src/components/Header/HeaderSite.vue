<template>
  <header class="header">
    <span class="header-logo">💉</span>
    <h1 class="header-title">Carnet de Vaccination</h1>
  </header>
</template>

<style scoped>
.header {
  display: block;
  width: 100%;
  height: 80px;
  background-color: #42b983;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-logo {
  color: white;
  font-size: 1.1rem;
  margin-left: 1rem;
}

.header-title {
  flex-grow: 1;
  color: white;
  margin: 0;
  font-size: 1.1rem;
  margin-left: -1rem;
}
</style>
