<template>
  <div class="tag-list">
    <button @click="toggleTag(tag)" v-for="tag in tags" :key="tag.name" class="tag-toggle" :class="{ 'tag-selected': tag.selected }">
      <span class="tag-name">{{ tag.name }}</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'tag-list',
  computed: {
    ...mapGetters([
      'tags'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleTag'
    ])
  }
}
</script>

<style>

.tag-list {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.tag-toggle {
  display: flex;
  cursor: pointer;
  background: none;
  border: none;
  filter: drop-shadow(.1em .1em .1em #000000);
}

.tag-name {
  font-family: BerlinSmallCaps;
  font-size: 2em;
  color: var(--main-text);
}

.tag-selected .tag-name {
  color: var(--main-highlight);
  filter: drop-shadow(.1em .1em .2em #666666);
}

</style>