<template>
    <div>
        <p>First Name: <span><input v-model.lazy="firstName"/></span></p>
        <p>Last Name: <span><input v-model.lazy="lastName"/></span></p>
        <h3>{{ fullName }}</h3>
    </div>
</template>

<script setup>

import {ref, computed } from 'vue';

const firstName = ref('Vamsi Krishna');
const lastName = ref('Kommanamanchi');

const fullName = computed(() =>{
    return `${firstName.value}  ${lastName.value}`
})

</script>