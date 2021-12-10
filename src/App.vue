<template>
  <v-app>
    <v-main class="d-flex align-center grey">
      <v-container class="d-flex justify-center">
        <v-card class="px-5 py-7 rounded-lg" min-width="300px" width="375px"> 
          <div class="d-flex justify-flex-start align-center rounded grey lighten-3 pa-2">
            <box-icon name='search-alt-2' size="sm" color="grey"></box-icon>
            <input type="text" placeholder="enter the city..." class="ml-2 input">
          </div>
          <div class="d-flex align-center justify-space-between mt-3">
            <h1 class="text-h5 font-weight-medium">Astana, <span class="text-body-1 font-weight-light">Kazakhstan</span></h1>
            <box-icon name='heart'></box-icon>
          </div>
          
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
 .input{
   width: 100%;
   outline: none;
 }
</style>
