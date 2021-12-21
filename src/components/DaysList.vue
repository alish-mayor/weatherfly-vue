<template>
    <div class="days-list">
        <div class="content" v-if="dataLoaded">
        <h2 class="title">Astana <span class="subtitle">Kazakhstan</span></h2>
        <ul class="list">
            <li v-for="item in daysList" class="list__item" :key="item.id">
                <i class='bx bx-sun list__item__icon'>{{item.icon}}</i>
                <p class="list__item__day"> {{item.date}} <span class="list__item__date"></span></p>
                <p class="list__item__temp">{{ item.temp }}</p>
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
            dataList: [],
            data: {},
        }
    },
    computed: {
        currentCity(){
            return this.$store.state.currentCity;
        }
    },
    mounted(){
        this.getData(this.currentCity);
    },
    methods: {
        async getData(city){
        if (!city) return;
        try{
          this.dataLoaded = false;
          let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${this.API_KEY}`);
          this.data = await response.json();
          console.log(this.data);
          this.dataLoaded = true;
        } catch(error){
          console.log(error);
        }
      }
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