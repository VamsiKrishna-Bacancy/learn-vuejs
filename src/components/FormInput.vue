<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    />
    <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  modelValue: String, // Accepts the value from the parent component
  error: String,
})

defineEmits(['update:modelValue']) // Define the emitted event
</script>
