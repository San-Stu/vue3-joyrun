<template>
  <div class="page2">
    <router-link to="/">to 1</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lane="less">
.page2{
  height: 100vh;
  background-color: blue;
}
</style>
