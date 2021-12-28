<template>
  <div class="app">
    <div class="app__container">
      <router-view></router-view>
      <div class="navigation" @click="changeActive($event)">
        <div class="navigation__item"><router-link to="/"><i class='bx bx-home navigation__icon active' ></i></router-link></div>
        <div class="navigation__item"><router-link to="/days"><i class='bx bx-list-ul navigation__icon' ></i></router-link></div>
        <div class="navigation__item"><router-link to="/favourites"><i class='bx bx-heart navigation__icon' ></i></router-link></div>
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
  methods: {
    changeActive(e){
      if(!e.target.classList.contains('navigation__icon')) return;
      const navLinks = document.querySelectorAll('.navigation__icon');
      navLinks.forEach(link => {
        link.classList.remove('active');
      })
      e.target.classList.add('active');
    }
  }
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

  .navigation__item a{
    color: inherit;
  }

  .navigation__item i{
    padding: 1rem;
    border-radius: 50%;
    font-size: 2.8rem;
  }

  .navigation__item i.active{
    background:#72EB9B;
    color: #ffffff;
  }

  .load-overlay{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .load-overlay__icon{
    font-size: 3rem;
  }

  @media (min-width: 320px) and (max-width: 350px) {
    :root{
      font-size: 8px;
    }
  }
  
</style>
