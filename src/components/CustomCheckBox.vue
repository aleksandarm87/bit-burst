<template>
  <div class="relative mr-2">
    <input
      type="checkbox"
      :class="checkboxClass"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <i v-if="modelValue" :class="checkmarkClass"/>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    modelValue: Boolean
  })

  //classes
  /* eslint-disable */
  const checkboxClass = `
    relative
    flex
    justify-center
    items-center
    w-6
    h-6
    border
    border-border-grey-dark
    rounded-full
    outline-none
    appearance-none
    checked:border-custom-blue
    hover:cursor-pointer
    z-10
  `

  const checkmarkClass = `
    icon-checkmark
    absolute
    flex
    items-center
    justify-center
    w-6
    h-6
    top-0
    left-0
    font-normal
    text-white
    text-xs
    rounded-full
    bg-custom-blue
  `
</script>

<style scoped>
</style>