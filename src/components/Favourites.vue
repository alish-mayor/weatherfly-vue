<template>
    <div class="favourites">
         <h2 class="title">Favourites</h2>
         <div class="favourites-collection">
             <div class="card" v-for="(item,index) in favouritesList" :key="index">
                 <i class='bx card__icon' :class="getIcon(item.icon)"></i>
                 <p class="card__temp">{{ item.temp }}</p>
                 <p class="card__city">{{ item.cityName }}</p>
                 <p class="card__country">{{ item.country }}</p>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'Favourites',
    data(){
        return{

        }
    },
    computed: {
        favouritesList(){
            return this.$store.state.favourites;
        }
    },
    methods: {
        getIcon(weatherDesc){
        switch (weatherDesc){
          case 'Drizzle':
          return "bx-cloud-drizzle"
          case 'Snow':
          return "bx-cloud-snow"
          case 'Clear':
          return "bx-sun"
          case 'Rain':
          return "bx-cloud-rain"
          case 'Thunderstorm':
          return "bx-cloud-lightning"
          case 'Clouds':
          return "bx-cloud"
          default:
            return "bx-water" 
        }
      },
    }
}
</script>

<style scoped>
    .title{
        text-align: center;
        font-weight: 500;
        font-size: 2.2rem;
    }

    .favourites-collection{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 50rem;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px;
    }

    .card{
        width: 40%;
        text-align: center;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        padding: 1.5rem 2rem;
        border-radius: var(--sm-bd-rd);
        margin-top: 2.5rem;
    }

    .card__icon{
        font-size: 4.8rem;
    }

    .card__temp{
        font-size: 2rem;   
    }

    .card__city{
        font-size: 1.8rem;
    }

    .card__country{
        color: #999999;
    }
</style>