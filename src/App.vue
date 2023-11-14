<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import HeaderNav from '@/components/HeaderNav.vue';
</script>

<template>
  <div class="lg:w-[812px] m-auto px-5 lg:px-0">
    <HeaderNav/>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>

</style>
