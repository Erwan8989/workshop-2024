<script setup lang="ts">
import {RouterLink} from 'vue-router';
import {Button} from '../components/ui/button';

</script>

<template>
  <div class="h-[600px] bg">
    <div class="w-full h-[400px] bg-backgound flex flex-col items-center justify-center gap-4">
      <p>
        Ce questionnaire vous permet de signaler des situations de harcèlement sur les réseaux sociaux de manière
        confidentielle. En le remplissant, vous aidez à identifier les comportements abusifs et à agir rapidement pour
        les stopper. Votre contribution est essentielle pour renforcer la sécurité en ligne et protéger les utilisateurs
        contre les abus. Merci de prendre le temps de répondre, cela contribue à un environnement plus sûr pour tous.
      </p>
      <RouterLink to="/game">
        <Button>
          Faire le test
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/img/concept-bullying-harassment-depressed-woman-suffering-from-abuse-crying-after-being-bullied-outline-.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 47% center;
}
</style>