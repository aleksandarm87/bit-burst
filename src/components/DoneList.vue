<template>
  <div>
    <div class="text-text-grey px-1.5 pt-[13px] box-border">
      <i :class="[arrowIconClass, { 'rotate-180': showDoneList }]" @click="showDoneList = !showDoneList"/>
      <span>{{ store.getDoneList.length }} DONE</span>
    </div>
    <TransitionGroup name="list" tag="ul" :class="[listContainerClass, { 'max-h-[500px]': showDoneList }]">
      <ListItem
        v-for="item in store.getDoneList" :key="item.date.getTime()"
        :item="item"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import { useListStore } from '@/stores/list';
  import ListItem from '@/components/ListItem.vue';

  const store = useListStore();
  let showDoneList: Ref<boolean> = ref(false);

  //classes
  const listContainerClass = `
    relative
    max-h-0
    overflow-hidden
    ease-in-out
    transition-[max-height]
    duration-300
    border-b
    border-border-grey
    pb-1
  `
  const arrowIconClass = `
    icon-arrow
    inline-block
    mr-3
    hover:cursor-pointer
    transition-transform
    duration-200
  `
</script>

<style scoped>
</style>