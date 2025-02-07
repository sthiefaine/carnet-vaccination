<script setup lang="ts">
import { datesList, vaccines } from './TableSite.data'
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Age approprié</th>
          <th v-for="date in datesList" :key="date">{{ date }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vaccine in vaccines" :key="vaccine.name">
          <td class="vaccin-name" :style="{ backgroundColor: vaccine.color }">
            {{ vaccine.name }}
          </td>
          <td
            v-for="date in datesList"
            :key="date"
            :style="{
              backgroundColor:
                vaccine?.sepcialRecommandedDosesDates && date === '65 ans et +'
                  ? vaccine.color
                  : vaccine.recomandedDosesDates.includes(date)
                    ? vaccine.color
                    : 'transparent',
            }"
          >
            {{
              vaccine?.sepcialRecommandedDosesDates && date === '65 ans et +'
                ? vaccine.sepcialRecommandedDosesDates
                : ''
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  max-width: 100vw;
  overflow-y: auto;
  overflow-x: auto;
}

.table {
  min-width: 100%;
  border-collapse: collapse;
  color: #000;
}

.vaccin-name {
  text-transform: capitalize;
  width: max-content;
}

th,
td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
  text-wrap: nowrap;
  min-width: 50px;
}

th:first-of-type {
  position: sticky;
  left: -1px;
}

th {
  font-size: medium;
  font-weight: normal;
  color: black;
  background-color: #f4f4f4;
}

td:first-of-type {
  position: sticky;
  left: -1px;
}

td {
  font-size: small;
}

thead > tr > th:first-of-type {
  height: 55px;
  z-index: 2;
}

thead > tr > th:not(:first-of-type) {
  transform: rotate(-45deg);
  white-space: normal;
  text-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
}

tr {
  color: white;
  background-color: #f9f9f9;
  height: 60px;
}

.recomanded-dose {
  display: inline-block;
  width: 20px;
  height: 15px;
}
</style>
