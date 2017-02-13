
Bowling Challenge
=================

This work in progress bowling challenge can be run in-console. To run, please
do the following:

Clone this repo, then follow these instructions:

1. Open SpecRunner.html
2. Open dev tools, and navigate to the console.
3. Create a new player with player = new Player();
4. To throw a ball, use ```player.throwBall();```
5. To check your scores after two throws, use ```player.game.scorecalc.scoreboard```

Note: Scores update accurately for strikes, spares, etc, but game currently
needs to be reset manually after frame 10. Additional refactoring to remove dependencies, and
the setup of an HTML page with jQuery are also on the to-do list.
