<template>
    <div class="days-list">
        <h2 class="title">Astana <span class="subtitle">Kazakhstan</span></h2>
        <ul class="list">
            <li v-for="item in daysList" class="list__item" :key="item.id">
                <i class='bx bx-sun list__item__icon'>{{item.icon}}</i>
                <p class="list__item__day"> {{item.date}} <span class="list__item__date"></span></p>
                <p class="list__item__temp">{{ item.temp }}</p>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DaysList',
    data(){
        return{
            daysList: [
            {
                id: 10499310,
                icon: 'Cloud',
                date: 'Friday, 10 Nov',
                temp: '-15ºC'
            },
            {
                id: 104993219,
                icon: 'Sun',
                date: 'Saturday, 11 Nov',
                temp: '-10ºC'
            },
            ]
        }
    },
    computed: {
        currentCity(){
            return this.$store.state.currentCity;
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