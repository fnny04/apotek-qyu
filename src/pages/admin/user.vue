<script setup>
import Sidebar from "../../components/sidebar.vue";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { supabase } from "../../supabase";
import { ref, onMounted } from "vue";
import Modal from "../../components/editModal.vue";
import Loading from "../../components/loading.vue";
import Swal from "sweetalert2";

//show loading
const isLoading = ref(false);
//show modal
const isModalShow = ref(false);
const isAddModalShow = ref(false);

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
  nama.value = "";
  email.value = "";
  password.value = "";
};
//get all user
const users = ref({});
const getUsers = async () => {
  isLoading.value = true;
  const { data, error } = await supabase.from("user").select("*");
  users.value = data;
  isLoading.value = false;
};
//define
const idUser = ref("");
const nama = ref("");
const email = ref("");
const password = ref("");
//update user
const updateData = async (id) => {
  try {
    const data = {
      name: nama.value,
      email: email.value,
      password: password.value,
    };
    const { error } = await supabase.from("user").update(data).eq("id", id);
    if (error) throw error;
    Swal.fire("Succes", "Data Berhasil Di Update", "success");
    clearForm();
    closeModal();
    getUsers();
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

const addData = async () => {
  try {
    const data = {
      name: nama.value,
      email: email.value,
      password: password.value,
    };
    const { error } = await supabase.from("user").insert(data);
    if (error) throw error;
    Swal.fire("Succes", "User Berhasil Di Tambah", "success");
    clearForm();
    getUsers();
    isAddModalShow.value = false;
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
//delete user
const deleteUsers = async (id) => {
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
        const { error } = await supabase.from("user").delete().eq("id", id);
        getUsers();
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
  const { data } = await supabase.from("user").select("*").eq("id", id);
  idUser.value = data[0].id;
  nama.value = data[0].name;
  email.value = data[0].email;
  password.value = data[0].password;
  showModal();
};

//addUser
const addUsers = async () => {
  try {
    const { error } = await supabase.from("user").insert([
      {
        name: nama.value,
        email: email.value,
        password: password.value,
      },
    ]);
    if (error) throw error;
    Swal.fire(
      "Selamat!",
      "Selamat Anda Telah terdaftar di Makrab 2022",
      "success"
    );
    closeModal();
  } catch (error) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

onMounted(() => {
  getUsers();
});
</script>
<template>
  <div class="flex bg-gray-100">
    <Sidebar />
    <Modal
      v-if="isModalShow"
      @cancel="closeModal"
      @submit="updateData(idUser)"
      title="Updata Data"
      cancel-text="Batal"
      submit-text="Simpan"
    >
      <form @submit.prevent="updateData(idUser)" class="w-full mr-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="flex justify-start text-gray-700 text-xs font-bold mb-2"
              for="phoneNumber"
            >
              Nama
            </label>
            <input
              v-model="nama"
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
              Email
            </label>
            <input
              v-model="email"
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
              Password
            </label>
            <input
              v-model="password"
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
              v-model="nama"
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
              Email
            </label>
            <input
              v-model="email"
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
              Password
            </label>
            <input
              v-model="password"
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
        <h1 class="my-8 mx-5 text-[32px]">Daftar User</h1>
        <hr />
        <button
          @click="isAddModalShow = true"
          class="mx-8 mr-10 mt-4 flex justify-end max-w-xs h-14 mx-auto bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          Tambah User
        </button>
      </div>
      <div class="w-full h-screen text-white">
        <div class="flex items-center justify-center p-20">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-lg text-left">
              <thead class="uppercase bg-blue-300">
                <th scope="col" class="px-6 py-3">NO.</th>
                <th scope="col" class="px-6 py-3">email</th>
                <th scope="col" class="px-6 py-3">nama</th>
                <th scope="col" class="px-6 py-3">password</th>
                <th scope="col" class="px-6 py-3">aksi</th>
              </thead>
              <tbody
                v-if="!isLoading"
                class="text-black bg-white"
                v-for="(user, index) in users"
                :key="users.id"
              >
                <tr class="bg-white border-b dark:border-gray-700">
                  <td class="px-6 py-4">{{ index + 1 }}</td>
                  <td class="px-6 py-4 uppercase">{{ user.email }}</td>
                  <td class="px-6 py-4 uppercase">{{ user.name }}</td>
                  <td class="px-6 py-4 uppercase">{{ user.password }}</td>
                  <td class="px-6 py-4 mr-5">
                    <div class="flex gap-4">
                      <img
                        @click="edit(user.id)"
                        width="20"
                        :src="Edit"
                        alt=""
                      />
                      <img
                        @click="deleteUsers(user.id)"
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
