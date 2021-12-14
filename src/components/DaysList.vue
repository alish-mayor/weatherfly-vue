<template>
    <div class="days-list">
        <h2 class="title">Astana, <span class="subtitle">Kazakhstan</span></h2>
        <ul class="list">
            <li class="list__item">
                <i class='bx bx-sun list__item__icon'></i>
                <p class="list__item__day">Friday, <span class="list__item__date">10 Nov</span></p>
                <p class="list__item__temp">-15ºC</p>
            </li>
            <li class="list__item">
                <i class='bx bx-cloud list__item__icon'></i>
                <p class="list__item__day">Saturday, <span class="list__item__date">11 Nov</span></p>
                <p class="list__item__temp">-20ºC</p>
            </li>
            <li class="list__item">
                <i class='bx bx-sun list__item__icon'></i>
                <p class="list__item__day">Sunday, <span class="list__item__date">10 Nov</span></p>
                <p class="list__item__temp">-15ºC</p>
            </li>
            <li class="list__item">
                <i class='bx bx-sun list__item__icon'></i>
                <p class="list__item__day">Wednesday, <span class="list__item__date">10 Nov</span></p>
                <p class="list__item__temp">-15ºC</p>
            </li>
            <li class="list__item">
                <i class='bx bx-sun list__item__icon'></i>
                <p class="list__item__day">Monday, <span class="list__item__date">10 Nov</span></p>
                <p class="list__item__temp">-15ºC</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DaysList',
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