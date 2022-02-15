<template>
  <div class="home">
    <div class="load-overlay" v-if="loading">
      <i class="bx bx-loader bx-spin load-overlay__icon"></i>
    </div>
    <div class="search">
      <i class="bx bx-search search__icon"></i>
      <input
        class="search__input"
        placeholder="enter the city..."
        @input="isError = false"
        v-model="cityInput"
        @keydown.enter="getData(cityInput)"
      />
    </div>
    <p style="color: red" v-if="isError">
      Nothing found. Please enter correct city.
    </p>
    <div class="content" v-if="dataLoaded">
      <div class="header">
        <h2 class="header__title">
          {{ data.name }},
          <span class="header__subtitle">{{ data.sys.country }}</span>
        </h2>
        <button @click="favouriteCity">
          <i class="bx header__icon" :class="favourited"></i>
        </button>
      </div>
      <div class="main-info">
        <i
          class="bx main-info__icon"
          :class="getIcon(data.weather[0].main)"
        ></i>
        <h4 class="main-info__title">{{ data.weather[0].main }}</h4>
        <p class="main-info__subtitle">{{ getTime() }}</p>
        <h3 class="main-info__temp">{{ transToCelsius(data.main.temp) }}</h3>
      </div>
      <div class="extra-info">
        <div class="extra-info__card">
          <i class="bx bx-wind card__icon"></i>
          <div>
            <h4 class="card__title">Wind</h4>
            <p class="card__subtitle">{{ data.wind.speed.toFixed(0) }} m/s</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class="bx bx-droplet card__icon"></i>
          <div>
            <h4 class="card__title">Humidity</h4>
            <p class="card__subtitle">{{ data.main.humidity }}%</p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class="bx bxs-thermometer card__icon"></i>
          <div>
            <h4 class="card__title">Feels like</h4>
            <p class="card__subtitle">
              {{ transToCelsius(data.main.feels_like) }}
            </p>
          </div>
        </div>
        <div class="extra-info__card">
          <i class="bx bx-arrow-to-bottom card__icon"></i>
          <div>
            <h4 class="card__title">Pressure</h4>
            <p class="card__subtitle">{{ data.main.pressure }}mbar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helperMixin from "../helperMixin";

export default {
  name: "Home",
  data() {
    return {
      cityInput: "",
      isError: false,
    };
  },
  mixins: [helperMixin],
  methods: {
    async getData(city) {
      if (!city) return;
      try {
        this.loading = true;
        this.dataLoaded = false;
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`
        );
        if (!response.ok) {
          this.loading = false;
          this.dataLoaded = false;
          this.isError = true;
          throw new Error("Nothing found...");
        }
        this.data = await response.json();
        this.loading = false;
        this.dataLoaded = true;
        this.isError = false;
        if (this.cityInput.length > 0) this.changeCity();
        this.cityInput = "";
      } catch (error) {
        console.log(error);
      }
    },
    getTime() {
      const time = new Date().toDateString().split(" ");
      const month = time[1];
      const date = time[2];
      const weekDay = new Date().getDay();
      const weekDays = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      };
      return `${weekDays[weekDay]}, ${date} ${month}`;
    },
    favouriteCity() {
      if (this.favouritesList.includes(this.data.name)) {
        this.$store.commit(
          "deleteFavourite",
          this.favouritesList.indexOf(this.data.name)
        );
      } else {
        this.$store.commit("addFavourite", this.data.name);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.getData(this.currentCity.cityName);
      this.getTime();
    }, 100);
  },
  computed: {
    favouritesList() {
      return this.$store.state.favourites;
    },
    favourited() {
      return this.favouritesList.includes(this.data.name)
        ? "bxs-heart active"
        : "bx-heart";
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 0.5rem;
  border-radius: var(--sm-bd-rd);
}

.search__icon {
  color: grey;
  font-size: 2rem;
}

.search__input {
  margin-left: 0.5rem;
  outline: none;
  width: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.header__title {
  font-weight: 500;
}

.header__subtitle {
  font-weight: 300;
  font-size: 1.8rem;
}

.header__icon {
  width: 2.4rem;
  height: 2.4rem;
  font-size: 2rem;
}

.header__icon.active {
  color: red;
}

.main-info {
  text-align: center;
  margin-top: 5rem;
}

.main-info__icon {
  font-size: 9.6rem;
}

.main-info__title {
  margin-top: -0.5rem;
  font-weight: 400;
  font-size: 1.8rem;
}

.main-info__subtitle {
  color: #999999;
}

.main-info__temp {
  font-weight: 500;
  font-size: 3.6rem;
  margin-top: 1rem;
}

.extra-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 3rem;
  row-gap: 2rem;
  column-gap: 2rem;
  margin-top: 2.5rem;
}

.extra-info__card {
  display: flex;
  align-items: center;
}

.card__icon {
  font-size: 3rem;
  margin-right: 1rem;
}

.card__title {
  font-size: 1.8rem;
  font-weight: 300;
}

.card__subtitle {
  font-weight: 300;
  color: #707070;
}

.home {
  position: relative;
  height: 100%;
}

.error {
  color: red;
}
</style>
