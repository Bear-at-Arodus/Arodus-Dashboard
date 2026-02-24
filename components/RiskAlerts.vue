<template>
    <div id="risk-alerts">
        <div v-for="a in alerts" :key="a.id" class="risk-alerts-item">
            <button class="risk-item">
            <span>{{ a.label }}</span>
            <span class="count">({{ a.count }})</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const alerts = ref([
  { id: 'cyber', label: 'Cybersecurity', count: 3 },
  { id: 'compliance', label: 'Compliance', count: 2 },
  { id: 'operational', label: 'Operational', count: 2 },
  { id: 'financial', label: 'Financial', count: 1 }
])
</script>

<style scoped>
#risk-alerts { display:flex; gap:8px; align-items:center }
.risk-alerts-item .risk-item { display:flex; gap:6px; align-items:center }
</style>
