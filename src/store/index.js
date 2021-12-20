import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCity: "Astana",
  },
  mutations: {
    changeCity(state, city) {
      state.currentCity = city;
    },
  },
  actions: {},
  modules: {},
});
