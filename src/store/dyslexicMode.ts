import { ref } from 'vue';

export const isDyslexicMode = ref(false);

export const toggleDyslexicMode = () => {
  isDyslexicMode.value = !isDyslexicMode.value;
  document.body.classList.toggle('dyslexic-mode', isDyslexicMode.value);
};