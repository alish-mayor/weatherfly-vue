<template>
        <div class="card" v-if="dataLoaded" @click="getFavourite">
                 <i class='bx card__icon' :class="getIcon(data.weather[0].main)"></i>
                 <p class="card__temp">{{ transToCelsius(data.main.temp) }}</p>
                 <p class="card__city">{{ data.name }}</p>
                 <p class="card__country">{{ data.sys.country }}</p>
            <router-link class="link" to="/" ></router-link>
        </div>
</template>

<script>
import apiKey from '../apiKey.js';

export default({

    name: 'FavouriteCard',
    data(){
        return{
            dataLoaded: false,
            data: {},
            API_KEY: apiKey,
        }
    },
    props:{
        favCity: String,
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
      async getData(city){
        if (!city) return;
        try{
          this.dataLoaded = false;
          let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`);
          this.data = await response.json();
          this.dataLoaded = true;
          this.getIcon();
        } catch(error){
          console.log(error);
        }
      },
      transToCelsius(temp) {
       return `${(temp - 273.15).toFixed(2)}ºC`;
      },
      getFavourite(){
        this.changeCity();
          const navLinks = document.querySelectorAll('.navigation__icon');
            navLinks.forEach(link => {
                link.classList.remove('active');
            })
          const link = document.querySelector('.navigation__icon');
          link.classList.add('active');
      },
      changeCity(){
        this.$store.commit('changeCity', 
          {
            cityName: this.data.name,
            country: this.data.sys.country,
            lat: this.data.coord.lat,
            lon: this.data.coord.lon,
          });
      }
    },
    mounted(){
        this.getData(this.favCity);
    }
    
})
</script>

<style scoped>
    .card{
        position: relative;
        width: 40%;
        text-align: center;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        padding: 1.5rem 0;
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
        font-size: 1.6rem;
    }

    .card__country{
        color: #999999;
        font-size: 1.4rem;
    }
   
    .link{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
