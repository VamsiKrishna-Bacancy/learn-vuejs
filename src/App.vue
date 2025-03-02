<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Counter from './components/Counter.vue'
import Fullname from './components/Fullname.vue'
import Form from './components/Form.vue'
import Usercard from './components/Usercard.vue'
import Shoppingcart from './components/Shoppingcart.vue'
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'

// const parentCount = ref(20);

// const handleUpdateCount = (newCount) => {
//   parentCount.value = newCount;
// }
</script>
