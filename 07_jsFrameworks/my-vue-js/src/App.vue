<template>
  <MyReactive></MyReactive>
</template>

<script>
import MyReactive from "@/components/reactive/MyReactive";

export default {
  name: 'App',
  components: {
    MyReactive

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 { border: 1px solid red}
</style>
