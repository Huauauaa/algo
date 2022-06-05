# 节流

<script setup>
import Throttle from '../../components/Throttle.vue'
import {throttle,throttleImmediate,throttleDate} from './throttle.js'

</script>

## 稍后执行

<pre>{{throttle}}</pre>

## 立即执行

<pre>{{throttleImmediate}}</pre>

## Date

<pre>{{throttleDate}}</pre>

<Throttle />
