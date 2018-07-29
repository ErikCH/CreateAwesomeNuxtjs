<template>
  <div>
    <h1>Page Not Found</h1>
    {{error.statusCode === 404 ? 'Not Found' : ''}}
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>

<style scoped>
</style>
