<template>
  <div>
    <a class="skip-link" href="#content" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Saltar al contenido</a>
    <nav style="padding:1rem;display:flex;gap:1rem;align-items:center;justify-content:center;">
      <a href="/" style="font-weight:700;color:inherit;text-decoration:none">Don José's</a>
      <a href="/menu" style="text-decoration:none">Menú</a>
      <a href="/about" style="text-decoration:none">Sobre</a>
      <a href="/contact" style="text-decoration:none">Contacto</a>
      <a href="/booking" style="text-decoration:none">Reservas</a>
    </nav>
    <router-view />
    <footer style="text-align:center;padding:2rem 1rem;background:#fff4ec;margin-top:2rem;">
      <small>© Don José's — Todos los derechos reservados</small>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
