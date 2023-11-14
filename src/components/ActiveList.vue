<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="relative">
      <ListItem
        v-for="item in store.getActiveList" :key="item.date.getTime()"
        :item="item"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
  import { useListStore } from '@/stores/list';
  import ListItem from '@/components/ListItem.vue';

  const store = useListStore();
</script>

<style scoped>
</style>