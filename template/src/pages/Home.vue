<template>
  <div class="home">
    <router-link to="page2">to 2</router-link>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import shareConfig from '@/common/shareConfig'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    console.log(jsRunApi)
  },
  mixins: [shareConfig]
})
</script>

<style lane="less">
.home{
  height: 100vh;
  background-color: red;
}
</style>
