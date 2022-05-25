<script setup>
defineProps({
  text: String,
  color: String,
});
</script>
<template>
  <button
    class="bg-blue-400 border-none w-auto px-6 py-4 rounded-2xl"
    :class="color"
  >
    {{ text }}
  </button>
</template>
