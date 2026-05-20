<template>
  <div v-if="outOfService.enabled" class="status-shell">
    <main id="content" class="status-main">
      <section class="status-card" role="status" aria-live="polite">
        <p class="status-badge">Estado del demo</p>
        <img
          src="/images/logo-don-joses.png"
          alt="Don Jose's home-style Cuban cuisine"
          width="467"
          height="302"
          class="status-logo"
          fetchpriority="high"
        />
        <h1>{{ outOfService.title }}</h1>
        <p class="status-message">{{ outOfService.message }}</p>
        <p v-if="outOfService.detail" class="status-detail">{{ outOfService.detail }}</p>
        <a
          v-if="statusWhatsappUrl"
          :href="statusWhatsappUrl"
          class="button whatsapp-cta status-cta"
          target="_blank"
          rel="noreferrer"
        >
          {{ outOfService.whatsappLabel || 'Contactar por WhatsApp' }}
        </a>
        <p class="status-meta">Don Jose's • Panama City, FL</p>
      </section>
    </main>
  </div>

  <div v-else class="site-shell">
    <a class="skip-link" href="#content">Skip to content</a>
    <header class="site-header">
      <div class="site-brand">
        <router-link to="/" class="brand-link">
          <img
            src="/images/logo-don-joses.png"
            alt="Don Jose's home-style Cuban cuisine"
            width="467"
            height="302"
            class="brand-logo"
            fetchpriority="high"
          />
        </router-link>
      </div>
      <nav class="site-nav" aria-label="Main navigation">
        <router-link to="/menu">Menu</router-link>
        <router-link to="/order">Order</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/booking">Booking</router-link>
      </nav>
    </header>

    <main id="content">
      <router-view />
    </main>

    <footer class="site-footer">
      <small>© Don Jose's - All rights reserved</small>
      <p class="footer-note">Authentic Cuban cuisine in Panama City, FL.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import site from './data/site.json'

const outOfService = computed(() => ({
  enabled: site.outOfService?.enabled ?? false,
  title: site.outOfService?.title || 'Temporalmente fuera de servicio',
  message: site.outOfService?.message || 'Estamos en espera de respuesta del cliente.',
  detail: site.outOfService?.detail || '',
  whatsappLabel: site.outOfService?.whatsappLabel || 'Contactar por WhatsApp',
}))

const statusWhatsappUrl = computed(() => (
  site.outOfService?.whatsappUrl || site.online?.whatsapp?.url || ''
))

watchEffect(() => {
  if (outOfService.value.enabled) {
    document.title = `${outOfService.value.title} | Don Jose's`
  }
})
</script>

<style scoped>
.status-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: clamp(1rem, 4vw, 2.5rem);
  background:
    radial-gradient(circle at 12% 8%, rgba(200, 75, 49, 0.16), transparent 34%),
    radial-gradient(circle at 90% 12%, rgba(29, 53, 87, 0.16), transparent 32%),
    #f4efe5;
}

.status-main {
  width: min(760px, 100%);
}

.status-card {
  text-align: center;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(29, 53, 87, 0.14);
  border-radius: 28px;
  padding: clamp(1.8rem, 4vw, 3rem);
  box-shadow: 0 22px 45px rgba(29, 53, 87, 0.15);
}

.status-badge {
  display: inline-flex;
  margin-bottom: 1rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(29, 53, 87, 0.18);
  background: rgba(29, 53, 87, 0.06);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 700;
}

.status-logo {
  width: clamp(138px, 26vw, 220px);
  height: auto;
  margin: 0 auto 1.25rem;
  border-radius: 14px;
}

.status-message {
  margin-top: 1rem;
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  line-height: 1.8;
}

.status-detail {
  margin-top: 0.75rem;
  line-height: 1.75;
  opacity: 0.82;
}

.status-cta {
  margin-top: 1.5rem;
}

.status-meta {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  opacity: 0.72;
}
</style>
