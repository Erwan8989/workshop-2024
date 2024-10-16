<script setup lang="ts">
import {RouterLink} from 'vue-router';
import Button from "./ui/button/Button.vue";
</script>

<template>
  <header class="px-10 py-3 w-full flex items-center justify-between shadow mb-5">
    <RouterLink to="/"><img alt="amI Logo, meilleure app d'europe" class="logo vue" src="/img/logo.png" width="85"
                            height="85"/></RouterLink>
    <nav>
      <ul class="flex space-x-8">
        <li>
          <a href="tel:3018">
            <Button variant="default" style="background-color: green">
              Appeler le 3018
            </Button>
          </a>
        </li>
        <li>
          <a href="https://www.service-public.fr/particuliers/vosdroits/F32239" target="_blank"
             ref="noopener noreferrer">
            <Button variant="default">
              Ressources gouvernementales
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>