<template>
  <v-app>
    <v-main class="d-flex align-center grey main">
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
          <v-card class="text-center mt-12" flat>
            <i class='bx bx-cloud'></i>
            <p class="text-h5 font-weight-medium mb-0">Cloudy</p>
            <p class="grey--text mb-0">Thursday, 09 Nov</p>
            <p class="mt-3 text-h4 font-weight-regular">-20ºC</p>
          </v-card>
          <v-container class="pa-5">
            <v-row>
              <v-col>
                <v-card class="d-flex align-center" flat>  
                  <box-icon name='wind' size="md"></box-icon>
                  <div class="ml-2">
                    <p class="mb-0 text-body-1 font-weight-regular">Wind</p>
                    <p class="mb-0 text-body-2 grey--text text--darken-1">2 m/s</p>
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="d-flex align-center" flat>  
                  <box-icon name='sun' size="md"></box-icon>
                  <div class="ml-2">
                    <p class="mb-0 text-body-1 font-weight-regular">Index UV</p>
                    <p class="mb-0 text-body-2 grey--text text--darken-1">2</p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card class="d-flex align-center" flat>  
                  <box-icon name='hive' size="md"></box-icon>
                  <div class="ml-2">
                    <p class="mb-0 text-body-1 font-weight-regular">Feels like</p>
                    <p class="mb-0 text-body-2 grey--text text--darken-1">-30ºC</p>
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="d-flex align-center" flat>  
                  <box-icon name='tachometer' size="md" type="regular"></box-icon>
                  <div class="ml-2">
                    <p class="mb-0 text-body-1 font-weight-regular">Pressure</p>
                    <p class="mb-0 text-body-2 grey--text text--darken-1">1000 mbar</p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
              
          </v-container>
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
  .main{
    background: linear-gradient(300.44deg, #99EDFF 14.12%, #ACD682 85.06%);;
  }

 .input{
   width: 100%;
   outline: none;
 }

 .bx-cloud{
   font-size: 96px;
 }
</style>
