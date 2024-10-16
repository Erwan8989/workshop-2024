<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <Header/>
  <div class="container flex flex-col py-5"
       style="background-color: #F8F8F8; border-radius: 10px; margin: 35px 4% 0; width: auto">
    <slot></slot>
  </div>
  <Footer/>
</template>