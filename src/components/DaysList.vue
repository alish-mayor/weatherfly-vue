<template>
    <div class="days-list">
        <h2 class="title" v-if="checkEmpty(currentCity)">Forecast</h2>
        <p class="caption" v-if="checkEmpty(currentCity)">To see the forecast please enter the city in home tab!</p>
        <h2 class="title" v-if="!checkEmpty(currentCity)">{{ this.currentCity.cityName }}, <span class="subtitle"> {{ this.currentCity.country }} </span></h2>
        <div class="load-overlay" v-if="loading"><i class='bx bx-loader bx-spin load-overlay__icon'></i></div>
        <div class="content" v-if="dataLoaded">
        <ul class="list">
            <li v-for="(item, index) in daysList" class="list__item" :key="item.dt">
                <i class='bx list__item__icon' :class="getIcon(item.weather[0].main)"></i>
                <p class="list__item__day"> {{ getWeekDay(index) }}, <span class="list__item__date"> {{ getDate(index) }}</span></p>
                <p class="list__item__temp">{{ transToCelsius(item.temp.day) }}</p>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import helperMixin from '../helperMixin.js';

export default {
    name: 'DaysList',
    data(){
        return{
            daysList: [],
        }
    },
    mixins: [helperMixin],
    mounted(){
        this.getData(this.currentCity.cityName);
    },
    methods: {
        async getData(city){
        if (!city) return;
        try{
            this.loading = true;
          this.dataLoaded = false;
          let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.currentCity.lat}&lon=${this.currentCity.lon}&exclude=current,minutely,hourly&appid=${this.API_KEY}`);
          this.data = await response.json();
          this.daysList = this.data.daily;
          this.loading = false;
          this.dataLoaded = true;
        } catch(error){
          console.log(error);
        }
      },
      getDate(index){
        const miliseconds = Date.now() + (86400000 * index);
        const time = new Date(miliseconds).toDateString().split(' ');
        const month = time[1];
        const date = time[2];
        
        return `${date} ${month}`
      },
      getWeekDay(index){
        const miliseconds = Date.now() + (86400000 * index);
        const weekDays = {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: 'Friday',
          6: 'Saturday',
        }
        const weekDay = new Date(miliseconds).getDay();
        
        return `${weekDays[weekDay]}`
      },
      checkEmpty(object){
        return Object.keys(object).length === 0 && object.constructor === Object;
      }
    }
}
</script>

<style scoped>
    .list{
        list-style-type: none;
        margin-top: 2.3rem;
        padding: 0.5rem;
        height: 50rem;
        overflow-x: hidden;
        overflow-y: auto;
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

    .days-list{
    position: relative;
    height: 100%;
  }
</style>