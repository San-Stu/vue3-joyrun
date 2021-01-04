<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'index'
})
</script>
<% if (options.cssPerprocessor === 'less') { %>
<style lang="less">

</style>
<% } %>
<% if (options.cssPerprocessor === 'sass') { %>
<style lang="sass">

</style>
<% } %>