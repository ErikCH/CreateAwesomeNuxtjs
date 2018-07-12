<template>
<div>
  <h1>Hello World</h1>
</div>
</template>
<script>
export default {
  data() {
    return {
      myTitle: "This is the meta"
    };
  },
  head() {
    return {
      titleTemplate: "%s - checkout",
      meta: [{ name: "description", content: this.myTitle }]
    };
  }
};
</script>
