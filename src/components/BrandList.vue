<template>
<div class="wrapper">
  <div class="stores">
    <div class="store" v-for="store in stores" :key="store.id">
      <div class="info">
        <h1>{{store.name}}</h1>
        <p>{{store.type}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+store.image">
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BrandList',
  props: {
    stores: Array
  },
  methods: {

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stores {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.store {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.store img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.store .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: darkgray;
  color: #000;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
