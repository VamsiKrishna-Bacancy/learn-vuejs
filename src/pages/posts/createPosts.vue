<template>
  <form class="w-full max-w-lg ml-10" @submit.prevent="onClickSubmit">
    <!-- Title & Description -->
    <FormRow>
      <FormInput v-model="title" label="Title" id="title" placeholder="Enter The Title" />
      <FormInput
        v-model="description"
        label="Description"
        id="description"
        placeholder="Enter The Description"
      />
    </FormRow>

    <!-- Submit Button -->
    <FormRow>
      <Button>Submit</Button>
    </FormRow>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import FormInput from '@/components/FormInput.vue'
import FormRow from '@/components/FormRow.vue'
import Button from '@/components/Button.vue'

const title = ref('')
const description = ref('')

const onClickSubmit = async () => {
  try {
    const response = await axios.post('http://api.test/api/add_post', {
      title: title.value,
      description: description.value,
    })
    title.value = ''
    description.value = ''
    window.location.href = '/posts'
  } catch (error) {
    alert('Failed to add post.')
  }
}
</script>
