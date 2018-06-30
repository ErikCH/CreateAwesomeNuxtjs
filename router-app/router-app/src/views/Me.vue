<template>
  <div>
      <h1>Hello From The Me Route</h1>
      <h2>{{ $route.params }}</h2>
      <router-link :to="{name: 'UserProfile'}">UP</router-link>
      <router-view></router-view>
      <button @click="onPressed()">Go To Home</button>
  </div>
</template>

<script>
export default {
  name: "me",
  created() {
    console.log(this.$route.params.id);
  },
  methods: {
    onPressed() {
      this.$router.push("/");
    }
  }
};
</script>