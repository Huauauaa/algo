<script setup>
import { ref } from 'vue';
import { throttle, throttleImmediate, throttleDate } from '../docs/js/throttle';

const str = ref('');
const handler = (...args) => {
  console.log(...args);
  str.value += 1;
};
const onClick = throttle(handler, 1e3);
const onClickImmediate = throttleImmediate(handler, 1e3);
const onClickDate = throttleDate(handler, 2e3);
</script>
<template>
  <button @click="onClick">click</button>
  <button @click="onClickImmediate">clickImmediate</button>
  <button @click="onClickDate">clickDate</button>
  <div>{{ str }}</div>
</template>
<style scoped>
button {
  border: 1px solid #000;
  padding: 5px;
}
</style>
