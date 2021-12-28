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
import helperMixin from '../helperMixin.js';

export default({
    name: 'FavouriteCard',
    data(){
        return{
        }
    },
    mixins: [helperMixin],
    props:{
        favCity: String,
    },
    methods: {
      async getData(city){
        if (!city) return;
        try{
          this.dataLoaded = false;
          let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`);
          this.data = await response.json();
          this.dataLoaded = true;
        } catch(error){
          console.log(error);
        }
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
    },
    mounted(){
        this.getData(this.favCity);
    }
    
})
</script>

<style scoped>
    .card{
        position: relative;
        width: 80%;
        text-align: center;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        padding: 1.5rem 0;
        border-radius: var(--sm-bd-rd);
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
