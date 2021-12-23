import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCity: {},
    favourites: [],
  },
  mutations: {
    changeCity(state, newCity) {
      state.currentCity = Object.assign({}, newCity);
    },
    addFavourite(state, city) {
      state.favourites.push(city);
    },
  },
  actions: {},
  modules: {},
});
