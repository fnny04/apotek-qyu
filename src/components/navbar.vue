<script setup>
import Protect from "../assets/illustration/protect.png"
const emit = defineEmits(["goto"]);
const goTo = () => {
  emit("goto");
};
</script>
<template>
  <nav
    class="flex z-45 md:sticky justify-center items-center top-0 w-full bg-gray-200 p-4 h-auto">
    <div class="flex gap-x-2 items-center w-full">
    <img width="40" :src="Protect" alt="" />
    <span class="text-1xl font-bold text-black-800">ApoteQyu</span>
    </div>
    <div class="items-center text-gray-600 font-bold flex gap-x-6 cursor-pointer">
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
      <span>HelpDesk</span>
    </div>
  </nav>
</template>
