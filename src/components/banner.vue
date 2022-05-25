<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const toLogin = () => {
  router.push("/login");
};
</script>
<template>
  <div class="flex h-screen w-full bg-gray-200 justify-center items-center">
    <slot></slot>
  </div>
</template>

