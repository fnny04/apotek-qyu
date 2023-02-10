<script setup>
import Sidebar from "../../components/sidebar.vue";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { supabase } from "../../supabase";
import { ref, onMounted } from "vue";
import Modal from "../../components/editModal.vue";
import Swal from "sweetalert2";
import Loading from "../../components/loading.vue";

// Show loading
const isLoading = ref(false);
const idObat = ref();
const isAddModalShow = ref(false);
//show modal
const isModalShow = ref(false);
const showModal = () => {
  isModalShow.value = true;
};
const closeModal = () => {
  clearForm();
  isModalShow.value = false;
};
//clear form
const clearForm = () => {
  idUser.value = "";
  nama_obat.value = "";
  harga.value = "";
  deskripsi.value = "";
  stok.value = "";
};
//get all user
const products = ref({});
const getProducts = async () => {
  isLoading.value = true;
  const { data } = await supabase.from("obat").select("*");
  products.value = data;
  isLoading.value = false;
};
//define
const idUser = ref("");
const nama_obat = ref("");
const harga = ref("");
const deskripsi = ref("");
const stok = ref("");
//update user
const updateData = async () => {
  try {
    const data = {
      nama_obat: nama_obat.value,
      harga: parseInt(harga.value),
      deskripsi: deskripsi.value,
      stok: stok.value,
    };
    const { error } = await supabase
      .from("obat")
      .update(data)
      .eq("id", idObat.value);
    if (error) throw error;
    Swal.fire("Succes", "Data Berhasil Di Update", "success");
    clearForm();
    closeModal();
    getProducts();
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

const addData = async () => {
  try {
    const data = {
      nama_obat: nama_obat.value,
      harga: parseInt(harga.value),
      deskripsi: deskripsi.value,
      stok: stok.value,
    };
    const { error } = await supabase.from("obat").insert(data);
    if (error) throw error;
    Swal.fire("Succes", "Data Berhasil Di Tambah", "success");
    clearForm();
    isAddModalShow.value = false;
    getProducts();
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
//delete user
const deleteProducts = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const { error } = await supabase.from("obat").delete().eq("id", id);
        getProducts();
        if (error) throw error;
      }
    });
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
//edit user
const edit = async (id) => {
  const { data } = await supabase.from("obat").select("*").eq("id", id);
  idObat.value = id;
  nama_obat.value = data[0].nama_obat;
  harga.value = data[0].harga;
  deskripsi.value = data[0].deskripsi;
  stok.value = data[0].stok;
  showModal();
  isModalShow.value = true;
  console.log("Trigered");
};
onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="flex bg-gray-100">
    <Sidebar />
    <Modal
      v-if="isModalShow"
      @cancel="closeModal"
      @submit="updateData(idObat)"
      title="Updata Data"
      cancel-text="Batal"
      submit-text="Simpan"
    >
      <form @submit.prevent="updateData(idObat)" class="w-full mr-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Nama
            </label>
            <input
              v-model="nama_obat"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Harga
            </label>
            <input
              v-model="harga"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Deskripsi
            </label>
            <input
              v-model="deskripsi"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Stok
            </label>
            <input
              v-model="stok"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
      </form>
    </Modal>
    <Modal
      v-if="isAddModalShow"
      @cancel="isAddModalShow = false"
      @submit="addData()"
      title="Tambah Data"
      cancel-text="Batal"
      submit-text="Simpan"
    >
      <form @submit.prevent="addData()" class="w-full mr-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Nama
            </label>
            <input
              v-model="nama_obat"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phoneNumber"
              type="text"
              placeholder="Masukkan Nama Obat"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Harga
            </label>
            <input
              v-model="harga"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Deskripsi
            </label>
            <input
              v-model="deskripsi"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="studentId"
            >
              Stok
            </label>
            <input
              v-model="stok"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="studentId"
              type="text"
            />
          </div>
        </div>
      </form>
    </Modal>
    <div class="h-25 w-full bg-white">
      <div class="flex justify-between">
        <h1 class="my-8 mx-5 text-[32px]">Daftar Obat</h1>
        <hr />
        <button
          @click="isAddModalShow = true"
          class="mx-8 mr-10 mt-4 flex justify-end max-w-xs h-14 mx-auto bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          Tambah Obat
        </button>
      </div>
      <div class="w-full h-screen text-white">
        <div class="flex items-center justify-center p-20">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-lg text-left">
              <thead class="uppercase bg-blue-300">
                <th scope="col" class="px-6 py-3">NO.</th>
                <th scope="col" class="px-6 py-3">nama</th>
                <th scope="col" class="px-6 py-3">harga</th>
                <th scope="col" class="px-6 py-3">deskripsi</th>
                <th scope="col" class="px-6 py-3">stok</th>
                <th scope="col" class="px-6 py-3">aksi</th>
              </thead>
              <tbody
                v-if="!isLoading"
                class="text-black bg-white"
                v-for="(obat, index) in products"
                :key="obat.id"
              >
                <tr class="bg-white border-b dark:border-gray-700">
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td class="px-6 py-4 uppercase">{{ obat.nama_obat }}</td>
                  <td class="px-6 py-4 uppercase">{{ obat.harga }}</td>
                  <td class="px-6 py-4 uppercase">{{ obat.deskripsi }}</td>
                  <td class="px-6 py-4 uppercase">{{ obat.stok }}</td>

                  <td class="px-6 py-4 mr-5">
                    <div class="flex gap-4">
                      <img
                        @click="edit(obat.id)"
                        width="20"
                        :src="Edit"
                        alt=""
                      />
                      <img
                        @click="deleteProducts(obat.id)"
                        width="20"
                        :src="Delete"
                        alt=""
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody v-else class="text-black bg-white">
                <tr class="bg-white border-b dark:border-gray-700">
                  <td class="px-6 py-4 text-center">Sedang Memuat Data....</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-if="isLoading" />
</template>
