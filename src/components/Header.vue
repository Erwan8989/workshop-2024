<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="px-10 py-3 w-full flex items-center justify-between shadow mb-5">
    <img alt="amI Logo, meilleure app d'europe" class="logo vue" src="/img/logo.png" width="85" height="85" />
    <nav>
      <ul class="flex space-x-8">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>