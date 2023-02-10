<script setup>
import Swal from "sweetalert2";
import { ref, onMounted } from "vue";
import { router } from "../../router";
import { supabase } from "../../supabase";
const listBucket = ref({});
const sumed = ref();
const getBucket = async () => {
  const { data } = await supabase.from("obat").select("*").eq("isBucket", true);
  listBucket.value = data;
  const sum = data
    .map((x) => x.harga)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  sumed.value = sum;
};

const sukses = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Pembelian Berhasil Pesanan diproses",
    showConfirmButton: false,
    timer: 1500,
  });
  router.push("/customer/34");
};

const goPay = () => {
  Swal.fire({
    text: "Silahkan Scan",
    imageUrl:
      "data:image/png;base64,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",
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
};

const danaPay = () => {
  Swal.fire({
    text: "Silahkan Scan",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/WhatsApp_click-to-chat_QR_code.png",
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
};

onMounted(() => {
  getBucket();
});
</script>

<template>
  <div class="container p-12 mx-auto">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
      <div class="flex flex-col md:w-full">
        <h2 class="mb-4 font-bold md:text-xl text-heading">
          Alamat Pengiriman
        </h2>
        <form class="justify-center w-full mx-auto" method="post" action>
          <div class="">
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Nama Depan</label
                >
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="firstName"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Nama Belakang</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label
                  for="No.Handphone"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >No.Handphone</label
                >
                <input
                  name="Last Name"
                  type="text"
                  placeholder="+62 "
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="mt-4">
              <div class="w-full">
                <label
                  for="Alamat"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Alamat</label
                >
                <textarea
                  class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="Alamat"
                  cols="20"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div class="space-x-0 lg:flex lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label
                  for="city"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                  >Kota</label
                >
                <input
                  name="Kota"
                  type="text"
                  placeholder="Kota"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="w-full lg:w-1/2">
                <label
                  for="postcode"
                  class="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Kode pos</label
                >
                <input
                  name="Kode pos"
                  type="text"
                  placeholder="Kode pos"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>
            <div class="flex items-center mt-4">
              <label class="flex items-center text-sm group text-heading">
                <input
                  type="checkbox"
                  class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                />
                <span class="ml-2"
                  >Simpan Informasi ini untuk sekarang</span
                ></label
              >
            </div>
            <div class="relative pt-3 xl:pt-6">
              <label
                for="catatan"
                class="block mb-3 text-sm font-semibold text-gray-500"
              >
                Catatan (Optional)</label
              ><textarea
                name="catatan"
                class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                rows="4"
                placeholder="Catatan untuk pengiriman"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
        <div class="pt-12 md:pt-0 2xl:ps-4">
          <h2 class="text-xl font-bold">Detail Pesanan</h2>
          <div class="mt-8">
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-x-4">
                <div
                  v-for="(item, index) in listBucket"
                  :key="index"
                  class="flex flex-col mt-2 justify-between w-full border-b-2 p-2 border-black-300"
                >
                  <div class="flex gap-x-4">
                    <img width="40" :src="item.gambar" alt="" />
                    <div class="flex flex-col gap-y-2">
                      <span>
                        {{ item.nama_obat }}
                      </span>
                      <span class="text-xs text-gray-400">
                        {{ item.stok + " Barang" }}
                      </span>
                    </div>
                  </div>
                  <span>{{ item.harga }}</span>
                </div>
              </div>
              <div class="flex space-x-4"></div>
            </div>
          </div>
          <div class="flex p-4 mt-4">
            <h2 class="text-xl font-bold">ITEMS 2</h2>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Subtotal<span class="ml-2"> Rp. {{ sumed }} </span>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Ongkos Kirim<span class="ml-2">Rp.5000</span>
          </div>
          <div
            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0"
          >
            Total<span class="ml-2">Rp. {{ sumed + 5000 }}</span>
          </div>
          <!--payment-->
          <div class="flex p-4 mt-4">
            <h2 class="text-xl font-bold">Pilih metode pembayaran</h2>
          </div>
          <div class="flex justify-center">
            <div class="form-check form-check-inline ml-6">
              <input
                @click="goPay()"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
                >Gopay</label
              >
            </div>
            <div class="form-check form-check-inline ml-6">
              <input
                @click="danaPay()"
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Dana</label
              >
            </div>
            <div class="form-check form-check-inline ml-6">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >COD</label
              >
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <router-push to="/customer/:id">
              <button
                @click="sukses()"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Beli
              </button>
            </router-push>
            <router-link to="/customer/:id">
              <button
                @click="closeModal"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Batal
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
