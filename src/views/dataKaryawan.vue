<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
    <Sidebar />
    <div class="p-4 sm:ml-64">
       <div class="p-4 rounded-lg mt-14">
          
          <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 class="text-xl font-bold text-gray-800">
                  Kelola Data Karyawan
              </h2>
          </div>

    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
              <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                  <tr>
                      <th scope="col" class="px-6 py-3 font-medium">
                          No
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Nama
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Posisi
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Pemeriksa
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Pengemas
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Status Aktif
                      </th>
                      <th scope="col" class="px-6 py-3 font-medium">
                          Aksi
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-neutral-primary border-b border-default">
                      <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                          1
                      </th>
                      <td class="px-6 py-4">
                          Alim
                      </td>
                      <td class="px-6 py-4">
                          Staff Gudang
                      </td>
                      <td class="px-6 py-4">
                          <div class="flex items-center">
                              <input type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                           </div>
                      </td>
                      <td class="px-6 py-4">
                           <div class="flex items-center">
                              <input type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                           </div>
                      </td>
                      
                      
                      <td class="px-6 py-4">
                           <span v-if="true" class="inline-flex items-center bg-green-100 border border-green-400 text-green-800 text-xs font-medium px-2.5 py-1 rounded-md">
                              <span class="w-2 h-2 me-1.5 bg-green-500 rounded-full"></span>
                              Aktif
                           </span>
                           <span v-else class="inline-flex items-center bg-red-100 border border-red-400 text-red-800 text-xs font-medium px-2.5 py-1 rounded-md">
                              <span class="w-2 h-2 me-1.5 bg-red-500 rounded-full"></span>
                              Tidak Aktif
                           </span>
                      </td>
                      
                      <td class="px-6 py-4">
                        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
                            Edit
                        </button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
   </div>
</div>
</template>