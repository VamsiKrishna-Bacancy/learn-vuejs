<template>
  <table class="table-fixed w-full border-collapse border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <!-- Render headers dynamically -->
        <th
          v-for="(header, index) in computedHeaders"
          :key="index"
          class="border border-gray-300 p-2"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, rowIndex) in data" :key="rowIndex">
        <!-- Render each value dynamically based on computed headers -->
        <td
          v-for="(header, colIndex) in computedHeaders"
          :key="colIndex"
          class="border border-gray-300 p-2"
        >
          {{ item[header.toLowerCase()] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'

// Get props
const props = defineProps({
  headers: {
    type: Array,
    required: false,
    default: () => [],
  },
  data: {
    type: Array,
    required: true,
  },
})

const computedHeaders = computed(() => {
  // Use provided headers if available
  if (props.headers.length > 0) {
    return props.headers
  }
  // Otherwise, get keys from the first item in data
  if (props.data.length > 0) {
    return Object.keys(props.data[0]).map(
      key => key.charAt(0).toUpperCase() + key.slice(1)
    )
  }
  return []
})
</script>

<style scoped>
/* Add additional styles if necessary */
</style>
