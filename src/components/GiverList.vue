<template>
  <div class="giver-list">
    <button @click="toggleGiver(giver)" v-for="giver in givers" :key="giver.name" class="giver-toggle" :class="{ 'giver-selected': giver.selected }">
      <img class="giver-symbol" :src="giver.symbol" :alt="giver.name" />
      <span class="giver-name">{{ giver.name }}</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'giver-list',
  computed: {
    ...mapGetters([
      'givers'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleGiver'
    ])
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
  height: 2em;
  font-size: 2em;
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
  color: var(--main-text);
  padding-left: 0.3em;
  flex-grow: 1;
}

.giver-selected .giver-name {
  color: var(--main-highlight);
}

</style>