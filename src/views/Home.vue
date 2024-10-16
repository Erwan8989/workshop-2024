<script setup lang="ts">
import {RouterLink} from 'vue-router';
import {Button} from '../components/ui/button';

</script>

<template>
  <div class="h-[600px] bg">
    <div class="w-full h-[400px] bg-backgound flex flex-col items-center justify-center gap-4">
      <p class="text-justify" style="font-weight: bold">
        Bienvenue sur notre plateforme dédiée à la lutte contre le harcèlement en ligne des jeunes<br><br>

        Le harcèlement en ligne touche de nombreux jeunes et peut avoir de graves conséquences. Pour mieux comprendre
        cette réalité et y apporter des solutions, nous vous proposons un questionnaire de positionnement. En y
        répondant, vous pourrez évaluer votre perception du phénomène et accéder à des ressources personnalisées pour
        agir. Ensemble, faisons la différence et créons un espace numérique plus sûr pour les jeunes.<br><br>

        Participez dès maintenant et découvrez comment vous pouvez contribuer !
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