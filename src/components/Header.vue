<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Button from "./ui/button/Button.vue";
import { toggleDyslexicMode } from '../store/dyslexicMode';

const dropdownVisible = ref(false);

const showDropdown = () => {
  dropdownVisible.value = true;
};

const hideDropdown = () => {
  dropdownVisible.value = false;
};

import type { DropdownMenuCheckboxItemProps } from 'radix-vue';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const showStatusBar = ref<Checked>(false);
</script>

<template>
  <header class="px-4 py-3 w-full flex items-center justify-between shadow mb-5 md:px-10 bg-gray-100">
    <RouterLink to="/"><img alt="amI Logo, meilleure app d'europe" class="logo vue" src="/img/logo.png" width="85" height="85"/></RouterLink>
    <nav class="hidden md:flex space-x-8">
      <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <li>
          <a href="https://www.service-public.fr/particuliers/vosdroits/F32239" target="_blank" ref="noopener noreferrer">
            <Button variant="link">
              Ressources gouvernementales
            </Button>
          </a>
        </li>
        <li class="relative" @mouseenter="showDropdown" @mouseleave="hideDropdown">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                Accessibilité
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-56">
              <DropdownMenuCheckboxItem @click="toggleDyslexicMode" v-model:checked="showStatusBar">
                Mode Dyslexique
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <a href="tel:3018">
            <Button variant="default" style="background-color: green">
              Appeler le 3018
            </Button>
          </a>
        </li>
      </ul>
    </nav>
    <div class="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuCheckboxItem>
            <RouterLink to="https://www.service-public.fr/particuliers/vosdroits/F32239" target="_blank" ref="noopener noreferrer">
              Ressources gouvernementales
            </RouterLink>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <a href="tel:3018">
              Appeler le 3018
            </a>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem @click="toggleDyslexicMode" v-model:checked="showStatusBar">
            Mode Dyslexique
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
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