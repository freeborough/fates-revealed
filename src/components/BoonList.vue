<template>
  <div class="boon-list">
    <div v-for="boon in matchingBoons" :key="boon.name" class="boon">
      <div class="boon-name">{{ boon.name }}</div>
      <div class="boon-description" v-html="boon.description"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'boon-list',
  computed: {
    ...mapGetters([
      'matchingBoons'
    ]),
  }
}
</script>

<style>

.boon {
  font-size: 1.5em;
  border: solid 2px #574e3e;
  border-radius: 4px;
  padding: .4em;
  margin-top: .5em;
  margin-bottom: .5em;
}

.boon-name {
  color: #eeeeee;
}

.boon-description {
  font-family: sans-serif;
  font-size: .9em;
}

</style>