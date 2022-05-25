<script setup>
import { ref, onMounted } from "vue";
import Sidebar from "../../components/sidebar.vue";

const landing = ref();
const about = ref();
const goTo = () => {
  console.log(landing.value.textContent);
};

onMounted(() => {
  console.log(landing.value);
  console.log(about.value.textContent);
});
</script>
<template>

    <Sidebar />
    

</template>