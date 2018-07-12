<template>
  <div>
    <Game :product="product">
    </Game>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";
import Game from "~/components/game";
export default {
  components: { Game },
  async asyncData({ params }) {
    const response = await db
      .collection("products")
      .doc(params.id)
      .get();
    const product = await response.data();
    return { product };
  }
};
</script>

<style scoped>
</style>
