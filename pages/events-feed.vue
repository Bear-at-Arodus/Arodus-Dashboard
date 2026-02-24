<template>
  <div class="events-page">
    <header class="events-page-header">
      <h1>Events Feed</h1>

      <div class="lead">
        <div>
          <span>A curated intelligence feed of high-impact vendor events from the last 5 years.</span>
        </div>
        <div class="view-controls">
          <button :class="['btn', {active: view==='my'}]" @click="view='my'">My Vendors</button>
          <button :class="['btn', {active: view==='all'}]" @click="view='all'">All Vendors</button>
        </div>
      </div>
      

      <div class="controls">
        <div class="filter-bar">
          <div class="filters">
            <div class="filter-group">
              <span class="icon">📅</span>
              <select v-model="filters.range">
                <option>Last 5 Years</option>
                <option>Last 2 Years</option>
                <option>Last 12 Months</option>
              </select>
            </div>

            <div class="filter-group">
              <span class="icon">⏳</span>
              <select v-model="filters.vendor">
                <option value="">Vendor</option>
                <option>CrowdStrike</option>
                <option>SolarWinds</option>
                <option>Apache Software Fdn</option>
              </select>
            </div>

            <div class="filter-group">
              <span class="icon">🛡️</span>
              <select v-model="filters.risk">
                <option value="">Risk Level</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
              </select>
            </div>

            <div class="filter-group">
              <span class="icon">📊</span>
              <select v-model="filters.category">
                <option value="">Category</option>
                <option>Cybersecurity</option>
                <option>Supply Chain</option>
                <option>Financial</option>
              </select>
            </div>
          </div>

          <div class="sort-by">
            <label>Sort by:</label>
            <select>
              <option>View Count (High-Low)</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <section class="feed-list">
      <div class="feed-list">
        <div v-for="(e, i) in pagedEvents" :key="e.id" :class="['event-card', e.severity.toLowerCase()]">
          
          <div class="card-head">
            <div class="left">
              <div class="logo-wrapper">
                <div class="logo">{{ logoText(e.vendor) }}</div>
                <span class="status-dot"></span>
              </div>
              <div class="meta">
                <div class="vendor-row">
                  <span class="vendor">{{ e.vendor }}</span>
                  <span class="separator">|</span>
                  <span class="category">{{ e.category }}</span>
                </div>
                <div class="severity-row">
                  <span class="badge-severity">{{ e.severity.toUpperCase() }}</span>
                  <span class="impact">🛡️ {{ e.impact }}</span>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="date">{{ e.date }}</div>
              <div class="detected">Detected 2y ago</div>
            </div>
          </div>

          <h3 class="title">{{ e.title }}</h3>
          <p class="summary">{{ e.summary }}</p>

          <div class="tag-section">
            <div class="reported-label">REPORTED BY</div>
            <div class="tag-row">
              <span class="tag source" v-for="(t, index) in e.tags" :key="t" :class="{ first: index === 0 }">
                {{ t }}
              </span>
            </div>
          </div>

          <hr class="divider" />

          <footer class="card-foot">
            <div class="left-foot">
              <span class="views">👁️ {{ e.views }}</span>
            </div>
            <div class="right-foot">
              <button class="btn-link" @click="saveForLater(e)">Save for Later</button>
              <button class="btn-outline-blue" @click="openAnalysis(e)">
                Full Analysis <span class="external-icon">↗</span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </section>

    <nav class="pagination">
      <button @click="prevPage" :disabled="page===1">&lt;</button>
      <button v-for="p in pages" :key="p" :class="{active: p===page}" @click="page=p">{{ p }}</button>
      <button @click="nextPage" :disabled="page===pages.length">&gt;</button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ title: 'Events Feed' })

const view = ref('all')
const page = ref(1)
const perPage = 2

const filters = ref({ range: 'Last 5 Years', vendor: '', risk: '', category: '' })

const events = ref([
  {
    id: 1,
    vendor: 'CrowdStrike',
    category: 'Operational',
    impact: 'Global Impact',
    severity: 'Critical',
    date: '2024-07-19',
    title: 'CrowdStrike Update Glitch Disrupts Global IT Infrastructure',
    summary: 'A defective software update crashed millions of Windows systems, grounding flights, disrupting banking services, and halting surgeries worldwide.',
    tags: ['TechCrunch', '#System Disruption', '#Global Outage'],
    views: '43K'
  },
  {
    id: 2,
    vendor: 'Silicon Valley Bank',
    category: 'Financial',
    impact: 'Global Impact',
    severity: 'Critical',
    date: '2023-03-10',
    title: 'Silicon Valley Bank Collapses After Failing to Raise Capital',
    summary: 'A run on deposits led to the sudden failure of SVB, forcing regulators to step in and causing liquidity crises for thousands of startups.',
    tags: ['Financial Times', '#Bankruptcy', '#Liquidity Crisis'],
    views: '39K'
  },
  {
    id: 3,
    vendor: 'Evergreen Marine',
    category: 'Supply Chain',
    impact: 'Global Impact',
    severity: 'High',
    date: '2021-03-23',
    title: 'Ever Given Container Ship Runs Aground in Suez Canal',
    summary: 'The 400-meter vessel blocked the Suez Canal for six days, freezing nearly $10 billion in trade per day and exacerbating global supply chain bottlenecks.',
    tags: ['Reuters', '#Logistics', '#Trade Blockage'],
    views: '31K'
  },
  {
    id: 4,
    vendor: 'SolarWinds',
    category: 'Cybersecurity',
    impact: 'Global Impact',
    severity: 'Critical',
    date: '2020-12-13',
    title: 'Massive Supply Chain Attack Compromises US Agencies via Orion Update',
    summary: 'Hackers inserted malicious code into the Orion software update, infiltrating thousands of organizations including US government agencies.',
    tags: ['Wired', '#Data Breach', '#State-Sponsored'],
    views: '28K'
  },
  {
    id: 5,
    vendor: 'Apache Software Fdn',
    category: 'Cybersecurity',
    impact: 'Global Impact',
    severity: 'Critical',
    date: '2021-12-09',
    title: 'Log4j Vulnerability "Log4Shell" Exposes Millions of Servers',
    summary: 'A zero-day vulnerability in the widely used Java logging library allowed attackers to execute arbitrary code, affecting enterprise application and cloud service globally.',
    tags: ['Ars Technica', '#Zero-Day', '#RCE'],
    views: '25K'
  },
  {
    id: 6,
    vendor: 'Kaseya',
    category: 'Cybersecurity',
    impact: 'Global Impact',
    severity: 'High',
    date: '2021-07-02',
    title: 'Ransomware Attack on Kaseya VSA Hits Managed Service Providers',
    summary: 'REvil gang exploited Kaseya’s remote management software to distribute ransomware to MSPs and their customers, encrypting data for up to 1,500 businesses.',
    tags: ['ZDNet', '#Ransomware', '#MSP'],
    views: '20K'
  }
])

const filtered = computed(() => {
  let list = events.value.slice()
  if (filters.value.vendor) list = list.filter(e => e.vendor === filters.value.vendor)
  if (filters.value.risk) list = list.filter(e => e.severity === filters.value.risk)
  if (filters.value.category) list = list.filter(e => e.category === filters.value.category)
  return list
})

const pages = computed(() => {
  return Math.max(1, Math.ceil(filtered.value.length / perPage))
})

const pagedEvents = computed(() => {
  const start = (page.value - 1) * perPage
  return filtered.value.slice(start, start + perPage)
})

function prevPage() { if (page.value > 1) page.value-- }
function nextPage() { if (page.value < pages.value) page.value++ }

function logoText(name) { return name.split(' ').slice(0,1)[0].slice(0,2).toUpperCase() }
function saveForLater(e) { console.log('Saved', e.id); alert('Saved for later') }
function openAnalysis(e) { window.open('#', '_blank') }

</script>

<style lang="scss">
.events-page {

  &-header {
    //margin-bottom: 24px;

    //h1 { font-size: 24px; font-weight: 800; margin-bottom: 8px; }

    .lead {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      color: #64748b;
      font-size: 14px;

      .view-controls {
        display: flex;
        gap: 8px;
        .btn {
          padding: 8px 16px;
          border-radius: 8px;
          background: #e2e8f0;
          border: none;
          cursor: pointer;
          font-weight: 600;
          &.active { background: #0b5fff; color: #fff; }
        }
      }
    }
  }

  .filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 10px 16px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);

    .filters {
      display: flex;
      gap: 12px;
      .filter-group {
        display: flex;
        align-items: center;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 4px 10px;
        select { border: none; background: transparent; font-size: 13px; outline: none; }
      }
    }

    .sort-by {
      display: flex;
      gap: 8px;
      font-size: 13px;
      color: #64748b;
      label { white-space: nowrap; }
      select { border: none; font-weight: 700; color: #1e293b; outline: none; cursor: pointer; }
    }
  }

  .feed-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  .event-card {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    border: 2px solid #e2e8f0;
    position: relative;
    transition: transform 0.2s;

    &.critical {
      border-color: #ef4444;
        .card-head {
          .severity-row .badge-severity { background: #ef4444; }
          .status-dot { background: #ef4444; }
        }
    }
    &.high {
      border-color: #f97316;
        .card-head {
          .severity-row .badge-severity { background: #f97316; }
          .status-dot { background: #f97316; }
        }
    }

    .card-head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      .left { display: flex; gap: 16px; }

      .logo-wrapper {
        position: relative;
        .logo { 
          width: 48px; height: 48px; border-radius: 10px; background: #0b5fff; color: #fff;
          display: flex; align-items: center; justify-content: center; font-weight: 700;
        }
        .status-dot {
          position: absolute; bottom: -2px; right: -2px; width: 12px; height: 12px;
          background: #ef4444; border: 2px solid #fff; border-radius: 50%;
        }
      }

      .vendor-row {
        display: flex; gap: 8px; font-weight: 700; align-items: center;
        .separator { color: #cbd5e1; }
        .category { color: #64748b; font-weight: 400; font-size: 14px; }
      }

      .severity-row {
        margin-top: 4px; display: flex; align-items: center; gap: 8px;
        .badge-severity {
          background: #ef4444; color: #fff; font-size: 10px; font-weight: 800;
          padding: 2px 8px; border-radius: 12px;
        }
        .impact { color: #64748b; font-size: 12px; }
      }

      .right {
        text-align: right;
        .date { font-weight: 600; font-size: 14px; color: #475569; }
        .detected { font-size: 11px; color: #94a3b8; }
      }
    }

    .title { font-size: 18px; font-weight: 700; margin-bottom: 10px; color: #1e293b; }
    .summary { font-size: 14px; color: #475569; line-height: 1.6; margin-bottom: 20px; }

    .tag-section {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
      .reported-label { font-size: 10px; font-weight: 800; color: #94a3b8; }
      .tag {
        background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-size: 12px; color: #475569;
        &.source { background: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; }
      }
    }

    .divider { border: 0; border-top: 2px solid #DDD; margin-bottom: 16px; }

    .card-foot {
      display: flex; justify-content: space-between; align-items: center;
      .views { font-size: 13px; color: #64748b; }
      .btn-link { background: none; border: none; color: #64748b; font-weight: 600; cursor: pointer; margin-right: 12px; }
      .btn-outline-blue {
        border: 1px solid #0b5fff; color: #0b5fff; background: #fff;
        padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;
      }
    }
  }

  .pagination {
    display: flex; justify-content: center; gap: 8px; margin-top: 32px;
    button {
      padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0; background: #fff;
      &.active { background: #0b5fff; color: #fff; border-color: #0b5fff; }
    }
  }
}
</style>
