
Bowling Challenge ![Travis-CI](https://travis-ci.org/sliute/bowling-challenge.svg?branch=master)
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript). The game is described in the original repo at [Makers Academy](https://github.com/makersacademy/bowling-challenge) and on [Wikipedia](http://en.wikipedia.org/wiki/Ten-pin_bowling).

How To Download and Run the App
-----

```
$ git clone https://github.com/sliute/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```
Also open the Chrome console for ad-hoc CLI feature-testing.

Progress:
-----
1. __Basic Game__
  * TDD-driven development for three types of objects: `Lane`, `Game` and `Frame`.
  * `Lane`
    - just initialises with a new Game and passes a number of pins to it.
  * `Game`
    - initialises with an empty list of played frames, an empty current Frame (Frame and Game know of each other), and a gameScore of 0.
    - holds the scoresheet and the rules, including game constants such as the number of frames in a Game (10 by default) and the maximum number of pins in a roll (10 by default).
    - updates gameScore every time a Frame is completed.
  * `Frame`
    - initialises with an empty record of pins for each roll, with a maximum number of rolls (2 by default), and with its own score (frameScore) which equals the current gameScore.
    - adds the pins scored in each roll in its record and updates its frameScore. When it has reached its maximum number of rolls, it tells its Game to make the gameScore equal to its frameScore. This then triggers the creation of a new current Frame in Game.
2. __Strike__
  * Re-factored the game to eliminate the gameScore and replace it with the current frame's frameScore. The frameScore is now updated after each roll.
  * Added logic for the strike and the way it impacts its own and its subsequent 1 or 2 frames. This implicitly covers two consecutive strikes.

Issues:
-----
1. __Basic Game__
  * The game does not yet provide for strikes, spares and the special characteristics of the final frame.
  * Only the business layer is completed at this stage. There is no web interface yet.
2. __Strike__
  * The current logic is cumbersome. It appears to work well, but:
    - even more testing may be needed
    - may create problems when adding spare logic in the future.
