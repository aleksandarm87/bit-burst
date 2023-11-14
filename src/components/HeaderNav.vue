<template>
  <header>
    <nav class="pb-3 pt-8 text-[28px] font-bold border-b text-grey">
      <RouterLink
        v-for="(route, index) in $router.options.routes"
        :key="index"
        :to="route.path"
        class="relative mr-8 hover:text-title-black"
      >
        {{ route.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<style scoped>
  .router-link-exact-active {
    @apply
      text-title-black
      after:content-['']
      after:w-full
      after:h-1
      after:block
      after:bg-custom-blue
      after:absolute
      after:left-0
      after:-bottom-4
      after:rounded-full
  }
</style>