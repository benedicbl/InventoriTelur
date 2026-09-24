import { createRouter, createWebHistory } from 'vue-router'
// Ubah baris import ini agar menunjuk ke file dataKaryawan.vue
import DataKaryawan from '@/views/dataKaryawan.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Rute utama (home) sekarang akan langsung membuka Data Karyawan
      path: '/',
      name: 'home',
      component: DataKaryawan
    },
    {
      // Kita juga menyiapkan rute eksplisit untuk /karyawan agar menu Sidebar berfungsi
      path: '/karyawan',
      name: 'karyawan',
      component: DataKaryawan
    }
  ]
})

export default router