import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

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
    deleteFavourite(state, index) {
      state.favourites.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
