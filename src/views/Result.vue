<script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import { useGameStore } from "../store/game";
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
import Card from "../components/ui/card/Card.vue";

  const store = useGameStore();

  const isLoading = ref(true)

  const result = computed(() => {
    const found = store
      .data
      .score_ranges
      .find(range => store.score >= range.minScore && store.score <= range.maxScore)!;
    return found.description
  });

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  })
</script>

<template>
  <div v-if="isLoading" class="w-full flex items-center justify-center">
    <loading :active="isLoading" />
    <h1 class="text-3xl font-bold">
      Calcul des résultats par IA...
    </h1>
  </div>
  <Card v-else class="p-5">
    <p class="font-bold">
      <!-- Votre score est de {{ store.score }}. Voici le résultat selon notre barême. -->
       Selon notre IA HarcelAI, 
    </p>
    
    <p>{{ result }}</p>
  </Card>
</template>