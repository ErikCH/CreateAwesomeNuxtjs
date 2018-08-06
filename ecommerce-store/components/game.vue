<template>

  <div>

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
          <slot></slot>
        </v-card>
  </div>

</template>



<script>
export default {
  props: ['product']
};
</script>



<style scoped>
</style>
