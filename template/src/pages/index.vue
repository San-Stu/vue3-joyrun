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
<style lang="less" scoped>

</style>
<% } %>
<% if (options.cssPerprocessor === 'sass') { %>
<style lang="sass" scoped>

</style>
<% } %>
<% if (options.cssPerprocessor === 'none') { %>
<style scoped>

</style>
<% } %>