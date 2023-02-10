<script setup>
import Protect from "../../assets/illustration/protect.png";
import Swal from "sweetalert2";
const save = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Berhasil Disimpan",
    showConfirmButton: false,
    timer: 1500,
  });
};
</script>

<template>
  <div class="my-4 justify-between flex ml-20">
    <router-link to="/customer/:id">
      <div class="flex gap-x-2 items-center">
        <img width="60" :src="Protect" alt="" />
        <span class="text-1xl font-bold text-black-800">ApoteQyu</span>
      </div>
    </router-link>
  </div>
  <div class="mt-10 sm:mt-0 flex">
    <div class="md:grid md:grid-cols-3 md:gap-4 pl-10">
      <div class="md:col-span-1">
        <div class="px-4 py-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Informasi Pribadi
          </h3>
        </div>
        <ul class="space-y-2 ">
            <li>
                <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link to="/profil">
                <span class="ml-3">Profile</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link to="/history">
                <span class="flex-1 ml-3 whitespace-nowrap">Pesanan saya</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <router-link to="/password">
                <span class="flex-1 ml-3 whitespace-nowrap">Ubah Password</span>
              </router-link>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <router-link to="/customer/:id">
                <span class="flex-1 ml-3 whitespace-nowrap">Keluar</span>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
      <div class="mr-60 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden mb-20 border-gray-600 sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="nama-depan"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Depan</label
                  >
                  <input
                    type="text"
                    name="nama-depan"
                    id="nama-depan"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="nama-belakang"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Belakang</label
                  >
                  <input
                    type="text"
                    name="nama-belakang"
                    id="nama-belakang"
                    autocomplete="family-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="jenis-kelamin"
                    class="block text-sm font-medium text-gray-700"
                    >Jenis Kelamin</label
                  >
                  <select
                    id="jenis-kelamin"
                    name="jenis-kelamin"
                    autocomplete="gender-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label
                    for="nama-jalan"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Jalan / Alamat</label
                  >
                  <input
                    type="text"
                    name="nama-jalan"
                    id="nama-jalan"
                    autocomplete="nama-jalan"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    for="kota"
                    class="block text-sm font-medium text-gray-700"
                    >Kota</label
                  >
                  <input
                    type="text"
                    name="kota"
                    id="kota"
                    autocomplete="address-level2"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="provinsi"
                    class="block text-sm font-medium text-gray-700"
                    >Provinsi</label
                  >
                  <input
                    type="text"
                    name="provinsi"
                    id="region"
                    autocomplete="address-level1"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="pos-kode"
                    class="block text-sm font-medium text-gray-700"
                    >Kode Pos</label
                  >
                  <input
                    type="text"
                    name="kode-pos"
                    id="kode-pos"
                    autocomplete="kode-pos"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-3"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                @click="save()"
                type="button"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>