<template>
  <header class="header-panel">
    <HeaderBar />
  </header>
  <div class="content-panel">
    <aside class="side-panel">
      <Sidebar />
    </aside>
    <main :class="['main-panel', pageClass]">
      <NuxtPage />
    </main>
  </div>
  <footer class="footer-panel">
    <FooterBar />
  </footer>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageClass = computed(() => {
  const name = route.name ? String(route.name) : ''
  return name ? `${name.replace(/[^A-Za-z0-9_-]/g, '-')}-page` : ''
})
</script>

<style lang="scss">

</style>
