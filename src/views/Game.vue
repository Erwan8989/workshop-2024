<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import { Button } from "../components/ui/button";
  import { useGameStore } from "../store/game";

  const store = useGameStore();
</script>

<template>
  <div v-if="store.state === 'idle'" class="p-5 flex flex-col gap-5 items-center justify-center">
    <p>
      Certaines personnes ne se rendent pas forcément compte qu'elles sont victimes de harcèlement. 
      C'est pourquoi il est important de savoir ce qu'est le harcèlement et de pouvoir le reconnaître.
      Ce formulaire vous permettra de savoir si vous êtes victime de harcèlement.
    </p>
    <Button @click="store.startGame()">
      Commencer le test
    </Button>
  </div>
  <div v-else-if="store.state === 'started'" class="p-5 flex flex-col gap-5 items-center justify-center">
    <p>
      Question {{ store.index + 1 }} / {{ store.data.questions.length }}
    </p>
    <p>
      {{ store.currentQuestion.question }}
    </p>
    <div class="flex flex-col gap-5">
      <Button 
        v-for="answer in store.data.questions[store.index].options" 
        :key="answer.response"
        @click="store.addAnswer(answer)"
      >
        {{ answer.response }}
      </Button>
    </div>
  </div>

  <template v-else>
    <div class="p-5 flex flex-col gap-5 items-center justify-center">
      <p>
        Le test est terminé. Nous allons compiler les résultats pour vous. Veuillez terminer le test.
      </p>
      
    <RouterLink to="/result">
      <Button>
        Terminer le test
      </Button>
    </RouterLink>
    </div>
  </template>
</template>