<template>
  <div id="app">
    <h1>Fates Revealed</h1>
    <GiverList></GiverList>
  </div>
</template>

<script>
import GiverList from './components/GiverList';

export default {
  name: 'App',
  components: {
    GiverList
  }
}
</script>

<style>

body {
  background-color: #191919;
  color: #8c8c8c;
  font-family: sans-serif;
}

</style>