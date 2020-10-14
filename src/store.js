import Vue from 'vue';
import Vuex from 'vuex';
import { givers, boons } from './GameData';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    /**
     * Simply an array of all givers, taken from our game data, along with any meta-data (like images) and whether or
     * not they're currently selected and should be used to filter the results.
     */
    givers: givers.map(function(giver) {
      return {
        name: giver,
        symbol: `/images/giver-symbols/${giver}.png`,
        selected: false
      }}),
    /**
     * Simple an array of all the boons as provided by the game data.
     * 
     * TODO: See what performance is like on mobile devices and see if it would be worth creating per-giver indexes to the boons.
     */
    boons,
  },
  getters: {
    /**
     * Returns all givers.
     */
    givers: (state) => {
      return state.givers;
    },
    /**
     * Returns all currently selected givers.
     */
    selectedGivers: (state) => {
      return state.givers.filter(giver => giver.selected);
    },
    /**
     * This gets all boons that match the currently selected elements.  At the moment that's just the givers, but there will be more soon.
     */
    matchingBoons: (state, getters) => {
      const selectedGiverNames = getters.selectedGivers.map(g => g.name);
      return state.boons.filter(boon => boon.giver.some(g => selectedGiverNames.includes(g)));
    }
  },
  mutations: {
    /**
     * Toggles the selected state of the specified giver (from true to false, and false to true).
     * 
     * @param {giver} giver The giver to toggle.
     */
    toggleGiver (state, giver) {
     giver.selected = !giver.selected;
    },
  }
});
