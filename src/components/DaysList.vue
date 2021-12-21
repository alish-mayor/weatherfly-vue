<template>
    <div class="days-list">
        <div class="content" v-if="dataLoaded">
        <h2 class="title">Astana <span class="subtitle">Kazakhstan</span></h2>
        <ul class="list">
            <li v-for="item in daysList" class="list__item" :key="item.dt">
                <i class='bx bx-sun list__item__icon'>{{item.weather[0].main}}</i>
                <p class="list__item__day"> {{item.date}} <span class="list__item__date"></span></p>
                <p class="list__item__temp">{{ transToCelsius(item.temp.day) }}</p>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DaysList',
    data(){
        return{
            API_KEY: '8d4a78af5654c729225221369eb116f4',
            dataLoaded: false,
            daysList: [],
            data: {},
        }
    },
    computed: {
        currentCity(){
            return this.$store.state.currentCity;
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        async getData(){
        // if (!city) return;
        try{
          this.dataLoaded = false;
          let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=51.1801&lon=71.446&exclude=current,minutely,hourly&appid=8d4a78af5654c729225221369eb116f4`);
          this.data = await response.json();
          this.daysList = this.data.daily;
          console.log(this.daysList);
          this.dataLoaded = true;
        } catch(error){
          console.log(error);
        }
      },
      transToCelsius(temp) {
       return `${(temp - 273.15).toFixed(2)}ºC`;
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
    .subtitle{
        font-weight: 300;
        font-size: 1.6rem;
    }

    .list{
        list-style-type: none;
        margin-top: 2.3rem;
    }

    .list__item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1.5rem;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
    }

    .list__item__icon{
        font-size: 3rem;
    }

    .list__item__date{
        color: #999999;
    }
</style>