<!-- src/components/Sidebar.vue -->
<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <!-- Tombol Mobile -->
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="text-gray-800 bg-transparent hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2 ms-3 mt-3 inline-flex sm:hidden">
       <span class="sr-only">Open sidebar</span>
       <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
       </svg>
    </button>

    <!-- Sidebar Utama -->
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
       <div class="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-200 shadow-sm">
          <div class="flex items-center mb-6 px-2">
            <img src="/src/assets/logo.png" class="h-12 w-12 object-contain me-3 shrink-0" alt="Logo Perusahaan" />
            <span class="text-sm text-gray-900 font-bold leading-tight">CV. Surya Abadi Telur Asin</span>
          </div>
          
          <ul class="space-y-2 font-medium">
             
             <!-- 1. Akses Login Karyawan -->
             <li>
                <a href="#" class="flex items-center px-2 py-1.5 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-blue-600 group transition-colors">
                   <svg class="shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Akses Login</span>
                </a>
             </li>

             <!-- 2. Data Karyawan (Aktif) -->
             <li>
                <RouterLink to="/karyawan" 
                   class="flex items-center px-2 py-1.5 rounded-lg group transition-colors"
                   :class="route.path === '/karyawan' || route.path === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'">
                   <svg class="shrink-0 w-5 h-5 transition duration-75"
                      :class="route.path === '/karyawan' || route.path === '/' ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'" 
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Data Karyawan</span>
                </RouterLink>
             </li>

             <!-- 3. Data Customer -->
             <li>
                <a href="#" class="flex items-center px-2 py-1.5 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-blue-600 group transition-colors">
                   <svg class="shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Data Customer</span>
                </a>
             </li>

             <!-- 4. Data Supplier -->
             <li>
                <a href="#" class="flex items-center px-2 py-1.5 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-blue-600 group transition-colors">
                   <svg class="shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Data Supplier</span>
                </a>
             </li>

             <!-- 5. Log Out -->
             <li>
                <a href="#" class="flex items-center px-2 py-1.5 mt-4 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 group transition-colors">
                   <svg class="shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                </a>
             </li>

          </ul>
       </div>
    </aside>
</template>