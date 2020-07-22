<template>
   <v-card-actions class="justify-center">
  <a href="https://github.com/mahzzaa/ehsunm"  class="link">Designed by Mahsa</a>
</v-card-actions>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
import VueContentLoading, { VclCode } from 'vue-content-loading'
import { debounce } from 'lodash'

export default {
  name      : 'EndlessTimeline',
  components: {
    ContentSection, VueContentLoading, VclCode,
  },
  data: () => ({
  
    
  })
}
</script>

<style scoped>
.link{
  text-align: center;
  text-decoration: none;
  color: aliceblue;
  font-family: 'Red Rose', cursive;
}
</style>
