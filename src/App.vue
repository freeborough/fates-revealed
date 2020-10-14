<template>
  <div id="app">
    <h1 id="logo">Fates Revealed</h1>
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

@font-face {
  font-family: 'Capitalis';
  src: url('/fonts/CapitalisTypOasis.ttf') format('truetype');
}

@font-face {
  font-family: 'BerlinSmallCaps';
  font-display: swap;
  src: url('/fonts/BerlinSmallCaps.ttf') format('truetype');
}

body {
  background-color: #191919;
  color: #8c8c8c;
  font-family: BerlinSmallCaps;
}

#logo {
  font-family: Capitalis;
  text-transform: uppercase;
  color: #ffffa3;
}

</style>