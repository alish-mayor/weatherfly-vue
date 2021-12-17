<template>
    <div class="home">
        <div class="search">
        <i class='bx bx-search search__icon'></i>
        <input class="search__input" placeholder="enter the city...">
      </div>
      <div class="header">
        <h2 class="header__title">Astana, <span class="header__subtitle">Kazakhstan</span></h2>
        <button class="header__btn"><i class='bx bx-heart'></i></button>
      </div>
      <div class="main-info">
        <i class='bx bx-cloud main-info__icon'></i>
        <h4 class="main-info__title">Cloudy</h4>
        <p class="main-info__subtitle">Thursday, 09 Nov</p>
        <h3 class="main-info__temp">{{ transToCelsius(data.main.temp) }}</h3>
      </div>
      <div class="extra-info">
        <div class="extra-info__card">
          <i class='bx bx-wind card__icon'></i>
          <div>
            <h4 class="card__title">Wind</h4>
            <p class="card__subtitle">{{data.wind.speed.toFixed(0)}} m/s</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bx-droplet card__icon'></i>
          <div>
            <h4 class="card__title">Humidity</h4>
            <p class="card__subtitle">{{ data.main.humidity}}%</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bxs-thermometer card__icon' ></i>
          <div>
            <h4 class="card__title">Feels like</h4>
            <p class="card__subtitle">{{ transToCelsius(data.main.feels_like)}}</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bx-arrow-to-bottom card__icon'></i>
          <div>
            <h4 class="card__title">Pressure</h4>
            <p class="card__subtitle">{{ data.main.pressure }}mbar</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default({
    name: 'Home',
    data() {
        return{
          API_KEY: '8d4a78af5654c729225221369eb116f4',
          data: {},
        }
    },
    methods: {
      async getData(){
        try{
          let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.API_KEY}`);
          this.data = await response.json();
        } catch(error){
          console.log(error);
        }
      },
      transToCelsius(temp) {
       return `${(temp - 273.15).toFixed(2)}ºC`;
      },

    },
    created(){
      this.getData();
    },
    computed:{
      temp(){
        return this.data.main.temp;
      }
    }
})
</script>

<style scoped>
    .search{
    display: flex;
    align-items: center;
    background: #F4F4F4;
    padding: 0.5rem;
    border-radius: var(--sm-bd-rd);
    
  }

  .search__icon{
    color: grey;
    font-size: 2rem;
  }

  .search__input{
    margin-left: 0.5rem;
    outline: none;
    width: 100%;
  }

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  .header__title{
    font-weight: 500;
  }
  
  .header__subtitle{
    font-weight: 300;
    font-size: 1.8rem;
  }

  .header__btn{
    width: 2.4rem;
    height: 2.4rem;
    font-size: 2rem;
  }

  .main-info{
    text-align: center;
    margin-top: 5rem;
  }

  .main-info__icon{
    font-size: 9.6rem;
  }

  .main-info__title{
    margin-top: -1.5rem;
    font-weight: 400;
    font-size: 1.8rem;
  }

  .main-info__subtitle{
    color: #999999;
  }

  .main-info__temp{
    font-weight: 500;
    font-size: 3.6rem;
    margin-top: 1rem;
  }

  .extra-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
    row-gap: 2rem;
    column-gap: 2rem;
    margin-top: 2.5rem;
  }

  .extra-info__card{
    display: flex;
    align-items: center;
    
  }

  .card__icon{
    font-size: 3rem;
    margin-right: 1rem;
  }

  .card__title{
    font-size: 1.8rem;
    font-weight: 300;
  }

  .card__subtitle{
    font-weight: 300;
    color: #707070;
  }
</style>
