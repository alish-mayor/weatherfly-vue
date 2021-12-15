<template>
  <div class="app">
    <div class="app__container">
      <!-- <home></home> -->
      <!-- <days-list></days-list> -->
      <favourites></favourites>
      <div class="navigation">
        <div class="navigation__item active"><i class='bx bx-home' ></i></div>
        <div class="navigation__item"><i class='bx bx-list-ul' ></i></div>
        <div class="navigation__item"><i class='bx bx-heart' ></i></div>
      </div>
    </div>
  </div>
</template>

<script>

// import home from './components/Home.vue'
// import daysList from './components/DaysList.vue'
import favourites from './components/Favourites.vue'

export default {
  name: "App",
  components: {
    // home
    // daysList
    favourites
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
