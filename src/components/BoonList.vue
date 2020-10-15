<template>
  <div class="boon-list">
    <div v-for="boon in matchingBoons" :key="boon.name" class="boon" :class="boonClass(boon)">
      <div class="boon-title">
        <div class="boon-name">{{ boon.name }}</div>
        <div class="boon-class">{{ boon.class }}</div>
      </div>
      <div class="boon-body">
        <div class="boon-description" v-html="formatDescription(boon.description)"></div>
        <div class="boon-modifiers">
          <div v-for="(value, attribute, index) in boon.modifier" :key="index" class="boon-modifier">
            <div class="boon-modifier-attribute">{{ attribute }}</div>
            <div class="boon-modifier-value">{{ value }}</div>
          </div>
        </div>
      </div>
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
  },
  methods: {
    /**
     * We use [] and {} within boon descriptions to indicate 'tag' elements that should be highlighted.  This method
     * simply replaces those with <span class="boon-tag"> and </span>.  Therefore it needs to be used with v-html.
     * 
     * @param {string}  description   The boon description that needs to be formatted.
     * @return {html}   The description formatted in HTML.
     */
    formatDescription (description) {
      return description.replace(/[\[\{]/g, '<span class="boon-tag">').replace(/[\]\}]/g, '</span>');
    },
    /**
     * Simply returns the css class name for this boon based on the class of boon (e.g. common, duo, or legendary).
     * 
     * @param {boon}    boon    The boon to use as the reference to identify the class.
     * @return {string} The css class name to use.
     */
    boonClass (boon) {
      return `boon-class-${boon.class}`;
    }
  }
}
</script>

<style>

.boon {
  position: relative;
  font-size: 1.5em;
  border: solid 2px var(--ui-highlight);
  border-radius: 4px;
  padding: .5em;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 21em;
}

.boon:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: solid 2px var(--ui-shade);
  border-radius: 4px;
}

.boon-title {
  display: flex;
  flex-direction: row;
}

.boon-class {
  margin-left: auto;
}

.boon-class-common .boon-title {
  color: var(--main-highlight);
}

.boon-class-duo .boon-title {
  color: var(--class-duo);
}

.boon-class-legendary .boon-title {
  color: var(--class-legendary);
}

.boon-class-common .boon-class {
  display: none;
}

.boon-description {
  padding-top: .5em;
  font-family: sans-serif;
  font-size: .7em;
}

.boon-tag {
  font-weight: bold;
  color: var(--main-highlight);
}

.boon-modifiers {
  font-family: sans-serif;
  font-size: .7em;
  padding-left: 1em;
  padding-top: .5em;
}

.boon-modifier {
  display: flex;
  flex-direction: row;
}

.boon-modifier-attribute {
  color: var(--main-highlight);
  width: 16em;
}

.boon-modifier-attribute:after {
  content: ':';
}

.boon-modifier-value {
  color: var(--alternate-highlight);
  font-weight: bold;
}

</style>