<template>
  <div class="site-shell">
    <a class="skip-link" href="#content">Saltar al contenido</a>
    <header class="site-header">
      <div class="site-brand">
        <router-link to="/">Don Jose's</router-link>
      </div>
      <nav class="site-nav" aria-label="Navegación principal">
        <router-link to="/menu">Menú</router-link>
        <router-link to="/order">Pedidos</router-link>
        <router-link to="/gallery">Galería</router-link>
        <router-link to="/about">Sobre</router-link>
        <router-link to="/contact">Contacto</router-link>
        <router-link to="/booking">Reservas</router-link>
      </nav>
    </header>

    <main id="content">
      <router-view />
    </main>

    <footer class="site-footer">
      <small>© Don Jose's — Todos los derechos reservados</small>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
