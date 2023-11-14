<template>
  <main>
    <div class="flex mt-4 gap-4">
      <CustomInput
        placeholder="Search"
        v-model="searchValue"
      />
      <button :class="btnClass" @click="toggleSort('name')">Sort by Name</button>
      <button :class="btnClass" @click="toggleSort('date')">Sort by Date</button>
    </div>
    <BacklogList
      :items="filteredList"
    />
    <div class="flex fixed bottom-12 lg:w-[812px] lg:left-auto lg:right-auto left-5 right-5">
      <CustomInput
        type="text"
        placeholder="Add item"
        class="mr-4"
        v-model="inputValue"
      />
      <button :class="{'active': inputValue}" @click="addItemToBacklog()">Add Item</button>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, computed, type Ref } from 'vue';
  import { useListStore } from '@/stores/list';
  import type { Item } from '@/interfaces';

  //components
  import BacklogList from '@/components/BacklogList.vue';
  import CustomInput from '@/components/CustomInput.vue';

  const searchValue: Ref<string> = ref('');
  const inputValue: Ref<string> = ref('');
  const sortOrder: Ref<string> = ref('ascending');
  const sortBy: Ref<keyof Item> = ref('date');
  const store = useListStore();

  const addItemToBacklog = (): void => {
    if (inputValue.value) {

      store.addItem({
        name: inputValue.value,
        date: new Date(),
        backlog: true,
        done: false
      })

      inputValue.value = ''
    }
  }

  const toggleSort = (sortField: string): void => {
    sortBy.value = sortField as keyof Item;

    if(sortOrder.value && sortOrder.value === 'ascending') {
      sortOrder.value = 'descending';
    } else {
      sortOrder.value = 'ascending';
    }
  }

  const sortItems = (a: Item, b: Item): number => {
    const nameA = sortBy.value === 'name' ?  a[sortBy.value].toUpperCase() : a[sortBy.value];
    const nameB = sortBy.value === 'name' ? b[sortBy.value].toUpperCase() : b[sortBy.value];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  }

  const filteredList = computed(() => {
    let list = store.toDoList.filter(item => item.name.includes(searchValue.value) && item.backlog && !item.done);

    return sortOrder.value === 'ascending' ? list.sort(sortItems) : list.sort(sortItems).reverse();
  })

  //classes
  const btnClass = `
    bg-custom-blue
    hover:bg-custom-blue-dark
    border-custom-blue-dark
  `
</script>

<style lang="scss" scoped>
</style>