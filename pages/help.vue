<template>
  <div class="help-support-page">
    <div class="hs-header">
      <h1>Help & Support</h1>
      <p class="lead">Find answers to your questions, explore comprehensive documentation, or easily contact our dedicated support team for personalized assistance.</p>
      
      <div class="search-main-wrap">
        <svg class="icon-search" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" placeholder="Search our knowledge base..." />
      </div>
    </div>

    <section class="faq-section">
      <h2 class="section-heading">Frequently Asked Questions</h2>
      <div class="faq-container">
        <details v-for="(item, idx) in faqs" :key="idx" class="faq-details">
          <summary class="faq-summary">
            {{ item.q }}
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </summary>
          <div class="faq-content">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>
    </section>

    <section class="docs-section">
      <h2 class="section-heading">Documentation & Guides</h2>
      <div class="docs-grid">
        <div v-for="cat in docs" :key="cat.title" class="docs-card">
          <h3>{{ cat.title }}</h3>
          <ul>
            <li v-for="link in cat.links" :key="link">
              <NuxtLink to="/help">{{ link }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2 class="section-heading">Contact Support</h2>
      <div class="contact-flex-layout">
        <div class="ticket-card">
          <h3>Submit a Support Ticket</h3>
          <form class="ticket-form" @submit.prevent="handleSubmit">
            <div class="field">
              <label>Your Name</label>
              <input v-model="form.name" type="text" placeholder="John Doe" />
            </div>
            <div class="field">
              <label>Email Address</label>
              <input v-model="form.email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div class="field">
              <label>Subject</label>
              <input v-model="form.subject" type="text" placeholder="Issue with login" />
            </div>
            <div class="field">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="Describe your issue in detail..."></textarea>
            </div>
            <button type="submit" class="btn-navy-submit">Submit Ticket</button>
          </form>
        </div>

        <div class="info-card">
          <h3>Contact Information</h3>
          <div class="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Email: <a href="mailto:support@arodusrisk.com">support@arodusrisk.com</a></span>
          </div>
          <div class="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Phone: +1 (800) 555-0199</span>
          </div>
          <div class="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })

const faqs = [
  { q: "How do I reset my password?", a: "To reset your password visit your profile, click 'Change Password', and follow the instructions sent to your email." },
  { q: "Where can I find my invoice history?", a: "Invoice history is available under the Billing section of your account. You can download invoices as PDF files." },
  { q: "How do I add a new user to my account?", a: "Navigate to Account > Users, then click 'Invite User' and enter their email and role." }
]

const docs = [
  { title: "Getting Started", links: ["Platform Overview", "Dashboard Navigation Guide", "Vendor Onboarding Workflow", "Understanding Alerts and Notifications"] },
  { title: "Advanced Features", links: ["Risk Scoring Methodologies", "Customizing Reports and Analytics", "API Integration Best Practices", "Interpreting Audit Logs"] },
  { title: "Troubleshooting", links: ["Resolving Common Issues", "Account Access & Security", "Troubleshooting Data Import Errors", "Optimizing Platform Performance"] }
]

function handleSubmit() {
  alert('Support ticket submitted.')
}
</script>

<style lang="scss" scoped>
.help-support-page {
  /*padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  color: #1e293b;*/

  .hs-header {
    margin-bottom: 40px;
    h1 { font-size: 28px; font-weight: 700; margin-bottom: 12px; color: #111827; }
    .lead { font-size: 15px; color: #64748b; max-width: 850px; line-height: 1.6; margin-bottom: 24px; }
    
    .search-main-wrap {
      position: relative;
      max-width: 800px;
      .icon-search { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; }
      input {
        width: 100%;
        padding: 14px 14px 14px 48px;
        border-radius: 10px;
        border: 1px solid #e2e8f0;
        background: #fff;
        font-size: 15px;
        outline: none;
        &:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.05); }
      }
    }
  }

  .section-heading { font-size: 18px; font-weight: 700; margin-bottom: 20px; color: #111827; }

  // FAQ Styling
  .faq-container {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;

    .faq-details {
      border-bottom: 1px solid #f1f5f9;
      &:last-child { border-bottom: none; }
      
      .faq-summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 24px;
        font-weight: 600;
        cursor: pointer;
        list-style: none;
        transition: background 0.2s;
        &:hover { background: #f8fafc; }
        .chevron { color: #94a3b8; transition: transform 0.2s; }
      }
      &[open] .chevron { transform: rotate(180deg); }
      .faq-content { padding: 0 24px 20px; color: #475569; font-size: 14px; line-height: 1.6; }
    }
  }

  // Documentation Cards
  .docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 48px;

    .docs-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      h3 { font-size: 16px; font-weight: 700; margin-bottom: 16px; color: #1e293b; }
      ul {
        list-style: none; padding: 0;
        li {
          margin-bottom: 12px;
          a { font-size: 14px; color: #2563eb; text-decoration: none; &:hover { text-decoration: underline; } }
        }
      }
    }
  }

  // Contact Support Layout
  .contact-flex-layout {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 24px;
    align-items: start;

    .ticket-card, .info-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 28px;
      h3 { font-size: 16px; font-weight: 700; margin-bottom: 24px; }
    }

    .info-card {
      background: #f8fafc;
      .info-item {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #475569;
        svg { color: #1e293b; flex-shrink: 0; }
        a { color: #2563eb; text-decoration: none; }
      }
    }

    .ticket-form {
      .field {
        margin-bottom: 20px;
        label { display: block; font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 8px; }
        input, textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          &:focus { border-color: #3b82f6; }
        }
        textarea { min-height: 120px; resize: vertical; }
      }
      
      .btn-navy-submit {
        width: 100%;
        background: #1e3a8a; // Navy Blue from screenshots
        color: #fff;
        padding: 12px;
        border-radius: 8px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: background 0.2s;
        &:hover { background: #172554; }
      }
    }
  }
}

@media (max-width: 900px) {
  .contact-flex-layout { grid-template-columns: 1fr; }
}
</style>