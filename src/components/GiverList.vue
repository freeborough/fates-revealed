<template>
  <div id="giver-list">
    <button @click="toggle(giver)" v-for="giver in givers" :key="giver.name" class="giver-toggle" :class="{ 'giver-selected': giver.selected }">
      <img class="giver-symbol" :src="giver.symbol" :alt="giver.name" />
      <span class="giver-name">{{ giver.name }}</span>
    </button>
  </div>
</template>

<script>
import { givers } from '../GameData';

export default {
  name: 'giver-list',
  data: function() {
    return {
      givers: givers.map(function(giver) {
        return {
          name: giver,
          symbol: `/images/giver-symbols/${giver}.png`,
          selected: false
        }})
    }
  },
  methods: {
    toggle(giver) {
      giver.selected = !giver.selected;
    }
  }
}
</script>

<style>
.giver-symbol {
  height: 100%;
}

.giver-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  font-size: 4vh;
  background: none;
  border: none;
  cursor: pointer;
  filter: drop-shadow(.1em .1em .1em #000000);
}

.giver-selected {
  filter: drop-shadow(.1em .1em .2em #666666);
}

.giver-name {
  font-family: BerlinSmallCaps;
  color: #8c8c8c;
  padding-left: 0.3em;
  flex-grow: 1;
}

.giver-selected .giver-name {
  color: #ffffff;
}

</style>