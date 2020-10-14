# Fates Revealed: Requirements and Specification

## Overview

The Fates Revealed application is a companion system to the game Hades by Supergiant Games.  Hades is a Roguelike game in which the player repeatedly attempts to escape from hell.  Within each escape attempt the player has many choices to make regarding which boons  to take.  There are various synergies and restrictions to those choices, which for even for experienced players is difficult to fully comprehend.

Therefore the primary goals of Fates Revealed are to:

- allow the player to explore the game data in a new way.
- help the player to answer the questions "Which giver should I choose?", "Which boon should I choose?", "Should I re-roll these boons?"
- let the player know which givers/boons they need to choose in order to get a specific legendary/duo/synergy.

## Assumptions

It is assumed that readers of this document are well versed in the game Hades and the terminology used in-game.

## Future Versions

The scope of this first version is very limited by design.  However there is scope for a variety of future additions to the system, including but not limited to:

- Prophecy/achievemt hunter: let players choose which prophecies or achievements they're currently working towards, and have the system then recommend which givers and boons they need to be picking to maximise their chances.
- Build sharing: letting players share builds/synergies with other players.
- Build scraping: extracting build data from player save files.
- Stats calculator: Using the choices and details from the game to estimate things like damage output, effective health, etc.
- Data scraping: Extract the game data directly from the game's data files, such that they're always accurate after updates.
- Generic game builds: Supporting builds for different games.  As games are so different, this would be more about creating a collection of building blocks and a general framework within which to use them.
- Guides: Tutorials and guides which can be associated with different builds, synergies, and so on.
- Apps: Desktop, tablet, and mobile interfaces for those that like that kind of thing.
- Voice: Able to provide voice support so you can let the system know which abilities you've chosen whilst playing the game.

## Requirements

### Search

The system needs to allow users to search the game data by the following:

- Slot: attack, special, cast, dash, call, and other.
- Giver: Aphrodite, Ares, Artemis, Bouldy, etc.
- Attribute: attack damage %, crit chance, etc.
- Requirements: this would be not be entered manually, but done through either builds or drilling-down on a specific boon.

In addition it would be really useful to be able to group certain attributes together in different ways, perhaps using a tag-based system.  We'd want to be able to search for boons that provide status effects, or that affect a particular slot through any means, and so on.

The search results would list all matching boons along with their details as presented in the game - but in a more compact layout.

Players are given a choice within game whether to accept a boon from one or more givers, therefore we'd need a per-giver summary of the search results as that's the choice the player is having to make.  So for each giver and for a specific search we'd want to see the number of matching boons of the different classes.

For example, if I search for "givers: Artemis, Hermes" and "tag: Cast" I'd want to see how many boons of each class Artemis and Hermes each have that match the search, along with the list of matching boons.

Some boons (mainly duo and legendary ones, but there are others) have certain requirements that need to be met before they will be offered to the player.  It's usually one or more "one from this set of boons" or a specific mirror/aspect choice.  When you view a boon in the in-game codex, it will show the requirements.

However what's really needed when playing the game is the inverse of that view.. for a given boon, you want to know what other boons it then allows you to take if you pick it.  A summary of those boons would be useful, perhaps a count of class and a count of those that don't match your criteria.

We'd want to be able to 'drill down' into a boon that is a requirement for others, to see what others it opens up.  Again, always affecting the per-giver search results summaries.  So you can easily see that if you take a boon it helps to get you a duo, and you'll see which giver(s) you need to then use to get that.

### Builds

At this stage we're not talking about sharing builds, more just about selecting them.  We'll want an interface that as you go through the game you can choose which boons you've chosen in-game.  These choices will then be factored into your search results, allowing you to quickly and easily find suitable boons.

Weapon aspects and mirror choices can factor into builds, so ultimately having to input those would be needed.  Once I've gone through all the data I'll be able to determine what the pertinent information is here and can include an interface for setting them.

There are restrictions on the number of gods you can take boons from, which isn't obvious in the game, so we can make that really clear in the interface.

### Backend

For this initial version there will be no need for a back-end.  All the interface, logic, and game data will be served up statically and any client data (like their current build) will be stored in client persistant storage.

### User Interface

The nature of the user-interface for this is quite complex due to the large amount of options and data that can be represented.  Therefore the specification of the user-interface as presented here is minimal, as a good deal of experimentation and iteration will be required.

The interface should be designed to work on desktop, tablet, and mobile.  In all cases the interface should be fast, responsive, and as light-weight as possible (given that there will be a lot of images).

### Appearance

While we shouldn't re-create the look of the game (as it wouldn't be suitable for scaling to different devices) Hades uses an extensive set of icons and symbols for all of its givers, boons, and some of its attributes.  Therefore we should use those as much as possible where appropriate.

Choosing a colour scheme and typeface that fits in with the game would be good to do.
