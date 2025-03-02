<template>
  <div>
    <p>Count: <span :class="{'negative-count': count < 0}">{{ count }}</span></p>
    <button @click="Increment" class="increment-button">Increment</button>
    <button @click="Decrement" class="btn">Decrement</button>
  </div>
</template>

<script setup>
// import { update } from 'cypress/types/lodash';
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

// define props 

const props = defineProps({
    initialCount: {
        type: Number,
        default: 10
    }
})

//Define Emits

const emit =  defineEmits(['update:count']);

// making it a reactive component
const count = ref(props.initialCount);

// 4. Emit Event on Count Change
watch(count, (newValue) => {
    emit('update:count', newValue);
});

const Increment = () => 
{
  count.value++;
}

const Decrement = () => 
{
  count.value--;
} 
</script>

<style scoped>
.increment-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.increment-button:hover {
  background-color: #45a049;
}
.negative-count {
    color: red;
}
</style>