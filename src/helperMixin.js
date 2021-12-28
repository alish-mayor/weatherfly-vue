import apiKey from "./apiKey.js";

export const helperMixin = {
  data() {
    return {
      API_KEY: apiKey,
      dataLoaded: false,
      loading: false,
      data: {},
    };
  },
  methods: {
    transToCelsius(temp) {
      return `${(temp - 273.15).toFixed(0)}ºC`;
    },
    getIcon(weatherDesc) {
      switch (weatherDesc) {
        case "Drizzle":
          return "bx-cloud-drizzle";
        case "Snow":
          return "bx-cloud-snow";
        case "Clear":
          return "bx-sun";
        case "Rain":
          return "bx-cloud-rain";
        case "Thunderstorm":
          return "bx-cloud-lightning";
        case "Clouds":
          return "bx-cloud";
        default:
          return "bx-water";
      }
    },
  },
  computed: {
    currentCity() {
      return this.$store.state.currentCity;
    },
  },
};

export default helperMixin;
