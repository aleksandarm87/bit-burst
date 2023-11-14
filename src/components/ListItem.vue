<template>
  <li class="flex w-full py-3 items-center">
    <CustomCheckBox
      v-model="checked"
      @change="onChange()"
    />
    <div class="grow">
      <div :class="['font-normal text-[15px] text-title-black', { 'line-through text-text-grey': item.done }]">{{ item.name }}</div>
      <div class="font-normal text-[10px] text-text-grey">{{ getDate() }}</div>
    </div>
    <button v-if="item.backlog && !item.done" :class="whiteBtnClass" @click="store.moveToBacklog(item, false)">Move to list</button>
    <div
      v-if="!item.done && !item.backlog"
      class="relative"
      @click="showDropdown = !showDropdown"
      v-click-outside.stop="() => showDropdown = false"
    >
      <i :class="[dotsIconClass, { 'bg-border-grey text-black': showDropdown }]"/>
      <Transition name="dropdown">
        <div v-if="showDropdown" :class="dropdownContainerClass">
          <div :class="dropdownClass" @click="store.removeItemFromList(item)">Delete</div>
          <div :class="dropdownClass" @click="store.moveToBacklog(item, true)">Move to Backlog</div>
        </div>
      </Transition>
    </div>
  </li>
</template>

<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import { type Item } from '@/interfaces';
  import { useListStore } from '@/stores/list';
  
  //components
  import CustomCheckBox from '@/components/CustomCheckBox.vue';

  export interface Props {
    item: Item
  }

  const props = defineProps<Props>()
  const { date } = props.item
  let checked: Ref<boolean> = ref(props.item.done);
  const store = useListStore();
  let showDropdown: Ref<boolean> = ref(false);

  const getDate = () => {
    return date.toLocaleDateString();
  }

  const onChange = () => {
    store.moveToDoneList(props.item, checked.value);
  }

  //classes
  const dropdownContainerClass = `
    absolute
    right-[120%]
    top-2
    text-custom-blue
    text-[13px] border
    border-border-grey-dark
    rounded
    bg-white
    z-10
  `

  const dropdownClass = `
    hover:cursor-pointer
    first:border-b
    border-border-grey-dark
    px-3
    py-2
    box-border
    font-medium
    whitespace-nowrap
    hover:bg-gray-100
  `

  const dotsIconClass = `
    icon-dots
    flex
    justify-center
    items-center
    rounded-full
    h-10
    w-10
    text-text-grey
    text-xl
    hover:text-black
    hover:bg-border-grey
    hover:cursor-pointer
  `

  const whiteBtnClass = `
    bg-white
    px-3
    py-2
    text-custom-blue
    border
    border-border-grey-dark
    font-medium
    text-[12px]
    hover:bg-border-grey
  `
</script>

<style scoped>
  .dropdown-enter-active {
    animation: bounce-in 0.3s;
  }

  .dropdown-leave-active {
    animation: bounce-in 0.3s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>