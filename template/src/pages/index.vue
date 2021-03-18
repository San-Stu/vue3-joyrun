<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import shareConfig from '@/common/shareConfig'

export default defineComponent({
  name: 'index',
  mixins: [shareConfig]
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