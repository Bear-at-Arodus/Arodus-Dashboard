<template>
  <section style="padding:16px">
    <h1>Page</h1>
    <p>This is a fallback page for unmatched routes.</p>
    <p><strong>Route:</strong> {{ route.path }}</p>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({ layout: false })
</script>

<style scoped>
section { font-family: Arial, Helvetica, sans-serif }
</style>
