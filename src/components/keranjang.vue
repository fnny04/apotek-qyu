<script setup>
import { supabase } from '../supabase';
import { ref} from "vue";
const listBucket = ref([])
const getBucket = async () => {
  const { data } = await supabase.from("obat").select("*").eq("isBucket", true);
  listBucket.value = data
};

const props = defineProps({
    items:[]
})

const emits =  defineEmits(['close','unset'])

const unset = () => {
  emits('unset')
}

const closeModal = () => {
    emits('close')
}

const unsetBucket = async (id) => {
  const data = {
    isBucket: false 
  }
  await supabase.from("obat").update(data).eq("id", id)
  getBucket()
  emits('close')
};


</script>

<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      
      <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
             <!-- Heroicon name: outline/exclamation -->
            
            <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div>
              <h3 class="my-4 text-lg leading-6 font-medium text-gray-900" id="modal-title">Keranjang</h3>
              <hr class="w-full">
              </div>
              <div v-for="(item, index) in items" :key="index" class="flex mt-2 justify-between w-full border-b-2 p-2 border-black-300">
              <div class="flex gap-x-4">

                  <img width="40" :src="item.gambar" alt="">
                  <div class="flex flex-col gap-y-2">
                      <span>
                          {{item.nama_obat}}
                      </span>
                      <span class="text-xs text-gray-400">
                      {{ item.stok + " Barang"}}
                    </span>
                  </div>
              </div>
              <div class="flex items-center">

                <span>{{item.harga}}</span>
              <button
                @click="unsetBucket(item.id)"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Hapus
              </button>
              </div>
               </div>
              
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="closeModal" type="button" class="w-full inline-flex justify-center rounded border text-black-900 border-gray-600 px-4 py-2 text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Close</button>      
          <router-link to="/bayar">
          <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg- text-base font-medium text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Beli
              </button>  
              </router-link>
        </div>
      </div>
    </div>
  </div>
</div>

</template>