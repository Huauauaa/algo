# 防抖

<script setup>
import Debounce from '../../components/Debounce.vue'
import {debounce,debounceImmediate} from './debounce.js'

</script>

## 稍后执行

<pre>{{debounce}}</pre>

## 立即执行

<pre>{{debounceImmediate}}</pre>

<Debounce></Debounce>
