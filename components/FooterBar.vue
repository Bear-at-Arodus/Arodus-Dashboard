<template>
  <footer id="footer">
    <div>
      <ul>
        <li v-for="l in leftLinks" :key="l.href"><a :href="l.href">{{ l.label }}</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="l in rightLinks" :key="l.href"><a :href="l.href">{{ l.label }}</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const leftLinks = ref([
  { label: 'Arodus Risk', href: '/arodus-risk' },
  { label: 'Legal', href: '/legal' },
  { label: 'Support', href: '/support' }
])

const rightLinks = ref([
  { label: 'LinkedIn', href: '/linkedin' },
  { label: 'Twitter', href: '/twitter' },
  { label: 'GitHub', href: '/github' }
])
</script>

<style scoped>
#footer { display:flex; justify-content:space-between; padding:10px }
#footer ul { display:flex; gap:12px; padding:0; margin:0; list-style:none }
#footer a { color:inherit; text-decoration:none }
</style>
