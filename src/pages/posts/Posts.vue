<template>
  <div>
    <MyButton to="/create-post"> Create Post </MyButton>
    <Table :data="result" :headers="['title', 'body', 'status']" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import MyButton from '@/components/Button.vue'
import axios from 'axios'

// Fetch data from the API
const result = ref([])
getAllPosts()
function getAllPosts() {
  axios
    .get('http://api.test/api/all_posts')
    .then((response) => {
      console.log()
      // Handle the API response data and assign it to 'result'
      result.value = response.data.message
      result.value = result.value.map((item) => ({
        ...item,
        status: item.status === 1 ? 'Active' : 'Inactive',
      }))
    })
    .catch((error) => {
      // Handle any errors that occurred during the API request
      console.error('There was an error fetching the data:', error)
    })
}
</script>
