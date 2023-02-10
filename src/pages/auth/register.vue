<script setup lang="ts">
import register from "../../assets/illustration/Register.svg";
import { supabase } from "../../supabase";
import Swal from "sweetalert2";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const signUp = reactive({
  email: "",
  nama: "",
  password: "",
  confirm: "",
});

const clearForm = () => {
  signUp.email = "";
  signUp.nama = "";
  signUp.password = "";
  signUp.confirm = "";
};

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isValid = computed(() => {
  return (
    signUp.email.length > 0 &&
    signUp.nama.length > 0 &&
    signUp.password.length > 7 &&
    JSON.stringify(signUp.confirm) === JSON.stringify(signUp.password) &&
    regex.test(signUp.email)
  );
});

const submitData = async () => {
  try {
    const { error } = await supabase.from("user").insert([
      {
        email: signUp.email,
        name: signUp.nama,
        password: signUp.password,
      },
    ]);
    clearForm();
    if (error) throw error;
    Swal.fire("Terimakasih", "Terimakasih atas Partisipasi nya", "success");
    router.push("/login");
  } catch (error: any) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};
</script>

<template>
  <section class="h-screen">
    <div class="bg-blue-300 text-gray-500 w-full overflow-hidden h-screen">
      <div class="md:flex w-full h-screen">
        <div class="hidden order-2 md:block w-1/2 py-10 px-10">
          <img width="500" :src="register" alt="" />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">
              REGISTER {{ isValid }}
            </h1>
            <p>Enter your information to register</p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Name</label>
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    v-model="signUp.nama"
                    type="text"
                    placeholder="Masukkan Nama anda"
                    class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Email</label>
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <div class="flex flex-col w-full items-start">
                    <input
                      v-model="signUp.email"
                      type="email"
                      placeholder="Masukkan Email anda"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    />
                    <span
                      v-if="
                        signUp.email.length > 4 && !regex.test(signUp.email)
                      "
                      class="text-red-900 font-medium"
                      >Email tidak valid</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1"
                  >Password</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    v-model="signUp.password"
                    type="password"
                    placeholder="Masukkan Password anda"
                    class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-12">
                <label for="" class="text-xs font-semibold px-1"
                  >Confirm Password</label
                >
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    v-model="signUp.confirm"
                    type="password"
                    placeholder="Masukkan konfirmasi password"
                    required
                    class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-5">
                <button
                  :disabled="!isValid"
                  @click="submitData()"
                  class="block w-full disabled:bg-gray-400 max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
