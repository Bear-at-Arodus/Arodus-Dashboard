<template>
  <div id="header-left">
    <div id="header-logo">
      <a href="/">
        <div class="logo-box">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="logo-text">
          <span class="brand-top">Arodus</span>
          <span class="brand-bottom">Risk</span>
        </div>
      </a>
    </div>

    <div class="header-search">
      <div class="search-input-wrapper">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input v-model="search" type="text" placeholder="Search vendors or risks...">
      </div>
    </div>
  </div>

  <div id="header-right">
    <nav v-show="showAlerts" class="risk-nav">
      <div class="risk-link cybersecurity">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Cybersecurity</span>
        <span class="count">(3)</span>
      </div>
      <div class="risk-link compliance">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        <span>Compliance</span>
        <span class="count">(2)</span>
      </div>
      <div class="risk-link operational">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
        <span>Operational</span>
        <span class="count">(2)</span>
      </div>
      <div class="risk-link financial">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        <span>Financial</span>
        <span class="count">(1)</span>
      </div>
    </nav>

    <div class="divider"></div>

    <div id="header-actions">
      <button class="dismiss-btn" @click="toggleAlerts">
        {{ showAlerts ? 'Dismiss All' : `View All Alerts (${totalAlerts})` }}
      </button>
      <div class="user-avatar">
        <img :src="user.avatar" :alt="user.name" width="34" height="34">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
const user = ref({ name: 'Your User', avatar: 'https://ui-avatars.com/api/?name=User&background=f1f5f9&color=475569' })

// Logic variables
const showAlerts = ref(true)
const totalAlerts = ref(8) // Calculated sum of (3+2+2+1)

const toggleAlerts = () => {
  showAlerts.value = !showAlerts.value
}
</script>

<style scoped lang="scss">

#header-left, #header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

#header-logo {
    flex: 0 0 215px;
    a {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;

    .logo-text {
        display: flex;
        flex-direction: column;
        span { font-size: 15px; font-weight: 800; line-height: 1; color: #1e3a8a; }
        .brand-bottom { font-size: 14px; }
    }
    }
}

#header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 14px;
  width: 320px;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    margin-left: 10px;
    width: 100%;
    color: #475569;
  }
}

.risk-nav {
  display: flex;
  gap: 24px;
  align-items: center;

  .risk-link {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #1e293b;

    &.cybersecurity { color: #ef4444; } // Red per screenshot
    .count { color: #64748b; font-weight: 400; }
  }
}

.divider {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
}

.dismiss-btn {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);

  &:hover { background: #f8fafc; }
}

.user-avatar img {
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #e2e8f0;
}
</style>