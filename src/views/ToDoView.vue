<template>
  <main>
    <DoneList/>
    <ActiveList/>

    <div class="flex fixed bottom-12 lg:w-[812px] lg:left-auto lg:right-auto left-5 right-5">
      <CustomInput
        type="text"
        placeholder="Add item"
        class="mr-4"
        v-model="inputValue"
      />
      <button :class="{'active': inputValue}" @click="addItemToList()">Add Item</button>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import { useListStore } from '@/stores/list';
  
  //components
  import DoneList from '@/components/DoneList.vue';
  import ActiveList from '@/components/ActiveList.vue';
  import CustomInput from '@/components/CustomInput.vue';

  const store = useListStore();

  let inputValue: Ref<string> = ref('');

  const addItemToList = (): void => {
    if (inputValue.value) {

      store.addItem({
        name: inputValue.value,
        date: new Date(),
        backlog: false,
        done: false
      })

      inputValue.value = ''
    }
  }
</script>

<style scoped>
</style>