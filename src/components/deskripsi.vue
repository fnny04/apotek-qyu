<script setup>
const emit = defineEmits(["close","inc", "dec"]);
const props = defineProps({
  namaObat: "",
  hargaObat: 0,
  deskripsiObat: "",
  imageObat: "",
  stokObat: "",
  qtyObat: 0,
});
const closeModal = () => {
  emit("close");
  console.log("triger close");
};

</script>
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
      >
        
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {{ namaObat }}
                </h3>
                <div class="mt-2 flex">
                  <div>
                    <section class="">
                      <img width="200" :src="imageObat" />
                    </section>
                  </div>

                  <div class="pl-10">
                    <section class="">
                      <h3 class="font-bold">Harga</h3>
                      {{ hargaObat }}
                    </section>
                    <section class="">
                      <h3 class="font-bold">Deskripsi</h3>
                      {{ deskripsiObat }}
                    </section>
                    <section class="">
                      <h3 class="font-bold">Stok</h3>
                      {{ stokObat }}
                    </section>
                    <section class="">
                      <h3 class="font-bold">Qty</h3>
                      {{qtyObat}}          
                    </section>
            <div class="mx-4 my-8">
            <button
            @click="emit('inc')"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
            >
              +
            </button>
            <button
            @click="emit('dec')"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              -
            </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <router-link to="/bayar">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Beli
            </button>
            </router-link>
            <button
              @click="closeModal"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Batal
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>