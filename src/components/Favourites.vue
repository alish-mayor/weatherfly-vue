<template>
    <div class="favourites">
         <h2 class="title">Favourites</h2>
         <div class="favourites-collection">
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-15ºC</p>
                 <p class="card__city">Astana</p>
                 <p class="card__country">Kazakhstan</p>
             </div>
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-20ºC</p>
                 <p class="card__city">Moscow</p>
                 <p class="card__country">Russia</p>
             </div>
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-15ºC</p>
                 <p class="card__city">Astana</p>
                 <p class="card__country">Kazakhstan</p>
             </div>
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-15ºC</p>
                 <p class="card__city">Astana</p>
                 <p class="card__country">Kazakhstan</p>
             </div>
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-15ºC</p>
                 <p class="card__city">Astana</p>
                 <p class="card__country">Kazakhstan</p>
             </div>
             <div class="card">
                 <i class='bx bx-cloud card__icon'></i>
                 <p class="card__temp">-20ºC</p>
                 <p class="card__city">Moscow</p>
                 <p class="card__country">Russia</p>
             </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'Favourites',
    data(){
        return{

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

    .favourites-collection{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        height: 500px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px;
    }

    .card{
        width: 40%;
        text-align: center;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        padding: 1.5rem 2rem;
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
        font-size: 1.8rem;
    }

    .card__country{
        color: #999999;
    }

    @media (min-width: 320px) and (max-width: 350px) {
    .favourites-collection{
        height: 400px;
    }
  }
    
</style>