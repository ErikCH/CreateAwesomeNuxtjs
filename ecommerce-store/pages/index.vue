<template>
<v-card>
  <v-container class="fluid grid-list-md">
    <v-layout class="row wrap">
      <v-flex v-for="product in myProducts" xs6 :key="product.title">
        <router-link :to="`product/${product.id}`">
        <Game :product="product">
           <v-card-actions>
            <v-spacer>
              <v-btn icon>
                  <v-icon>
                    favorite
                  </v-icon>
              </v-btn>
              <v-btn icon>
                  <v-icon>
                    share
                  </v-icon>
              </v-btn>
              <v-btn icon>
                  <v-icon>
                   add_shopping_cart
                  </v-icon>
              </v-btn>
            </v-spacer>
          </v-card-actions>
        </Game>
        </router-link>
      </v-flex>
    </v-layout>

  </v-container>
</v-card>
</template>
<script>
import { db } from '../plugins/firebase';
import Game from '../components/game';

export default {
  components: { Game },
  data() {
    return {
      products: []
    };
  },
  firestore() {
    return {
      products: db.collection('products')
    };
  },
  computed: {
    myProducts() {
      this.$store.dispatch('setProduct', this.products);
      return this.products;
    }
  }
};
</script>
<style>
.card__media__background {
  opacity: 0.9 !important;
}

.media:hover {
  opacity: 0.4;
}
</style>
