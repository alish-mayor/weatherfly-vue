<template>
    <div class="favourites">
         <h2 class="title">Favourites</h2>
         <div class="favourites-collection">
             <favourite-card v-for="(city,index) in favouritesList" :key="index" :favCity="city"></favourite-card>
         </div>
    </div>
</template>

<script>
import favouriteCard from './FavouriteCard.vue'

export default {
    name: 'Favourites',
    components: {
        favouriteCard,
    },
    data(){
        return{

        }
    },
    computed: {
        favouritesList(){
            return this.$store.state.favourites;
        }
    },
}
</script>

<style scoped>
    .title{
        text-align: center;
        font-weight: 500;
        font-size: 2.2rem;
    }

    .favourites-collection{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 16rem;
        row-gap: 2.5rem;
        justify-items: center;
        height: 50rem;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px;
    }

    
</style>