<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Button } from '../components/ui/button';

</script>

<template>
  <div class="h-[600px] bg">
    <div class="w-full h-[400px] bg-backgound flex flex-col items-center justify-center gap-4">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non aliquam massa, id mattis nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean in orci eu felis auctor volutpat ac a ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut porta lacinia fringilla. Vivamus mollis mauris a orci elementum vulputate. Cras ac faucibus nibh. Praesent nibh felis, malesuada in justo a, scelerisque dapibus velit. Suspendisse posuere vel nibh vitae vehicula. Curabitur consequat vulputate viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a dapibus lorem, sit amet pretium nulla. Suspendisse aliquet tellus vel lorem ultrices malesuada. Suspendisse finibus non orci eget placerat. Integer non tortor enim. 
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