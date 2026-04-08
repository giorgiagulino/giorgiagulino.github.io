<template>
  <div class="min-h-screen bg-[#faf8f5] text-stone-900" style="font-family: Inter, system-ui, sans-serif">
    <Navbar />
    <main class="pt-16">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
