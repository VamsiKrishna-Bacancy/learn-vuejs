<template>
  <button
    @click="handleClick"
    :class="buttonClass"
    class="font-semibold py-2 px-4 border rounded transition-all duration-300"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  flag: {
    type: Number,
    default: 0,
  },
  onClick: Function,
  to: String, // Optional route prop
})

const router = useRouter()

const buttonClass = computed(() => {
  return props.flag === 1
    ? 'bg-transparent hover:bg-red-500 text-red-700 hover:text-white border border-red-500 hover:border-transparent'
    : 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent'
})

const handleClick = (event) => {
  if (props.onClick) {
    props.onClick(event) // Calls the passed function if available
  }
  if (props.to) {
    router.push(props.to) // Navigate if `to` is provided
  }
}
</script>
