<template>
  <h1>{{ header }}</h1>
  <input v-model="newItem" type="text" placeholder="Add a new item" />
  {{ newItem }}
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">{{ label }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const header = ref('Shopping Cart App')
const items = ref([
  { id: 1, label: '10 party hats' },
  { id: 2, label: '20 choclates' },
  { id: 3, label: 'one birthday cake' },
])

const newItem = ref('')
</script>

<style scoped></style>
