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
            <p class="mb-0 text-h6">Cloudy</p>
            <p class="grey--text mb-0">Thursday, 09 Nov</p>
            <p class="mt-3 text-h4 font-weight-medium">-20ºC</p>
          </v-card>
          <v-container class="pa-5">
            <v-row>
              <v-col>
                <v-row>
                  <v-col>img</v-col>
                  <v-col>text</v-col>
                </v-row>
                <v-row>
                  <v-col></v-col>
                  <v-col>text</v-col>
                </v-row>
              </v-col>
              <v-col>2</v-col>
            </v-row>
            <v-row>
              <v-col>3</v-col>
              <v-col>4</v-col>
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
