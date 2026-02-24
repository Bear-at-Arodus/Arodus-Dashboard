<template>
    <nav id="sidebar-nav">
        <ul id="sidebar-nav-list">
            <li v-for="item in items" :key="item.href" :class="['side-nav-list-item', { active: isActive(item.href) }]">
                <NuxtLink :to="item.href" class="side-nav-list-item-link">
                    <div class="side-nav-list-item-text">{{ item.label }}</div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const items = [
  { label: 'Dashboard', href: '/' },
  //{ label: 'Insights', href: '/insights' },
  //{ label: 'Vendors Management', href: '/vendors' },
  //{ label: 'Alerts', href: '/alerts' },
  //{ label: 'Analytics', href: '/analytics' },
  //{ label: 'Reports', href: '/reports' },
  //{ label: 'Integrations', href: '/integrations' },
  //{ label: 'Audit/History', href: '/audit' },
  { label: 'Vendor Management', href: '/vendor-management' },
  { label: 'Events Feed', href: '/events-feed' },
  { label: 'Settings', href: '/settings' },
  { label: 'Help/Support', href: '/help' },
  //{ label: 'User Management/Admin', href: '/admin' }
]

import { ref, onMounted, watch } from 'vue'

const routerRef = ref<any>(null)
const routePath = ref('')

onMounted(() => {
    try {
        const r = useRoute()
        const router = useRouter()
        routerRef.value = router
        routePath.value = r.path || (router.currentRoute?.value?.path ?? '')
        // update on navigation
        router.afterEach((to) => { routePath.value = to.path })
        watch(() => r.path, (p) => { routePath.value = p })
    } catch (e) {
        console.warn('Sidebar: useRoute/useRouter not available on mount', e)
    }
})

const go = (href: string) => routerRef.value?.push(href)
const isActive = (href: string) => routePath.value === href
</script>

<style lang="scss">
</style>
