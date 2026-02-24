<template>
  <div class="settings-page">
    <header class="settings-header">
      <div class="header-top">
        <h1>Settings</h1>
        <button class="btn-upgrade-pro">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          Upgrade to Pro!
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <p class="lead-text">Configure integrations, visibility, notifications, and user settings</p>
    </header>

    <section class="panel">
      <h2 class="section-title"><span class="icon-wrap">🔄</span> Integrations & Data</h2>
      <div class="panel-grid">
        <div class="card card-integrations">
          <h3>Integrations</h3>
          <p class="card-subtitle">Connect your ERP and webhook integrations securely.</p>
          
          <div class="integration-item active-border">
            <div class="item-main">
              <div class="icon-box blue-subtle"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
              <div class="item-info">
                <strong>ERP (Required)</strong>
                <span class="badge-required">Required</span>
              </div>
              <div class="item-controls">
                <select class="minimal-select"><option>Monthly</option></select>
                <div class="day-picker">Day: <select class="minimal-select"><option>1</option></select></div>
                <button class="btn-navy-sm">Connect</button>
              </div>
            </div>
            <div class="last-sync">Last sync: 2024-01-24</div>
          </div>

          <div class="integration-item">
            <div class="item-main">
              <div class="icon-box orange-subtle"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>
              <div class="item-info"><strong>Zapier</strong></div>
              <button class="btn-outline-pro">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Enable for Pro
              </button>
            </div>
          </div>
        </div>

        <div class="card card-data-types">
          <div class="card-header-flex">
            <h3>DATA TYPES</h3>
            <span class="selected-count">1 Selected</span>
          </div>
          <div class="data-types-grid">
            <div v-for="type in dataTypes" :key="type.name" :class="['type-pill', { selected: type.checked }]">
              <div class="pill-top">
                <input type="checkbox" v-model="type.checked" />
                <span class="type-label">{{ type.name }}</span>
                <span v-if="type.req" class="badge-required">Required</span>
              </div>
              <span class="subtext">Read-only access</span>
            </div>
          </div>
          <div class="card-divider"></div>
          <div class="period-controls">
            <div class="period-input">
              <label>PERIOD</label>
              <div class="select-with-hint">
                <select class="minimal-select wide"><option>Last 24 Months</option></select>
                <span class="hint-green">✓ Optimal duration</span>
              </div>
            </div>
            <button class="btn-navy-config">Save Config</button>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <h2 class="section-title"><span class="icon-wrap">📡</span> Feed & Visibility</h2>
      <div class="card full-width card-feed">
        <div class="delivery-header">
          <h3>Delivery Channels</h3>
          <p class="card-subtitle">Manage connectivity endpoints.</p>
          <div class="channels-row">
            <div class="channel-box active-pill">
              <div class="channel-icon blue-text"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
              <div class="channel-meta">
                <strong>Email <span class="badge-live-pill">● ACTIVE</span></strong>
                <div class="muted-text">team@yourcompany.com</div>
              </div>
            </div>
            <div class="channel-box disabled-pill">
              <div class="channel-icon gray-text"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>
              <div class="channel-meta">
                <strong>Zapier <button class="btn-enable-sm">Enable for Pro</button></strong>
                <div class="muted-text">Webhooks Inactive</div>
              </div>
            </div>
          </div>
        </div>

        <div class="routing-grid">
          <div class="routing-table-col">
            <table class="simple-table">
              <thead><tr><th>CATEGORY ALERT ROUTING</th></tr></thead>
              <tbody>
                <tr v-for="cat in categories" :key="cat.name">
                  <td class="cat-cell">
                    <span class="cat-info"><span class="cat-icon">{{ cat.icon }}</span> {{ cat.name }}</span>
                    <span v-if="cat.live" class="badge-live-sm">● LIVE</span>
                    <div v-else class="upgrade-stack">
                      <button class="btn-lock-text">Upgrade to enable <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="reporting-table-col">
            <table class="simple-table">
              <thead><tr><th colspan="2">REQUIRED REPORTING</th></tr></thead>
              <tbody>
                <tr class="user-row-light">
                  <td class="user-cell"><img src="https://ui-avatars.com/api/?name=User&background=f1f5f9" class="avatar-min" /> team@yourcompany.com</td>
                  <td class="check-col">✓</td>
                </tr>
                <tr v-for="rep in reports" :key="rep.name">
                  <td>{{ rep.name }} <div class="muted-text">Include executive summary</div></td>
                  <td class="toggle-col"><input type="checkbox" checked class="switch-toggle" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <h2 class="section-title"><span class="icon-wrap">👥</span> User & Distributor Management</h2>
      <div class="card full-width card-users">
        <p class="card-subtitle-top">Centralized platform to manage user accounts, define roles, and assign granular permissions within Arodus Risk.</p>
        <div class="users-controls">
          <div class="tab-switcher">
            <button class="tab active">Users</button>
            <button class="tab">Roles</button>
            <button class="tab">Permissions</button>
          </div>
          <div class="users-actions-bar">
            <div class="search-box-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Filter users by name or email..." />
            </div>
            <button class="btn-navy-add"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line></svg> Add New User</button>
          </div>
        </div>

        <table class="settings-user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>REPORTING TYPE</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in pagedUsers" :key="u.email">
              <td class="user-name">
                <div>
                  <div class="avatar-initials">{{ getInitials(u.name) }}</div>
                  <div class="user-text">
                    <div class="name-bold">{{ u.name }}</div>
                    <div class="email-muted">{{ u.email }}</div>
                  </div>
                </div>
              </td>
              <td class="reporting-type">
                <div class="reporting-pill-select">
                  <span class="rep-icon">📉</span>
                  <select><option>{{ u.reporting }}</option></select>
                </div>
              </td>
              <td class="user-role"><span class="role-pill-solid" :class="u.role.toLowerCase()">{{ u.role }}</span></td>
              <td class="user-status"><span class="status-pill-solid" :class="u.status.toLowerCase()">{{ u.status }}</span></td>
              <td class="user-last-login">{{ u.lastLogin }}</td>
              <td class="user-actions"><button class="btn-more">⋮</button></td>
            </tr>
          </tbody>
        </table>
        <div class="pagination-footer">
          <div class="pagination">
            <button @click="prevPageUsers" :disabled="page===1">&lt;</button>
            <button
              v-for="p in pagesArray"
              :key="p"
              :class="{ active: p === page }"
              @click="page = p"
            >
              {{ p }}
            </button>
            <button @click="nextPageUsers" :disabled="page===pages"> &gt; </button>
          </div>
        </div>
      </div>
    </section>

    <div class="sticky-footer-save">
      <button class="btn-revert">Revert to Defaults</button>
      <button class="btn-navy-primary" @click="saveChanges">Save Changes</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const dataTypes = reactive([
  { name: 'Vendor Spend', req: true, checked: true },
  { name: 'Income Statement', checked: false },
  { name: 'Balance Sheet', checked: false },
  { name: 'Cash Flow Statement', checked: false },
  { name: 'AR Aging', checked: false },
  { name: 'AP Aging', checked: false }
])

const categories = [
  { name: 'Operational Risk', icon: '⚡', live: true },
  { name: 'Cybersecurity Risk', icon: '🛡️', live: false },
  { name: 'Financial Risk', icon: '$', live: false },
  { name: 'Compliance Risk', icon: '⚖️', live: false },
  { name: 'Reputational Risk', icon: '📢', live: false },
  { name: 'Strategic Risk', icon: '🎯', live: false }
]

const reports = [
  { name: 'Monthly Risk Report' },
  { name: 'Financial Data Report' }
]

const users = reactive([
  { name: 'Alice Johnson', email: 'alice.johnson@arodusr.com', reporting: 'Live', role: 'Admin', status: 'Active', lastLogin: '2024-07-29' },
  { name: 'Bob Williams', email: 'bob.williams@arodusr.com', reporting: 'Financial Data', role: 'Editor', status: 'Active', lastLogin: '2024-07-28' },
  { name: 'Charlie Davis', email: 'charlie.davis@arodusr.com', reporting: 'Financial Data', role: 'Viewer', status: 'Inactive', lastLogin: '2024-07-25' },
  { name: 'Diana Miller', email: 'diana.miller@arodusr.com', reporting: 'Live', role: 'Admin', status: 'Active', lastLogin: '2024-07-29' },
  { name: 'Eve Brown', email: 'eve.brown@arodusr.com', reporting: 'Monthly', role: 'Editor', status: 'Active', lastLogin: '2024-07-27' },
  { name: 'Frank Castle', email: 'frank.castle@arodusr.com', reporting: 'Live', role: 'Viewer', status: 'Active', lastLogin: '2024-08-01' },
  { name: 'Grace Hopper', email: 'grace.hopper@arodusr.com', reporting: 'Financial Data', role: 'Editor', status: 'Active', lastLogin: '2024-07-31' },
  { name: 'Henry McCoy', email: 'henry.mccoy@arodusr.com', reporting: 'Monthly', role: 'Viewer', status: 'Inactive', lastLogin: '2024-07-20' },
  { name: 'Iris West', email: 'iris.west@arodusr.com', reporting: 'Live', role: 'Admin', status: 'Active', lastLogin: '2024-08-02' },
  { name: 'Jack Murdock', email: 'jack.murdock@arodusr.com', reporting: 'Financial Data', role: 'Editor', status: 'Active', lastLogin: '2024-07-30' },
  { name: 'Katherine Pryde', email: 'kat.pryde@arodusr.com', reporting: 'Monthly', role: 'Viewer', status: 'Active', lastLogin: '2024-08-01' },
  { name: 'Leo Fitz', email: 'leo.fitz@arodusr.com', reporting: 'Live', role: 'Editor', status: 'Active', lastLogin: '2024-07-29' },
  { name: 'Maya Lopez', email: 'maya.lopez@arodusr.com', reporting: 'Financial Data', role: 'Viewer', status: 'Inactive', lastLogin: '2024-06-15' },
  { name: 'Nathan Summers', email: 'nathan.summers@arodusr.com', reporting: 'Monthly', role: 'Admin', status: 'Active', lastLogin: '2024-08-02' },
  { name: 'Olivia Octavius', email: 'liv.oct@arodusr.com', reporting: 'Live', role: 'Editor', status: 'Active', lastLogin: '2024-08-03' }
])



// pagination state (add near other refs)
import { ref, computed } from 'vue' // if not already imported

const page = ref(1)
const perPage = 5

const pages = computed(() => Math.max(1, Math.ceil(filteredUsers.value.length / perPage)))
const pagesArray = computed(() => Array.from({ length: pages.value }, (_, i) => i + 1))

const pagedUsers = computed(() => {
  const start = (page.value - 1) * perPage
  return filteredUsers.value.slice(start, start + perPage)
})

function prevPageUsers() { if (page.value > 1) page.value-- }
function nextPageUsers() { if (page.value < pages.value) page.value++ }



const searchQuery = ref('');

// Filter logic (optional but recommended since you have a search bar)
const filteredUsers = computed(() => {
  return users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})



const getInitials = (n: string) => n.split(' ').map(s => s[0]).join('').toUpperCase()
const saveChanges = () => alert('Settings saved successfully.')
</script>

<style lang="scss">
.settings-page {
  .settings-header {
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .lead-text { color: #64748b; font-size: 14px; }
  }

  .section-title { font-size: 18px; font-weight: 700; color: #1e3a8a; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
  .panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
  .card.full-width { grid-column: 1 / -1; }

  // Integrations & Period
  .integration-item {
    border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-bottom: 12px;
    &.active-border { border-color: #3b82f6; }
    .item-main { display: flex; align-items: center; gap: 14px; }
    .icon-box { width: 44px; height: 44px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .blue-subtle { background: #eff6ff; color: #3b82f6; }
    .orange-subtle { background: #fff7ed; color: #f97316; }
    .item-info { flex: 1; strong { font-size: 14px; display: block; } }
    .item-controls { display: flex; gap: 10px; align-items: center; }
    .last-sync { text-align: right; font-size: 11px; color: #94a3b8; margin-top: 8px; }
  }

  // Data Types Grid
  .data-types-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0;
    .type-pill {
      border: 1px solid #f1f5f9; background: #f8fafc; border-radius: 8px; padding: 12px;
      &.selected { border-color: #3b82f6; background: #f0f7ff; }
      .pill-top { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
      .type-label { font-size: 13px; font-weight: 700; color: #1e293b; }
      .subtext { font-size: 11px; color: #94a3b8; padding-left: 26px; }
    }
  }

  // Feed Section
  .channels-row { display: flex; gap: 20px; margin-top: 20px; }
  .channel-box {
    flex: 1; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; display: flex; gap: 12px; align-items: center;
    &.active-pill { background: #fff; }
    &.disabled-pill { background: #fcfcfc; opacity: 0.8; }
    .channel-meta { strong { font-size: 14px; display: block; } }
  }

  .routing-grid { display: grid; grid-template-columns: 1fr 340px; gap: 24px; border-top: 1px solid #f1f5f9; padding-top: 24px; margin-top: 24px; }
  .simple-table {
    width: 100%; border-collapse: collapse;
    th { text-align: left; font-size: 11px; color: #64748b; letter-spacing: 0.05em; padding-bottom: 12px; }
    td { padding: 12px 0; border-bottom: 1px solid #f8fafc; font-size: 13px; }
    .cat-cell { display: flex; justify-content: space-between; align-items: center; }
    .badge-live-sm { background: #ecfdf5; color: #10b981; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 12px; }
    .btn-lock-text { border: none; background: #f8fafc; color: #94a3b8; font-size: 11px; display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 6px; }
  }

  // User Management Section
  .tab-switcher {
    display: flex; background: #f1f5f9; padding: 4px; border-radius: 8px; gap: 4px; max-width: 420px;
    .tab { flex: 1; border: none; background: transparent; padding: 10px; font-size: 14px; font-weight: 600; color: #64748b; cursor: pointer; border-radius: 6px; }
    .tab.active { background: white; color: #1e293b; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  }

  .users-actions-bar {
    display: flex; justify-content: space-between; margin: 24px 0;
    .search-box-wrap {
      position: relative; flex: 1; max-width: 650px;
      svg { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #94a3b8; }
      input { width: 100%; padding: 12px 12px 12px 42px; border: 1px solid #e2e8f0; border-radius: 8px; outline: none; }
    }
  }

  .settings-user-table {
    width: 100%;
    
    th {
      text-align: left;
      color: #64748b;
      font-size: 11px;
      letter-spacing: 0.05em;
      padding: 12px;
      border-bottom: 1px solid #f1f5f9;
      
      &:last-child { text-align: center; }
    }
    
    td {
      padding: 18px 12px;
      border-bottom: 1px solid #f1f5f9;
      vertical-align: middle;

      &.user-name > div {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      &.reporting-type > div {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      &.user-role {

      }
      
      &.user-status {

      }

      &.user-last-login {

      }
      
      &.user-actions {
        text-align: center;
      }
    }
    .avatar-initials { width: 40px; height: 40px; background: #1e3a8a; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }
    .name-bold { font-weight: 700; color: #1e293b; font-size: 14px; }
    .status-pill-solid {
      padding: 5px 14px; border-radius: 14px; font-size: 11px; font-weight: 800;
      &.active { background: #dcfce7; color: #15803d; }
      &.inactive { background: #fee2e2; color: #b91c1c; }
    }
  }

  .pagination {
    display:flex;
    gap:8px;
    justify-content:center;
    margin-top:12px;
  
    button {
      padding:6px 10px;
      border-radius:8px;
      background:#fff;
      border:1px solid #e6eef8;
      cursor:pointer;

      &.active {
        background:#0b5fff;
        color:#fff;
        border-color:#0b5fff;
      }

      &:disabled {
        opacity:0.5;
        cursor:not-allowed;
      }
    }
  }



  .sticky-footer-save {
    background: white;
    padding: 24px 40px;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    .btn-navy-primary { background: #1e3a8a; color: white; border: none; padding: 14px 32px; border-radius: 8px; font-weight: 800; cursor: pointer; }
    .btn-revert { /*background: none; border: none;*/ color: #64748b; font-weight: 700; cursor: pointer; }
  }

  // Reusable Component Helpers
  .btn-upgrade-pro { background: #1e3a8a; color: #fff; border: none; padding: 10px 18px; border-radius: 20px; font-weight: 800; font-size: 12px; display: flex; align-items: center; gap: 8px; cursor: pointer; }
  .badge-required { background: #fee2e2; color: #b91c1c; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; margin-left: 8px; }
  .hint-green { color: #10b981; font-size: 11px; font-weight: 700; }
  .minimal-select { border: 1px solid #e2e8f0; background: #fff; border-radius: 6px; padding: 6px 10px; font-size: 13px; outline: none; }
  .btn-navy-sm { background: #1e3a8a; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; }
  .btn-navy-add { background: #1e3a8a; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 14px; display: flex; align-items: center; gap: 8px; cursor: pointer; }
}
</style>