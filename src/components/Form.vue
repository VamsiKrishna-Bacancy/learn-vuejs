<template>
    <form @submit.prevent="submitUserData">
      <div class="input-wrap">
        <label for="name">Name:</label>
      <input class="input-field" id="name" v-model="name">
      </div>
      <div class="input-wrap"><label for="age">Age:</label>
        <input class="input-field" id="age" v-model.number="age"></div>
      <div class="input-wrap"><label for="email">Email:</label>
        <input class="input-field" id="email" v-model="email"></div>
      <button class="btn" type="submit" >Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define reactive properties using ref()
  const name = ref('');
  const age = ref('');
  const email = ref('');

  const submitUserData = () => 
  {
    console.log(name.value, age.value, email.value)
    return;

  }
  </script>
  
  <style scoped>
  .input-wrap{
    padding: 10px;
    margin: 0px;
  }

  .input-field {
    
    height: 24px;
    width: 160px;
    margin-left: 10px;

  }
  .btn {
    
    padding: 10px;
    margin-left: 160px;
    border: antiquewhite;

  }
  </style>
  