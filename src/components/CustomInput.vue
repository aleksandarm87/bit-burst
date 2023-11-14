<template>
  <input
    :class="inputClass"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script setup lang="ts">

  defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  })

  //classes
  const inputClass = `
    border
    border-border-grey-dark
    outline-none
    px-[15px]
    py-3
    rounded
    placeholder:text-border-grey-dark
    text-[15px]
    w-full
    text-title-black
    font-roboto
  `
</script>

<style scoped>
</style>