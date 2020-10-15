import Vue from 'vue';
import Vuex from 'vuex';
import { givers, boons, tags } from './GameData';

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
        selected: false,
      }
    }),
    /**
     * Simple an array of all the boons as provided by the game data.
     * 
     * TODO: See what performance is like on mobile devices and see if it would be worth creating per-giver indexes to the boons.
     */
    boons,
    tags: tags.map(function(tag) {
      return {
        name: tag,
        selected: false,
      }
    }),
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
     * Returns all tags.
     */
    tags: (state) => {
      return state.tags;
    },
    /**
     * Returns all currently selected tags.
     */
    selectedTags: (state) => {
      return state.tags.filter(tag => tag.selected);
    },
    /**
     * This gets all boons that match the currently selected elements.  This includes:
     *  - Givers
     *  - Tags
     */
    matchingBoons: (state, getters) => {
      const selectedGiverNames = getters.selectedGivers.map(g => g.name);
      const selectedTagNames = getters.selectedTags.map(t => t.name);

      return state.boons.filter((boon) => {
        return boon.giver.some(g => selectedGiverNames.includes(g)) && boon.tags.some(t => selectedTagNames.includes(t));
      }
      );
    },

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
    /**
     * Toggles the selected state of the specified tag (from true to false, and false to true).
     * 
     * @param {tag} tag The tag to toggle.
     */
    toggleTag (state, tag) {
      tag.selected = !tag.selected;
    },
  }
});
