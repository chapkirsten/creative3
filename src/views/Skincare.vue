<template>
  <div>
  <div class="about">
    <p>We all want <strong>gorgeous</strong>,<strong> glowing</strong> skin. Here are the products we recommend for each skin type to get it!</p>
  </div>

  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('dry')" href="#" class="pure-menu-link">Dry Skin</a></li>
      <li class="pure-menu-item"><a @click="select('normal')" href="#" class="pure-menu-link">Normal Skin</a></li>
      <li class="pure-menu-item"><a @click="select('oily')" href="#" class="pure-menu-link">Oily Skin</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Skincare',
  components: {
    ProductList
  },
  data() {
    return {
      skintype: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.skintype === this.skintype);
    }
  },
  methods: {
    select(skintype) {
      this.skintype = skintype;
    }
  }
}
</script>

<style scoped>
  .about{
    text-align:center;
    font-size: 40px;
  }

  .pure-menu-list{
    list-style:none;
    text-align:center;
    background-color: darkgray;
    padding: 30px
  }

  .pure-menu-item{
    font-family: georgia;
    font-size: 30px;
  }
  .pure-menu-item :hover{
    color: pink;
  }
  .pure-menu-item :visited{
    color: white;
  }


</style>
