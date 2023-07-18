<template>
<v-container>

</v-container>
  </template>
  
  <script>
import router from '@/router';

    export default {
      name: 'Home',
  
      components: {
      },
      methods: {
        goList(){
          router.push('/myBoardList')
        }
      },
    }
  </script>
  <style>

</style>