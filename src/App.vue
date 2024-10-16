<script setup lang="ts">
import { RouterView } from 'vue-router';
import Container from './components/Container.vue';
</script>

<template>
  <router-view v-slot="{ Component }">
    <container>
      <component :is="Component" />
    </container>
  </router-view>
</template>

<style>
.dyslexic-mode {
  font-family: 'OpenDyslexic', sans-serif;
}
</style>
