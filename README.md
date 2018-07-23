
Bowling Challenge
=================

Welcome to John's Bowling Challenge

## The Task

The task was to implement scoring behind a game of bowling in Javascript, using an object oriented model.

## Usage

While the score system can be used in the chrome console with `scorecard.js`, the `index.html` file provides a rudimentary user interface. Refresh the page to restart the game.

## Approach

I split the game into two classes: the scorecard, and a frame class. The scorecard has an active frame, an array of 'incomplete' frames, and an array of 'completed' frames. A frame is considered incomplete if it has bonus rolls yet to apply (such as after a spare or a strike), and is considered complete after all bonuses have been applied. Only completed frames are used when calculating scoring.

## Future

There are a number of features left to implement, if I had enough time.
* The game should prevent you from entering illegal rolls. As it currently stands, any number can be entered into the system at any time.
* An updated UI to show all rolls so far, rather than just an array of the scores.
* The ability to reset the game without creating a new scorecard or refreshing the page.
* Making the UI more aesthetically pleasing.
