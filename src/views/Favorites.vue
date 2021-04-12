<template>
<div>
  <h1 class="heading"> Your Favorites </h1>
  <div class="empty">
  <h2 v-show="fav.length === 0">You haven't added any favorites yet!</h2>
  </div>
  <FavList :products="fav" />
</div>
</template>


<script>
import FavList from "../components/FavList.vue"
export default {
  name: 'Favorites',
  components: {
    FavList
  },
  data() {
    return {

    }
  },
  computed: {
    fav() {
      return this.$root.$data.fav;
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.empty{
  text-align: center;
  font-size: 30px;
  color: #5085A5;
}

.heading{
  font-family: georgia;
  text-align: center;
}
</style>
