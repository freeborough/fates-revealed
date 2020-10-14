/**
 * This data is taken straight from the game and structured in such a way that it's easy to input and maintain.  We can
 * then manipulate this to be more efficient to use as necessary.
 * 
 * Usage:
 * 
 * import { givers, weapons, boons } from 'GameData';
 * givers.forEach(giver => console.log(giver));
 * 
 * TODO: Investigate more thoroughly if we can get this data from the game files directly.
 */

/**
 * The names of the characters in the game that can give boons to the player.  Note that this isn't simply a list of
 * the Gods of Olympus as it also includes Chaos.
 * 
 * NOTE: I have currently excluded Bouldy from the list as you cannot choose which boon you will recieve from him, and
 *       the effects of the boons are relatively minor.  When we look at adding support for calcuating stats, we can
 *       look at adding Bouldy in.
 */
const givers = [
  'Aphrodite',
  'Ares',
  'Artemis',
  'Athena',
  'Chaos',
  'Demeter',
  'Dionysus',
  'Hermes',
  'Poseidon',
  'Zeus'
];

/**
 * These are the weapons, along with details of their aspects, available to the player.  There are synergies between 
 * these and the boons, including requirements and effects, so we'll include them all so we can have a complete picture.
 */
const weapons = [
  { 
    name: 'Stygius',
    description: 'The Blade of the Underworld',
    aspects: [
      {
        name: 'Zagreus',
        description: 'The form in which the blade of the underworld first revealed itself.',
        modifier: {
          'Bonus Attack Speed': [ '+3%', '+6%', '+9%', '+12%', '+15%' ],
          'Bonus Move Speed': [ '+3%', '+6%', '+9%', '+12%', '+15%' ]
        }
      }
    ]
  }
];

/*
    {
      name: '',
      description: '',
      giver: [ '' ],
      class: 'common',
      slot: '',
      modifier: { '': '' }
    },


    {
      name: '',
      description: '',
      giver: [ '' ],
      class: 'common',
      slot: '',
      modifier: { '': '' },
      requirements: [
        [ '' ]
      ]
    },
*/

/**
 * These are details of all the boons that are available within the game to players.  I've done them as an array as
 * all the duos have requirements from multiple givers.  We can simply create indexes based on giver, tags, etc.
 * 
 * The 'giver' field is an array as there are more than one giver for all the duos.
 * 
 * In the 'description' field square brackets are used to denote taggable key-words (shown in-game in bold), and braces
 * are used to add emphasis to text that isn't taggable.
 * 
 * The 'class' field can be one of: common, legendary, duo.
 * 
 * The 'slot' field can be one of: attack, special, cast, dash, call, other.
 * 
 * The 'modifier' field is a set of key/value pairs that correspond to the quantative benefits that the boon provides.
 * These have been left in the format as provided in the game, and after all the data is collected we can do a full
 * analysis to determine how exactly we want to work with these.
 * 
 * The 'requirements' field is an array of arrays where each top-level item is used in an AND and each lower level item
 * is used in an OR.  e.g.
 * 
 * requirements: [
 *  [ 'One', 'Two', 'Three' ],
 *  [ 'Alpha', 'Beta' ]
 * ]
 * 
 * This is the equivalent of saying:
 *  ( 'One' || 'Two' || 'Three' ) && ( 'Alpha' || 'Beta' )
 * 
 * 
 */
const boons = [
  {
    name: 'Heartbreak Strike',
    description: 'Your [Attack] deals more damage and inflicts [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'attack',
    modifier: { 'Attack Damage': '+50%' }
  },
  {
    name: 'Heartbreak Flourish',
    description: 'Your [Special] deals more damage and inflicts [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'special',
    modifier: { 'Special Damage': '+80%' }
  },
  {
    name: 'Crush Shot',
    description: 'Your [Cast] is a wide, short-range blast that inflicts [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'cast',
    modifier: { 'Cast Damage': '90' }
  },
  {
    name: 'Passion Flare',
    description: 'Your [Cast] damages foes around you and inflicts [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'cast',
    modifier: { 'Blast Damage': '80' },
    requirements: [
      [ 'aspect:beowulf' ]
    ]
  },
  {
    name: 'Passion Dash',
    description: 'Your [Dash] deals damage where you end up, inflicting [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'dash',
    modifier: { 'Dash Damage': '20' }
  },
  {
    name: 'Aphrodite\'s Aid',
    description: 'Your [Call] fires a seeking projectile that inflicts [Charm].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'call',
    modifier: {
      'Charm Duration': '5 Sec.',
      'Max Guage Bonus': '2500 damage'
    }
  },
  {
    name: 'Dying Lament',
    description: 'When foes are slain, they damage nearby foes and inflict [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Death Blast Damage': '40' }
  },
  {
    name: 'Wave of Despair',
    description: 'After you take damage, damage foes around you and inflict [Weak].',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Revenge Damage': '50' }
  },
  {
    name: 'Life Affirmation',
    description: 'Any [Max Life] chamber rewards are worth more.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Life Gain': '+30%' }
  },
  {
    name: 'Different League',
    description: 'Resist some damage from nearby foes\' attacks.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Reduced Damage From Foes': '+10%' }
  },
  {
    name: 'Empty Inside',
    description: 'Your [Weak] effects have a longer duration.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Weak Duration': '+5 Sec.' },
    requirements: [
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]
    ]
  },
  {
    name: 'Broken Resolve',
    description: 'Your [Weak] effects are more potent.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Weak Damage Reduction': '+10%' },
    requirements: [
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]
    ]
  },
  {
    name: 'Blown Kiss',
    description: 'Your [Cast] shoots farther and is stronger against undamaged foes.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'First-Hit Bonus Damage': '+50%' },
    requirements: [
      [ 'Crush Shot' ]
    ]
  },
  {
    name: 'Sweet Surrender',
    description: '[Weak]-afflicted foes are also more susceptible to damage.',
    giver: ['Aphrodite'],
    class: 'common',
    slot: 'other',
    modifier: { 'Damage vs Weak': '+10%' },
    requirements: [
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]
    ]
  },
  {
    name: 'Unhealthy Fixation',
    description: 'Your [Weak] effects also have a {+15%} chance to [Charm] foes.',
    giver: ['Aphrodite'],
    class: 'legendary',
    slot: 'other',
    modifier: { 'Charm Duration': '4 Sec.' },
    requirements: [
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ],
      [ 'Empty Inside', 'Sweet Surrender', 'Broken Resolve' ]
    ]
  },
  {
    name: 'Parting Shot',
    description: 'Your [Cast] gains any bonuses you have for striking foes from behind.',
    giver: [ 'Aphrodite', 'Athena' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Bonus Backstab Damage': '+35%' },
    requirements: [
      [ 'Divine Strike', 'Phalax Shot', 'Phalanx Flare', 'Divine Flourish', 'Divine Dash', 'Athena\'s Aid' ],
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Aphrodite\'s Aid', 'Passion Flare' ]
    ]
  },
  {
    name: 'Curse of Longing',
    description: 'Your [Doom] effects continuously strike [Weak] foes.',
    giver: [ 'Aphrodite', 'Ares' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Successive Hit Damage': '50%' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain' ],
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]
    ]
  },
  {
    name: 'Low Tolerance',
    description: 'Your [Hangover] effects can stack more times against [Weak] foes.',
    giver: [ 'Dionysus', 'Aphrodite' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Max Stacks vs. Weak': '+3' },
    requirements: [
      [ 'Drunken Strike', 'Drunken Flourish', 'Drunken Dash' ],
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]
    ]
  },
  {
    name: 'Heart Rend',
    description: 'Your [Critical] effects deal even more damage to [Weak] foes.',
    giver: [ 'Artemis', 'Aphrodite' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Bonus Critical Damage vs. Weak': '+50%' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'True Shot', 'Hunter\'s Flare' ],
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Passion Flare' ]        
    ]
  },
  {
    name: 'Sweet Nectar',
    description: 'Any [Poms of Power] you find are more potent.',
    giver: [ 'Poseidon', 'Aphrodite' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Bonus Lv. from Poms': '+1' },
    requirements: [
      [ 'Tempest Strike', 'Tempest Flourish', 'Flood Shot', 'Tidal Dash', 'Poseidon\'s Aid' ],
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Aphrodite\'s Aid', 'Passion Flare' ]
    ]
  },
  {
    name: 'Smoldering Air',
    description: 'Your [God Guage] charges up automatically, but is capped at {25%}.',
    giver: [ 'Aphrodite', 'Zeus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Auto Gauge Gain': '1% (every 0.2 Sec.)' },
    requirements: [
      [ 'Passion Dash', 'Crush Shot', 'Heartbreak Strike', 'Heartbreak Flourish', 'Aphrodite\'s Aid', 'Passion Flare' ],
      [ 'Lightning Strike', 'Thunder Dash', 'Thunder Flourish', 'Electric Shot', 'Thunder Flare', 'Zeus\'s Aid' ]
    ]
  },
  {
    name: 'Cold Embrace',
    description: 'Your [Cast] crystal fires its beam directly at you for {+4 Sec.}.',
    giver: [ 'Demeter', 'Aphrodite' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Bonus Cast Damage': '+30%' },
    requirements: [
      [ 'Crystal Beam' ],
      [ 'Heartbreak Strike', 'Passion Dash', 'Heartbreak Flourish', 'Aphrodite\'s Aid' ]
    ]
  }
];

export  { givers, weapons, boons };
