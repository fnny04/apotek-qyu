<script setup>
import Sidebar from "../../components/sidebar.vue";
import Grafik from "../../assets/grafik.png";
</script>
<template>
  <div class="flex bg-gray-100">
    <Sidebar />
    <div class="justify-center m-10 items-center">
      <img width="1000" height="380" :src="Grafik" alt="" />
    </div>
  </div>
</template>
