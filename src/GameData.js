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
 * all the duos have requirements from multiple givers.  We can (and do) simply create indexes as necessary.
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
      'Max Gauge Bonus': '2500 damage'
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
    description: '[Resist] some damage from nearby foes\' attacks.',
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
    description: 'Your [God Gauge] charges up automatically, but is capped at {25%}.',
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
  },
  {
    name: 'Curse of Agony',
    description: 'Your [Attack] inflicts [Doom].',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'attack',
    modifier: { 'Doom Damage': '50' }
  },
  {
    name: 'Curse of Pain',
    description: 'Your [Special] inflicts [Doom].',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'special',
    modifier: { 'Doom Damage': '60' }
  },
  {
    name: 'Slicing Shot',
    description: 'Your [Cast] sends a [Blade Rift] hurtling ahead.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Rift Damage per Hit': '20' }
  },
  {
    name: 'Slicing Flare',
    description: 'Your [Cast] sends a large [Blade Rift] hurtling ahead for a brief time.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Rift Damage per Hit': '30' },
    requirements: [
      [ 'aspect:beowulf' ]
    ]
  },
  {
    name: 'Blade Dash',
    description: 'Your [Dash] creates a [Blade Rift] where you started.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'dash',
    modifier: { 'Rift Damage per Hit': '10' }
  },
  {
    name: 'Ares\' Aid',
    description: 'Your [Call] turns you into an [Impervious] [Blade Rift] for {1.2 Sec}.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'call',
    modifier: {
      'Rift Damage per Hit': '30',
      'Max Gauge Bonus': '5 Sec. Duration'
    }
  },
  {
    name: 'Curse of Vengeance',
    description: 'After you take damage, inflict [Doom] on foes around you.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Doom Damage': '100' }
  },
  {
    name: 'Urge to Kill',
    description: 'Your [Attack], [Special], and [Cast] deal more damage.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Damage': '+10%' }
  },
  {
    name: 'Blood Frenzy',
    description: 'After using [Death Defiance], deal more damage that {Encounter}.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Encounter Bonus Damage': '+15%' }
  },
  {
    name: 'Battle Rage',
    description: 'After slaying a foe, your next [Attack] or [Special] deals more damage.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Damage Bonus': '+100%' }
  },
  {
    name: 'Black Metal',
    description: 'Your [Blade Rift] effects deal damage in a wider area.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Rift Area of Effect': '+20%' },
    requirements: [
      [ 'Slicing Shot', 'Blade Dash', 'Ares\' Aid', 'Slicing Flare' ]
    ]
  },
  {
    name: 'Engulfing Vortex',
    description: 'Your [Blade Rift] effects last longer and pull foes in.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Rift Duration': '+0.2 Sec.' },
    requirements: [
      [ 'Slicing Shot', 'Blade Dash', 'Ares\' Aid', 'Slicing Flare' ]
    ]
  },
  {
    name: 'Dire Misfortune',
    description: 'Your [Doom] effects deal more damage when applied multiple times.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Damage per Stack': '10' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain' ]
    ]
  },
  {
    name: 'Impending Doom',
    description: 'Your [Doom] effects deal more damage, but take {+0.5 Sec.} to activate.',
    giver: [ 'Ares' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Doom Damage': '+60%' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain', 'Curse of Vengeance' ]
    ]
  },
  {
    name: 'Vicious Cycle',
    description: 'Your [Blade Rift] effects deal more damage for each consecutive hit.',
    giver: [ 'Ares' ],
    class: 'legendary',
    slot: 'other',
    modifier: { 'Damage Increase per Hit': '+2' },
    requirements: [
      [ 'Black Metal', 'Engulfing Vortex' ]
    ]
  },
  {
    name: 'Hunting Blades',
    description: 'Your [Cast] creates a faster [Blade Rift] that seeks the nearest foe.',
    giver: [ 'Ares', 'Artemis' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Seek Duration': '3.3 Sec.' },
    requirements: [
      [ 'Slicing Shot', 'Slicing Flare' ],
      [ 'Deadly Strike', 'Deadly Flourish', 'Hunter Dash', 'Artemis\' Aid' ]
    ]
  },
  {
    name: 'Vengeful Mood',
    description: 'Your [Revenge] effects sometimes occur without taking damage.',
    giver: [ 'Ares', 'Zeus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Auto-Revenge Rate': '3 Sec.' },
    requirements: [
      [ 'Lightning Strike', 'Thunder Flourish', 'Electric Shot', 'Thunder Dash', 'Zeus\' Aid', 'Thunder Flare' ],
      [ 'Curse of Agony', 'Curse of Pain', 'Slicing Shot', 'Blade Dash', 'Ares\' Aid', 'Slicing Flare' ],
      [ 'Curse of Vengeance', 'Heaven\'s Vengeance', 'Holy Shield', 'Wave of Despair', 'Frozen Touch' ]
    ]
  },
  {
    name: 'Curse of Nausea',
    description: 'Your [Hangover] effects deal damage faster.',
    giver: [ 'Ares', 'Dionysus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Hangover Damage Rate': '0.35 Sec.' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain', 'Curse of Vengeance' ],
      [ 'Drunken Strike', 'Drunken Dash', 'Drunken Flourish', 'Dionysus\' Aid' ]
    ]
  },
  {
    name: 'Curse of Drowning',
    description: 'Your [Flood Shot] becomes a pulse that damages foes around you.',
    giver: [ 'Ares', 'Poseidon' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Pulses per Cast': '3' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain', 'Blade Dash', 'Ares\' Aid' ],
      [ 'Flood Shot' ]
    ]
  },
  {
    name: 'Freezing Vortex',
    description: 'Your [Cast] inflicts [Chill], but is smaller and moves slower.',
    giver: [ 'Ares', 'Demeter' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Blade Rift Size': '-15%' },
    requirements: [
      [ 'Slicing Shot', 'Slicing Flare' ],
      [ 'Frost Strike', 'Mistral Dash', 'Frost Flourish', 'Demeter\'s Aid' ]
    ]
  },
  {
    name: 'Merciful End',
    description: 'Your abilities that can [Deflect] immediately activate [Doom] effects.',
    giver: [ 'Ares', 'Athena' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Doom Combo Damage': '40' },
    requirements: [
      [ 'Curse of Agony', 'Curse of Pain' ],
      [ 'Divine Strike', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Deadly Strike',
    description: 'Your [Attack] is stronger, with {+15%} chance to deal [Critical] damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'attack',
    modifier: { 'Attack Damage': '+20%' }
  },
  {
    name: 'Deadly Flourish',
    description: 'Your [Special] is stronger, with a {+20%} chance to deal [Critical] damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'special',
    modifier: { 'Special Damage': '+40%' }
  },
  {
    name: 'True Shot',
    description: 'Your [Cast] seeks foes, with {+10%} chance to deal [Critical] damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Cast Damage': '70' }
  },
  {
    name: 'Hunter\'s Flare',
    description: 'Your [Cast] damages foes around you, with a {+10%} [Critical] chance.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Blast Damage': '55' },
    requirements: [
      [ 'aspect:beowulf' ]
    ]
  },
  {
    name: 'Hunter Dash',
    description: 'Your [Dash-Strike] deals more damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'dash',
    modifier: { 'Dash-Strike Damage': '+50%' }
  },
  {
    name: 'Artemis\' Aid',
    description: 'Your [Call] fires a seeking arrow with a {+35%} [Critical] chance.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'call',
    modifier: {
      'Arrow Damage': '100',
      'Max Gauge Bonus - Arrows Fired': '10'
    }
  },
  {
    name: 'Pressure Points',
    description: 'Any damage you deal has a chance to be [Critical]',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Critical Chance': '+2%' }
  },
  {
    name: 'Exit Wounds',
    description: 'Your foes take damage when your [Bloodstone] stuck in them is dislodged.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Dislodge Damage': '100' },
    requirements: [
      [ 'True Shot', 'Flood Shot', 'Electric Shot', 'Crush Shot', 'Phalanx Shot' ]
    ]
  },
  {
    name: 'Clean Kill',
    description: 'Your [Critical] effects deal even more damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Critical Damage': '+15%' },
    requirements: [
      [ 'Deadly Strike', 'Pressure Points', 'Deadly Flourish', 'True Shot', 'Artemis\' Aid' ]
    ]
  },
  {
    name: 'Support Fire',
    description: 'After you [Cast], or hit with an [Attack] or [Special], fire a seeking arrow.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Arrow Damage': '10' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'Hunter Dash', 'True Shot', 'Hunter\'s Flare', 'Artemis\' Aid', 'Pressure Points' ]
    ]
  },
  {
    name: 'Hide Breaker',
    description: 'Your [Critical] effects deal even more damage to [Armor].',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Critical Damage vs Armor': '+100%' },
    requirements: [
      [ 'Deadly Strike', 'Pressure Points', 'Deadly Flourish', 'True Shot', 'Artemis\' Aid' ]
    ]
  },
  {
    name: 'Hunter Instinct',
    description: 'Your [God Gauge] charges up faster when you deal [Critical] damage.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Faster Gauge Gain on Critical': '0.25%' },
    requirements: [
      [ 'Deadly Strike', 'Pressure Points', 'Deadly Flourish', 'True Shot' ]
    ]
  },
  {
    name: 'Hunter\'s Mark',
    description: 'After you deal [Critical] damage to a foe, a fow near it is {Marked}.',
    giver: [ 'Artemis' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Marked Critical Chance': '+30%' },
    requirements: [
      [ 'Deadly Strike', 'Pressure Points', 'Deadly Flourish', 'True Shot', 'Artemis\' Aid' ]
    ]
  },
  {
    name: 'Fully Loaded',
    description: 'Gain extra [Bloodstone] for your [Cast].',
    giver: [ 'Artemis' ],
    class: 'legendary',
    slot: 'other',
    modifier: { 'Max Bloodstones': '+2' },
    requirements: [
      [ 'Pressure Points', 'Exit Wounds', 'Support Fire' ],
      [ 'Pressure Points', 'Exit Wounds', 'Support Fire' ]
    ]
  },
  {
    name: 'Lightning Rod',
    description: 'Your collectible [Bloodstone] strike nearby foes with lightning every {1 Sec}.',
    giver: [ 'Artemis', 'Zeus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Lightning Damage': '70' },
    requirements: [
      [ 'mirror:Infernal Soul' ],
      [ 'Deadly Strike', 'Deadly Flourish', 'True Shot', 'Hunter\'s Flare', 'Hunter Dash', 'Artemis\' Aid' ],
      [ 'Lightning Strike', 'Thunder Dash', 'Thunder Flourish', 'Electric Shot', 'Thunder Flare', 'Zeus\' Aid' ]
    ]
  },
  {
    name: 'Mirage Shot',
    description: 'Your [Cast] fires a second projectile, which deals reduced base damage.',
    giver: [ 'Artemis', 'Poseidon' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Secondary Shot Damage': '30%' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'True Shot', 'Hunter\'s Flare', 'Artemis\' Aid' ],
      [ 'Tempest Strike', 'Tempest Flourish', 'Flood Shot', 'Tidal Dash', 'Poseidon\'s Aid' ]
    ]
  },
  {
    name: 'Deadly Reversal',
    description: 'After you [Deflect], briefly gain {+20%} chance to deal [Critical] damage.',
    giver: [ 'Artemis', 'Athena' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Effect Duration': '2 Sec.' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'True Shot', 'Hunter\'s Flare', 'Artemis\' Aid' ],
      [ 'Divine Strike', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Crystal Clarity',
    description: 'Your [Cast] is stronger and tracks foes more effectively.',
    giver: [ 'Artemis', 'Demeter' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Beam Damage': '+10%' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'Hunter Dash', 'Artemis\' Aid' ],
      [ 'Crystal Beam' ]
    ]
  },
  {
    name: 'Splitting Headache',
    description: '[Hangover]-afflicted foes are more likely to take [Critical] damage.',
    giver: [ 'Artemis', 'Dionysus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Bonus Critical Chance per Hangover': '+1.5%' },
    requirements: [
      [ 'Deadly Strike', 'Deadly Flourish', 'True Shot', 'Artemis\' Aid' ],
      [ 'Drunken Strike', 'Drunken Dash', 'Drunken Flourish', 'Dionysus\' Aid' ]
    ]
  },
  {
    name: 'Divine Strike',
    description: 'Your [Attack] is stronger, and can [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'attack',
    modifier: { 'Attack Damage': '+40%' }
  },
  {
    name: 'Divine Flourish',
    description: 'Your [Special] is stronger, and can [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'special',
    modifier: { 'Special Damage': '+60%' }
  },
  {
    name: 'Phalanx Shot',
    description: 'Your [Cast] damages foes in a small area, and can [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Cast Damage': '85' }
  },
  {
    name: 'Phalanx Flare',
    description: 'Your [Cast] damages foes around you, and can [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'cast',
    modifier: { 'Blast Damage': '80' },
    requirements: [
      [ 'aspect:beowulf' ]
    ]
  },
  {
    name: 'Divine Dash',
    description: 'Your [Dash] deals damage and can [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'dash',
    modifier: { 'Dash Damage': '10' }
  },
  {
    name: 'Athena\'s Aid',
    description: 'Your [Call] briefly makes you [Impervious] and [Deflect] all attacks.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'call',
    modifier: {
      'Effect Duration': '1.5 Sec.',
      'Max Gauge Bonus': '6x Duration'
    }
  },
  {
    name: 'Holy Shield',
    description: 'After you take damage, damage foes around you and briefly [Deflect].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Revenge Damage': '30' }
  },
  {
    name: 'Bronze Skin',
    description: '[Resist] damage from foes\' attacks.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Reduced Damage From Foes': '+5%' }
  },
  {
    name: 'Deathless Stand',
    description: '[Death Defiance] makes you [Impervious] longer.  Replenish {1} use.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Effect Duration': '2 Sec.' },
    requirements: [
      [ 'Divine Strike', 'Phalanx Shot', 'Divine Dash', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Last Stand',
    description: '[Death Defiance] restores more [Health] than usual.  Replenish {1} use.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Restoration': '+10%' },
    requirements: [
      [ 'Divine Strike', 'Phalanx Shot', 'Divine Dash', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Proud Bearing',
    description: 'You begin each {Encounter} with your [God Gauge] partly full.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Starting Gauge': '20%' }
  },
  {
    name: 'Sure Footing',
    description: '[Resist] damage from [Traps].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Reduced Damage From Traps': '+60%' }
  },
  {
    name: 'Blinding Flash',
    description: 'Your abilities that can [Deflect] also make foes [Exposed].',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Bonus Backstab Damage': '+50%' },
    requirements: [
      [ 'Divine Strike', 'Phalanx Shot', 'Phalanx Flare', 'Divine Dash', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Brilliant Riposte',
    description: 'When you [Deflect] attacks, it deals more damage.',
    giver: [ 'Athena' ],
    class: 'common',
    slot: 'other',
    modifier: { 'Deflect Damage': '+80%' },
    requirements: [
      [ 'Divine Strike', 'Divine Dash', 'Holy Shield', 'Divine Flourish' ]
    ]
  },
  {
    name: 'Divine Protection',
    description: 'You have a [Barrier] that negates an instance of damage.',
    giver: [ 'Athena' ],
    class: 'legendary',
    slot: 'other',
    modifier: { 'Barrier Refresh Time': '20 Sec.' },
    requirements: [
      [ 'Brilliant Riposte' ]
    ]
  },
  {
    name: 'Stubborn Roots',
    description: 'While you have no [Death Defiance], your [Health] slowly recovers.',
    giver: [ 'Athena', 'Demeter' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Life Regeneration': '1 (every 0.8 Sec.)' },
    requirements: [
      [ 'Divine Strike', 'Divine Flourish', 'Phalanx Shot', 'Phalanx Flare', 'Divine Dash', 'Athena\'s Aid' ],
      [ 'Frost Strike', 'Mistral Dash', 'Frost Flourish', 'Crystal Beam', 'Icy Flare', 'Demeter\'s Aid' ]
    ]
  },
  {
    name: 'Lightning Phalanx',
    description: 'Your Phalanx Shot [Cast] bounces between nearby foes.',
    giver: [ 'Athena', 'Zeus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Max Bounces': '3' },
    requirements: [
      [ 'Lightning Strike', 'Thunder Flourish', 'Thunder Dash', 'Zues\' Aid' ],
      [ 'Phalanx Shot' ]
    ]
  },
  {
    name: 'Calculated Risk',
    description: 'Your foes\' ranged-attack projectiles are [Slow]er.',
    giver: [ 'Athena', 'Dionysus' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Foe Projectile Speed Reduction': '+40%' },
    requirements: [
      [ 'Divine Strike', 'Divine Flourish', 'Divine Dash', 'Athena\'s Aid' ],
      [ 'Drunken Strike', 'Drunken Flourish', 'Drunken Dash', 'Dionysus\' Aid' ]
    ]
  },
  {
    name: 'Unshakable Mettle',
    description: 'You cannot be stunned, and [Resist] some damage from [Bosses].',
    giver: [ 'Athena', 'Poseidon' ],
    class: 'duo',
    slot: 'other',
    modifier: { 'Boss Damage Reduction': '+10%' },
    requirements: [
      [ 'Divine Strike', 'Divine Flourish', 'Phalanx Shot', 'Phalanx Flare', 'Divine Dash', 'Athena\'s Aid' ],
      [ 'Tempest Strike', 'Tidal Dash', 'Temest Flourish', 'Flood Shot', 'Poseidon\'s Aid' ]
    ]
  },
  {
    name: 'Assault',
    description: 'You deal {+34%} damaged striking [Undamaged] foes.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
    requirements: [
      [ 'mirror:Fiery Presence' ]
    ]
  },
  {
    name: 'Grasp',
    description: 'You have {+1} [Bloodstone].',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Ambush',
    description: 'You deal {+76%} damage when striking foes from behind ([Backstab]).',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Favor',
    description: '[Boons] have a {+15%} chance to be {Rare} or better.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Lunge',
    description: 'Your [Dash-Strike] deals {+45%} damage.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Soul',
    description: 'You have {+32} [Health].',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Strike',
    description: 'Your [Attack] deals {+39%} damage.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Eclipse',
    description: 'Any [Darkness] and [Gemstones] you find are worth {+78%}.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Affluence',
    description: 'Any [Coins] you find is worth {+35%}.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Shot',
    description: 'Your [Cast] deals {+34%} damage.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Flourish',
    description: 'Your [Special] deals {+57%} damage.',
    giver: [ 'Chaos' ],
    class: 'common',
    slot: 'other',
  },
  {
    name: 'Defiance',
    description: 'You have {+1} use of [Death Defiance] (this escape attempt).',
    giver: [ 'Chaos' ],
    class: 'legendary',
    slot: 'other',
    requirements: [
      [ 'Strike', 'Shot', 'Grasp', 'Soul', 'Favor', 'Affluence', 'Eclipse', 'Flourish', 'Lunge', 'Ambush', 'Assault' ]
    ]
  },
];

/**
 * Creates an index of all the boons, keyed on boon name.  It makes some operations we want to do easier and faster.
 */
const boonsByName = function() {
  let result = {};
  boons.forEach(boon => result[boon.name] = boon);
  return result;
}();

/**
 * Generates all the 'leadsTo' values for each boon.  This is the inverse of requirements and is a list of which other
 * boons have this boon in their required list.
 */
const generateLeadsTo = function() {
  boons.forEach(boon => {
    if ('requirements' in boon) {
      boon.requirements.forEach(list => {
        list.forEach(boonName => {
          // Note that we check to see if the referenced required boon exists in the data, and if not we thrown a warning.
          if (boonName in boonsByName) {
            let parentBoon = boonsByName[boonName];
            if (!parentBoon.hasOwnProperty('leadsTo')) {
              parentBoon.leadsTo = [];
            }
            boonsByName[boonName].leadsTo.push(boon.name);
          } else {
            console.warn(`The boon '${boon.name}' requires the boon '${boonName}' that does not exist in our data.`);
          }
        });
      });
    }
  });
}();

/**
 * Generate tags for all the boons by extracting them from their description(s), modifiers, and slot.
 * Return a distinct list of all tags so we can use them in the UI easily.
 */
const tags = function() {
  let result = [];

  for (let i = 0; i < boons.length; i++) {
    let boon = boons[i];
    let boonTags = [];

    // Extract from the description all text between [ and ].
    let descriptionTags = boon.description.matchAll(/\[(.+?)\]/g);
    if (descriptionTags != null) {
      for (const descriptionTag of descriptionTags) {
        boonTags.push(descriptionTag[1]);
      }
    }
    
    // Make sure the list of tags is unique and then write it to the boon.
    boonTags = [...new Set(boonTags)];
    boon.tags = boonTags;

    result = result.concat(boonTags);
  }

  result = [...new Set(result)].sort();
 
  return result;
}();

console.log(boons[0]);

export  { givers, weapons, boons, boonsByName, tags };
