<template>
  <div class="site-shell">
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
</script>

<style scoped>
</style>
