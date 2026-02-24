<template>
    <div class="vendors-page">
        <div class="vendor-page-header">
            <h1>Vendors Management</h1>
            <div class="vendor-page-header-actions">
                <div class="search-container-main">
                    <svg class="icon-search" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Search vendors by name or contact" />
                </div>

                <div class="header-buttons">
                    <button class="btn btn-add-vendor">+ Add Vendor To Watch List</button>
                    <button class="btn btn-sync-erp">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                        Sync ERP
                    </button>
                </div>
            </div>
        </div>

        <div class="vendor-page-main">
            <div class="table-controls-bar">
                <div class="search-table">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Find vendors..." />
                </div>

                <div class="selectors-group">
                    <div class="select-wrapper">
                        <select id="filter" class="control-select">
                            <option disabled selected>Filter</option>
                            <option value="all">All Vendors</option>
                        </select>
                        <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    
                    <div class="select-wrapper">
                        <select id="sort" class="control-select">
                            <option disabled selected>Sort</option>
                        </select>
                        <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                    
                    <div class="select-wrapper">
                        <select id="per-page" class="control-select">
                            <option disabled selected>Vendors Per Page</option>
                            <option value="10">10</option>
                        </select>
                        <svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>
            </div>

            <table class="vendor-table">
                <thead>
                    <tr>
                        <th>Vendor Name</th>
                        <th>Contact Person</th>
                        <th>Category</th>
                        <th>All-Time Spend</th>
                        <th>L12M Spend</th>
                        <th>Risk Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vendor in vendors" :key="vendor.name">
                        <td class="vendor-name">{{ vendor.name }}</td>
                        <td>{{ vendor.contact }}</td>
                        <td><span class="badge-outline">{{ vendor.category }}</span></td>
                        <td class="spend-text">{{ vendor.allTime }}</td>
                        <td class="spend-text">{{ vendor.l12m }}</td>
                        <td>
                            <span :class="['status-pill', vendor.status.toLowerCase().replace(' ', '-')]">
                                {{ vendor.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const vendors = ref([
    { name: 'Amazon', contact: 'Alice Wonderland', category: 'IT Services', allTime: '$1,250,000', l12m: '$450,000', status: 'Medium' },
    { name: 'Secure Data Innovations', contact: 'Bob Thebuilder', category: 'Software', allTime: '$850,000', l12m: '$320,000', status: 'Excellent' },
    { name: 'Financial Analytics Co.', contact: 'Charlie Chaplin', category: 'Finance', allTime: '$2,100,000', l12m: '$900,000', status: 'Excellent' },
    { name: 'Logistics Pro', contact: 'Diana Prince', category: 'Logistics', allTime: '$500,000', l12m: '$120,000', status: 'High Risk' },
    { name: 'Marketing Mavericks', contact: 'Eve Harrington', category: 'Marketing', allTime: '$300,000', l12m: '$0', status: 'Terminated' },
    { name: 'HR Solutions Inc.', contact: 'Frank Castle', category: 'HR', allTime: '$600,000', l12m: '$200,000', status: 'Medium' }
])

onMounted(() => {
    console.log('Vendor Management page mounted');
})
</script>

<style lang="scss">

    .vendor-page-header {
        margin-bottom: 24px;

        h1 {
            font-size: 28px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 20px;
        }

        &-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .search-container-main {
                position: relative;
                flex: 0 1 450px;
                
                .icon-search {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                }

                input {
                    width: 100%;
                    padding: 10px 12px 10px 40px;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    background: #ffffff;
                    font-size: 14px;
                    outline: none;
                    &:focus { border-color: #3b82f6; }
                }
            }

            .header-buttons {
                display: flex;
                gap: 12px;
            }

            .btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                border: none;
                transition: opacity 0.2s;
                &:hover { opacity: 0.9; }
            }

            .btn-add-vendor { background-color: #1e3a8a; color: white; } /* Dark Blue */
            .btn-sync-erp { background-color: #10b981; color: white; }   /* Emerald Green */
        }
    }

    .vendor-page-main {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: #ffffff; /* Removed #ccc */
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .table-controls-bar {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid #f1f5f9;

        .search-table {
            position: relative;
            flex: 0 1 300px;
            svg { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #64748b; }
            input {
                width: 100%;
                padding: 8px 12px 8px 36px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                font-size: 14px;
            }
        }

        .selectors-group {
            display: flex;
            gap: 8px;

            .select-wrapper {
                position: relative;
                .chevron { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #64748b; }
            }

            .control-select {
                appearance: none;
                padding: 8px 32px 8px 12px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                background: white;
                font-size: 14px;
                color: #475569;
                cursor: pointer;
            }
        }
    }

    .vendor-table {
        width: 100%;
        border-collapse: collapse;

        th {
            background-color: #f8fafc;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.025em;
            color: #64748b;
            padding: 16px;
            text-align: left;
        }

        td {
            padding: 16px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
            color: #1e293b;
        }

        .vendor-name { font-weight: 600; }
        .spend-text { font-family: monospace; font-weight: 500; }
        
        .badge-outline {
            padding: 2px 8px;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            font-size: 12px;
            color: #64748b;
            background: #f8fafc;
        }
    }
</style>