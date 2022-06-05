<script setup>
import { ref } from 'vue';
import { debounce, debounceImmediate } from '../docs/js/debounce';

const str = ref('');

function handleInput(e) {
  str.value = e.target.value;
}
const onInput = debounce(handleInput, 1e3);
const onInputImmediate = debounceImmediate(handleInput, 1e3);
</script>
<template>
  <div>{{ str }}</div>
  <div>稍后执行:<input @input="onInput" /></div>
  <div>立即执行:<input @input="onInputImmediate" /></div>
</template>
<style scoped>
input {
  border: 1px solid #000;
}
</style>
