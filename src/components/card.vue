<script setup lang="ts">
interface props {
  title?: string;
  price?: string;
  desc?: string;
  stock?: number;
  pic?: string;
}
const props = withDefaults(defineProps<props>(), {
  title: "Produt Default",
  price: "0",
  desc: "lorem ipsum dolor",
  pic: "https://padiumkm.id/public/products/17205/111503/masker-convex-m.1613553978.jpg",
});
</script>

<template>
  <section
    class="flex flex-col w-full shadow-md justify-between rounded-xl h-full"
  >
    <div
      class="flex flex-col bg-white border-y-2 border-gray-200 items-center justify-center rounded-b-xl h-full"
    >
      <img class="w-full h-full" :src="pic" alt="" />
    </div>
    <div class="flex flex-col p-4 gap-y-3 w-full">
      <div class="flex flex w-full justify-between">
        <h1 class="text-md lg:text-xl text-black-900 font-bold">{{ title }}</h1>
        <h1 class="text-md lg:text-xl text-black-900 font-bold">
          Rp.{{ price }}
        </h1>
      </div>
      <div class="flex flex-col">
        <p class="text-sm text-black-700">
          {{ desc }}
        </p>
        <span class="text-md text-black-700 font-bold mt-3"
          >Stok {{ stock }}
        </span>
      </div>
    </div>
  </section>
</template>