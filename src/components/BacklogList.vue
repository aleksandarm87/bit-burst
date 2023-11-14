<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="relative">
      <ListItem
        v-for="item in items" :key="item.date.getTime()"
        :item="item"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
  import { type Item } from '@/interfaces';
  import ListItem from '@/components/ListItem.vue';

  export interface Props {
    items: Item[]
  }

  defineProps<Props>();
</script>

<style scoped>
</style>