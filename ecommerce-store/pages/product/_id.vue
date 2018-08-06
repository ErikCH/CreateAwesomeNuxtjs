<template>
  <div>
    <Game :product="product">
    </Game>
    <h1>{{product.description}}</h1>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase';
import Game from '~/components/game';
import axios from 'axios';
export default {
  scrollToTop: true,
  data() {
    return {
      product: ''
    };
  },
  validate({ params }) {
    return params.id !== undefined;
  },
  components: { Game },
  // async asyncData({ params, store }) {
  //   const response = await db
  //     .collection('products')
  //     .doc(params.id)
  //     .get();
  //   const product = await response.data();
  //   return { product };
  // },
  firestore() {
    return {
      product: db
        .collection('products')
        .doc(this.$route.params.id)
    };
  },
  fetch({ store, params }) {
    const products = store.getters.products;
    const product = products.filter(val => {
      return val.id === params.id;
    });
    axios
      .get('/api', { params: { title: product[0].title } })
      .then(val => {
        console.log(val);
        db
          .collection('products')
          .doc(params.id)
          .update({ description: val.data });
      });
  }
};
</script>

<style scoped>
</style>
