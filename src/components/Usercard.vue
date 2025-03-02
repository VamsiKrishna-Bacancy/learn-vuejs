<template>
  <div>
      <p>User Name: <span>{{ name }}</span></p>
      <p>Age: <span>{{ age }}</span></p>
      <p>Email: <span>{{ email }}</span></p>
      <p>
          Status:
          <span :class="{ 'active': status === 1, 'pending': status !== 1 }">
              {{ status === 1 ? 'active' : 'pending' }}
          </span>
      </p>
  </div>

  <hr>

  <div>
      <div v-for="(candidate, index) in candidates" :key="index">
          <p>User Name: <span>{{ candidate.name }}</span></p>
          <p>Age: <span>{{ candidate.age }}</span></p>
          <p>Email: <span>{{ candidate.email }}</span></p>
          <p>
              Status:
              <span :class="{ 'active': candidate.status === 1, 'pending': candidate.status !== 1 }">
                  {{ candidate.status === 1 ? 'active' : 'pending' }}
              </span>
          </p>
          <hr>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const candidates = ref([
  {
      id: 1,
      name: "Babbu",
      age: 29,
      email: "babbu.racer1000cc@gmail.com",
      status: 1
  },
  {
      id: 2,
      name: "Simran",
      age: 25,
      email: "simran@example.com",
      status: 0
  },
  {
      id: 3,
      name: "Rahul",
      age: 32,
      email: "rahul@example.com",
      status: 1
  }
])

const name = ref("Babbu")
const age = ref(29)
const email = ref("babbu.racer1000cc@gmail.com")
const status = ref(1)
</script>

<style scoped>
.active {
  color: green;
}

.pending {
  color: red;
}
</style>
