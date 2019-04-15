# Bowling challenge attempt 04 (no TDD)

## Technology

- JavaScript
- uh, that's it

## Instructions

1. Clone the repo
2. Open `index.html` from this folder
3. Open the console and do `game = new Game ()`
4. `game.roll(pins)`

## Reflections

Another quick (~1hr) attempt without test-driving, just to try out a different approach to the logic. In this one I keep a record of whether the last two balls were strikes, and whether the last roll was a spare as I go along, updating that information after each roll. This makes it easy to check as you're going along which frames can be scored.

Another good thing I noticed with this one is that if you pretend there's an 11th frame which doesn't get scored then you don't need to treat the 10th frame any differently. As soon as you've rolled enough extra balls to score the 10th frame you end the game, and whatever you rolled in the 11th frame gets discarded. This simplifies the logic somewhat, but maybe it's not super elegant, talking about an imaginary 11th frame?

Looking back at this one, where everything is handled in one place, it appears to me that a good delegation of responsibilities might be a `Scorer` class which keeps track of rolls and has methods for calculating frame scores, and a `Game` object which keeps track of stuff like what ball of a frame we're on, calling the Scorer, and deciding when the game is finished. My approach here of saving whether the last couple of rolls were spares or strikes seems kind of hacky - it should be possible to make `Scorer` methods to do the same thing.
