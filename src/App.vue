<template>
  <div id="app">
    <div id="top-bar">
      <h1 id="logo">Fates Revealed</h1>
    </div>
    <GiverList id="givers"></GiverList>
    <BoonList id="boons"></BoonList>
  </div>
</template>

<script>
import GiverList from './components/GiverList';
import BoonList from './components/BoonList';

export default {
  name: 'App',
  components: {
    GiverList,
    BoonList
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

#app {
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-areas:
    "top-bar top-bar"
    "givers boons";
}

#top-bar {
  grid-area: top-bar;
}

#givers {
  grid-area: givers;
}

#boons {
  grid-area: boons;
  padding-left: 1vw;
}

#logo {
  font-family: Capitalis;
  text-transform: uppercase;
  color: #2ce975;
}

</style>