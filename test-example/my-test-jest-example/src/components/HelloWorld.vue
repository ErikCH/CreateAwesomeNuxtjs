<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ counter }}</h2>
    <button @click="increment()">Increment</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
