<template>
  <div class="favourites">
    <h2 class="title">Favourites</h2>
    <p class="caption" v-if="favouritesList.length < 1">
      You haven't any favourite city yet! Please add some!
    </p>
    <div class="favourites-collection">
      <favourite-card
        v-for="(city, index) in favouritesList"
        :key="index"
        :favCity="city"
      ></favourite-card>
    </div>
  </div>
</template>

<script>
import favouriteCard from "./FavouriteCard.vue";

export default {
  name: "Favourites",
  components: {
    favouriteCard,
  },
  data() {
    return {};
  },
  computed: {
    favouritesList() {
      return this.$store.state.favourites;
    },
  },
};
</script>

<style scoped>
.favourites-collection {
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
