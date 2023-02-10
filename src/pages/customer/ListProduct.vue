<script setup>
import Swal from "sweetalert2";
import Protect from "../../assets/illustration/protect.png";
import keranjang from "../../assets/keranjang.svg";
import ModalKeranjang from "../../components/keranjang.vue";
import deskripsi from "../../components/deskripsi.vue";
import { supabase } from "../../supabase";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Loading from "../../components/loading.vue";
const obat = ref({});
const getObat = async () => {
  isLoading.value = true;
  const { data } = await supabase.from("obat").select("*");
  obat.value = data;
  isLoading.value = false;
};
const route = useRoute();
const id = route.params.id;
const users = ref("");
const listBucket = ref([]);
const isBucketShow = ref(false);
const qty = ref(0);
const getUsers = async () => {
  const { data } = await supabase.from("user").select("name").eq("id", id);
  const username = data.map((x) => x.name);
  users.value = username;
};
const getBucket = async () => {
  const { data } = await supabase.from("obat").select("*").eq("isBucket", true);
  listBucket.value = data;
};
const setBucket = async (id) => {
  const data = {
    isBucket: true,
  };
  await supabase.from("obat").update(data).eq("id", id);
  getBucket();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Berhasil Menambah Ke Keranjang",
    showConfirmButton: false,
    timer: 1500,
  });
};

const showBucket = () => {
  getBucket();
  isBucketShow.value = true;
};
const isDropdownShow = ref(false);
const isUserMenu = ref(false);
const isDeskripsiShow = ref(false);
const isLoading = ref(false);
const namaObat = ref("");
const hargaObat = ref("");
const stokObat = ref("");

const deskripsiObat = ref("");
const imageObat = ref("");
const openDesc = (item) => {
  isDeskripsiShow.value = true;
  namaObat.value = item.nama_obat;
  hargaObat.value = item.harga;
  deskripsiObat.value = item.deskripsi;
  imageObat.value = item.gambar;
  stokObat.value = item.stok;
};
onMounted(() => {
  getUsers();
  getObat();
  getBucket();
});
</script>

<template>
  <main class="mx-20 my-8">
    <div class="my-8 justify-between flex gap-4">
      <div class="flex gap-x-2 items-center pr-19">
        <img width="60" :src="Protect" alt="" />
        <span class="text-1xl font-bold text-black-800">ApoteQyu</span>
      </div>
      <button
        @click="isDropdownShow = !isDropdownShow"
        id="dropdownLargeButton"
        data-dropdown-toggle="dropdownLarge"
        class="inline-flex items-center px-5 py-3 mb-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Kategori
        <svg
          class="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-if="isDropdownShow"
        id="dropdownLarge"
        class="z-10 bg-white absolute top-25 left-60 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Herbal</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Obat&Flu dan Batuk</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Obat Anak</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Ibu Hamil</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            ></a>
          </li>
        </ul>
      </div>
      <input
        type="text"
        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
      />
      <span
        @click="showBucket()"
        class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded cursor-pointer"
        id="basic-addon2"
      >
        <img width="60" height="380" :src="keranjang" alt="" />
      </span>
      <button
        @click="isUserMenu = !isUserMenu"
        id="dropdownLargeButton"
        data-dropdown-toggle="dropdownLarge"
        class="inline-flex uppercase items-center px-5 py-3 mb-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {{ users[0] }}
        <svg
          class="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-if="isUserMenu"
        id="dropdownLarge"
        class="z-10 bg-white absolute top-25 left-285 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownLargeButton"
        >
          <li>
            <router-link to="/profil">
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Profil</a
              >
            </router-link>
          </li>
        </ul>
        <div class="py-1">
          <router-link to="/">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Logout</a
            >
          </router-link>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-5 mt-40">
      <!-- produk 1-->

      <div
        v-for="(data, index) in obat"
        :key="obat.id"
        class="hover:scale-105 flex flex-col p-2 bg-white shadow-lg cursor-pointer rounded transform duration-300 ease-in-out"
      >
        <div classs="flex justify-center ">
          <img
            @click="openDesc(data)"
            class="mx-4 w-auto h-50"
            :src="data.gambar"
          />
        </div>
        <p class="font-semibold text-lg my-2 text-red-700 text-center">
          {{ data.harga }}
        </p>
        <p class="font-light text-sm text-center">{{ data.nama_obat }}</p>

        <router-link to="/bayar">
          <button
            type="button"
            class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Beli sekarang
          </button>
        </router-link>
        <button
          @click="setBucket(data.id)"
          type="button"
          class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Tambah Keranjang
        </button>
      </div>
    </div>
    <deskripsi
      v-if="isDeskripsiShow"
      :nama-obat="namaObat"
      :harga-obat="qty <= 1 ? hargaObat : hargaObat * qty"
      :deskripsi-obat="deskripsiObat"
      :image-obat="imageObat"
      :stok-obat="stokObat"
      :qty-obat="qty"
      @inc="stokObat > qty ? qty++ : qty"
      @dec="qty === 0 ? 0 : qty--"
      @close="isDeskripsiShow = false"
    />
    <ModalKeranjang
      v-if="isBucketShow"
      :items="listBucket"
      @close="isBucketShow = false"
    />
  </main>
  <Loading v-if="isLoading" />
</template>
