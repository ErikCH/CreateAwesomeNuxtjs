<template>
<v-card>
  <v-container class="fluid grid-list-md">
    <v-layout class="row wrap">
      <v-flex v-for="product in products" xs6 :key="product.title">
        <v-card>
          <v-card-media :src="product.pic" class="media" height="300px">
            <v-container class="fill-height fluid">
              <v-layout>
                <v-flex class="xs12 align-enter flexbox">
                  <span class="display-1 yellow--text" v-text="product.title"></span>
                </v-flex>

              </v-layout>

            </v-container>

          </v-card-media>
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


        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</v-card>
</template>
<!-- <v-layout column justify-center align-center>
        <h1>Hello World</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>{{product.title}}</ul>
        </li>
  </v-layout> -->
<script>
import { db } from "../plugins/firebase";

export default {
  components: {},
  data() {
    return {
      products: []
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
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
