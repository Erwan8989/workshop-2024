<script setup lang="ts">
  import Header from './Header.vue';
</script>

<template>
  <Header />
  <div class="container flex flex-col">
    <slot></slot>
  </div>
</template>