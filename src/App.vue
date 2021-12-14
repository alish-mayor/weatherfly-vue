<template>
  <div class="app">
    <div class="app__container">
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
        <h3 class="main-info__temp">-20ºC</h3>
      </div>
      <div class="extra-info">
        <div class="extra-info__card">
          <i class='bx bx-wind card__icon'></i>
          <div>
            <h4 class="card__title">Wind</h4>
            <p class="card__subtitle">2 m/s</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bx-sun card__icon'></i>
          <div>
            <h4 class="card__title">Index UV</h4>
            <p class="card__subtitle">2</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bxs-thermometer card__icon' ></i>
          <div>
            <h4 class="card__title">Feels like</h4>
            <p class="card__subtitle">-30ºC</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class='bx bx-arrow-to-bottom card__icon'></i>
          <div>
            <h4 class="card__title">Pressure</h4>
            <p class="card__subtitle">1000 mbar</p>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="navigation__item active"><i class='bx bx-home' ></i></div>
        <div class="navigation__item"><i class='bx bx-list-ul' ></i></div>
        <div class="navigation__item"><i class='bx bx-heart' ></i></div>
      </div>
    </div>
  </div>
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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  *{
    box-sizing: border-box;
  }

  :root{
    font-size: 10px;
    --sm-bd-rd: 5px;
    --md-bd-rd: 10px;
  }

  body{
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(300.44deg, #99EDFF 14.12%, #ACD682 85.06%);
    font-size: 1.6rem;
  }

  .app{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .app__container{
    background: #ffffff;
    border-radius: var(--md-bd-rd);
    padding: 3rem 2rem;
    min-width: 300px;
    width: 37.5rem;
    height: 67rem;
    position: relative;
  }

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

  .navigation{
    position: absolute;
    display: flex;
    bottom: 3rem;
    left: 0;
    right: 0;
    justify-content: space-around;

  }

  .navigation__item{
    cursor: pointer;
  }

  .navigation__item i{
    padding: 1rem;
    border-radius: 50%;
    font-size: 2.8rem;
  }

  .navigation__item.active i{
    background:#72EB9B;
    color: #ffffff;
  }

  @media (min-width: 320px) and (max-width: 350px) {
    :root{
      font-size: 8px;
    }
  }

  


  
  
</style>
