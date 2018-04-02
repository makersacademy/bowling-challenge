EASTER UPDATE
=================

Challenge is still incomplete. However, I have added a couple of tests for _game over_ when ```after 20 rolls, extra roll is not achieved``` and when ```after 21 rolls.extra roll is achieved```. Although the app now raises an error when player tries to knock down more than 10 pins, the incorrect number is **still added** to  ```this.rolls``` array. I also wrote a test for when player tries to take the score over 10 (e.g. roll 5 and then roll 6); the test passes, however, as per other test above, the wrong number of pin is **still added** to the ```this.rolls``` array.

I am yet to find a solution to these two issues. I have a feeling that the error for taking the score over 10 should be part of ```Game.prototype.roll``` instead of being part of ```Game.prototype.score```.

With regards to the interface, I am still having issues with _NaN_ values. By running the debugger, I noticed that the functions defined in ```Game.prototype.score``` (```isCheating()```, ```isStrike()```, ```isSpare()```, ```getStrikeScore()```, ```getSpareScore()``` and ```getNormalScore```) have a _ReferenceError: ...not defined_. Perhaps this could be something related to _NaN_?

Need to investigate further.

Bowling Challenge - INCOMPLETE
=================

```
As a bowling player,
So that I can record my score during a game,
I want to be able to record my score on a scorecard.

As a bowling player,
So that I can enter my score correctly,
I want to be able to see the possible number of pins left.

As a bowling player,
So that I can see strikes (X) and spares (/) displayed in the correct form,
I want those symbols to replace numbers and be shown on my scorecards, when applicable.

As a bowling player,
So that the score is accurate,
I want to see the total of a frame only after strikes and spare bonuses have been calculated.

As a bowling player,
So that I can start a new game,
I want to be able to play again.
```

Reflections
----
Despite the vast amount of research (and exercising) carried out over the week, this challenge proved that I still find JavaScript rather daunting. I tried to develop the task following [Robert C. Martin's presentation](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) and a [YouTube tutorial](https://www.youtube.com/watch?v=-qA_MjNmpVU). I feel like I didn't really achieve much. Even if the few tests I wrote are passing, I believe there is something wrong in the code (e.g. _NaN_ messages when `console.log`ing `score()`. Hopefully, there will be some time during the week to discuss my concerns with classmates and coaches, to eventually try and improve the code next weekend.

Some positivity
----
- I am becoming more confident with writing user stories and modelling diagrams.
- Despite the complexity behind the score calculation, I will always enjoy playing bowling.

Resources
----
I have been fiddling with [this CSS style](http://jsfiddle.net/subskybox/Lk46gjkL/)
