<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from "./ui/button/Button.vue";
import { toggleDyslexicMode } from '../store/dyslexicMode';

const selectedMode = ref('');
const dropdownVisible = ref(false);

const showDropdown = () => {
  dropdownVisible.value = true;
};

const hideDropdown = () => {
  dropdownVisible.value = false;
};

const setColorblindMode = () => {
  selectedMode.value = 'colorblind';
  document.body.classList.add('colorblind-mode');
  document.body.classList.remove('dyslexic-mode');
  dropdownVisible.value = false;
};
</script>

<template>
  <header class="px-4 py-3 w-full flex items-center justify-between shadow mb-5 md:px-10">
    <RouterLink to="/"><img alt="amI Logo, meilleure app d'europe" class="logo vue" src="/img/logo.png" width="85" height="85"/></RouterLink>
    <nav>
      <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <li>
          <a href="tel:3018">
            <Button variant="default" style="background-color: green">
              Appeler le 3018
            </Button>
          </a>
        </li>
        <li>
          <a href="https://www.service-public.fr/particuliers/vosdroits/F32239" target="_blank" ref="noopener noreferrer">
            <Button variant="default">
              Ressources gouvernementales
            </Button>
          </a>
        </li>
        <li class="relative" @mouseenter="showDropdown" @mouseleave="hideDropdown">
          <Button variant="default">
            Accessibilité
          </Button>
          <div v-if="dropdownVisible" class="dropdown-menu">
            <Button variant="default" @click="setColorblindMode">
              Mode Daltonien
            </Button>
            <Button variant="default" @click="toggleDyslexicMode">
              Mode Dyslexique
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.colorblind-mode {
  /* Add your colorblind mode styles here */
}

.dyslexic-mode {
  font-family: 'OpenDyslexic', sans-serif;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  transform: translateX(25px); /* Adjust this value to fine-tune the position */
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  z-index: 10;
}
</style>