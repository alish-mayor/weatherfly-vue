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
  }

  .app__container{
    background: #ffffff;
    border-radius: var(--md-bd-rd);
    padding: 3rem 2rem;
    width: 375px;
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
    width: 24px;
    height: 24px;
    font-size: 20px;
  }


  
  
</style>
