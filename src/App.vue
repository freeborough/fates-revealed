<template>
  <div id="app">
    <div id="top-bar">
      <h1 id="logo">Fates Revealed</h1>
    </div>
    <TagList id="tags"></TagList>
    <GiverList id="givers"></GiverList>
    <BoonList id="boons"></BoonList>
  </div>
</template>

<script>
import GiverList from './components/GiverList';
import BoonList from './components/BoonList';
import TagList from './components/TagList';

export default {
  name: 'App',
  components: {
    GiverList,
    BoonList,
    TagList,
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

:root {
  --main-background: #191919;
  --main-text: #8c8c8c;
  --main-highlight: #eeeeee;
  --alternate-highlight: #86e851;
  --class-duo: #d2ff61;
  --class-legendary: #ff9000;
  --ui-shade: #222222;
  --ui-highlight: #574e3e;
}

body {
  background-color: var(--main-background);
  color: var(--main-text);
  font-family: BerlinSmallCaps;
}

#app {
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-areas:
    "top-bar top-bar top-bar"
    "tags givers boons";
}

#top-bar {
  grid-area: top-bar;
}

#givers {
  grid-area: givers;
  padding-left: 1vw;
}

#tags {
  grid-area: tags;
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