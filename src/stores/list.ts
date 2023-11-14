import { defineStore } from "pinia";
import { ref, computed, type Ref } from 'vue';
import { type Item } from "@/interfaces";

export const useListStore = defineStore('listStore', () => {
  const toDoList: Ref<Item[]> = ref([]);
  const getActiveList = computed(() => toDoList.value.filter(item => !item.backlog && !item.done))
  const getBacklogList = computed(() => toDoList.value.filter(item => item.backlog && !item.done))
  const getDoneList = computed(() => toDoList.value.filter(item => item.done))

  const addItem = (item: Item): void => {
    toDoList.value.push(item);
  }

  const moveToDoneList = (item: Item, value: boolean): void => {
    const index = toDoList.value.indexOf(item);

    toDoList.value[index].done = value;
  }

  const removeItemFromList = (item: Item): void => {
    const index = toDoList.value.indexOf(item);

    toDoList.value.splice(index, 1);
  }

  const moveToBacklog = (item: Item, value: boolean): void => {
    const index = toDoList.value.indexOf(item);

    toDoList.value[index].backlog = value;
  }

  return {
    toDoList,
    addItem,
    getActiveList,
    getBacklogList,
    getDoneList,
    moveToDoneList,
    removeItemFromList,
    moveToBacklog
  }
})