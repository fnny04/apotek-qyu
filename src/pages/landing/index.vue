<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../../components/navbar.vue";
import Banner from "../../components/banner.vue";
import Button from "../../components/common/button.vue";
import Obat from "../../assets/illustration/landing.png";
import Ini from "../../assets/medicines.png";
import Modal from "../../components/modal.vue";


const landing = ref();
const about = ref();
const goTo = () => {
  console.log(landing.value.textContent);
};

const isModalShow = ref(false);
console.log(isModalShow.value);

onMounted(() => {
  console.log(landing.value);
  console.log(about.value.textContent);
});


</script>
<template>
  <Navbar @open="isModalShow = true" />
  <Banner>
    <div id="home" ref="landing" class="bg-gray-200 flex h-full  justify-between py-0 px-3 w-full">
      <div class="flex flex-col items-center justify-center w-full">
        <img width="350" height="380" :src="Obat" alt="" />
        <h1 class="text-4xl font-bold text-black-900 py-8 items-center">
          Selamat Datang di Apotek Kami
        </h1>
        <div class="flex gap-x-6 justify-center">
          <router-link to="/login">
            <Button text="Login" />
          </router-link>
          <router-link to="/register">
            <Button text="Register" />
          </router-link>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </Banner>
  <Banner id="about" ref="about">
    <div class="flex justify-between px-8 w-full">
      <div class="justify-center px-15 items-center">
        <img width="400" :src="Ini" alt="" />
      </div>
      <div class="flex flex-col items-center justify-center gap-y-6 w-1/2">
        <h1 class="text-3xl text-black-900 font-bold">
          Kami Siap Melayani Anda :)
        </h1>
        <p>
          Kami menyediakan berbagai obat untuk kesehatan anda dan dapatkan
          informasi seputar kandungan,aturan,petunjuk penggunaan obat maupun
          vitamin untuk anda disini
        </p>
      </div>
    </div>
  </Banner>
  <Banner id="contact" ref="contact">
    <div class="flex flex-col items-center justify-center gap-y-8 w-full">
      <h1 class="font-bold text-3xl items-center">
        For More Information Follow Our Social Media
      </h1>
      <div
        class="items-center text-gray-600 font-bold flex gap-x-6 cursor-pointer"
      >
        <span>
          <img
            src="https://img.icons8.com/dusk/64/000000/facebook-new--v2.png"
          />
        </span>
        <span>
          <img
            src="https://img.icons8.com/dusk/64/000000/instagram-new--v1.png"
          />
        </span>
        <span>
          <img src="https://img.icons8.com/dusk/64/000000/line-me.png" />
        </span>
        <span>
          <img src="https://img.icons8.com/dusk/64/000000/whatsapp.png" />
        </span>
      </div>
    </div>
  </Banner>
  <Modal v-if="isModalShow" @close="isModalShow = false" />
</template>
