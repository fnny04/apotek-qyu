<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../../components/navbar.vue";
import Card from "../../components/card.vue";

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

    <Navbar />
    
    

</template>