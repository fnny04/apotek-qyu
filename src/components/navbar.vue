<script setup>
import Protect from "../assets/illustration/protect.png";
const emit = defineEmits(["goto", "open"]);
const goTo = () => {
  emit("goto");
};
const openModal = () => {
  emit("open");
  console.log("triger");
};
</script>
<template>
  <nav
    class="flex lg:sticky justify-center items-center top-0 w-full  h-15 bg-blue-300 px-10"
  >
    <div class="flex gap-x-2 items-center w-full">
      <img width="40" :src="Protect" alt="" />
      <span class="text-1xl font-bold text-black-800">ApoteQyu</span>
    </div>
    <div
      class="items-center text-gray-600 font-bold flex gap-x-6 cursor-pointer"
    >
      <span><a href="#home">Home</a></span>
      <span> <a href="#about">About</a></span>
      <span><a href="#contact">Contact</a></span>
      <span @click="openModal"><a href="#helpdesk">HelpDesk</a></span>
    </div>
  </nav>
</template>
