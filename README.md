
Bowling Challenge
=================

This is the repo for the challenge presented to Makers Academy students in Week 5 of the program.

The detailed README can be found here: https://github.com/makersacademy/bowling-challenge/blob/master/README.md


To Play:
-------
Clone the repo down to your local machine and open SpecRunner.html from within the folder. Open up the console from within the SpecRunner browser and initialize a new bowling game like so:

```
var game
game = new BowlingGame()
```

Next, create a helper method to help you roll the same number of pins, many times, so that you can test many game outcomes:
```
var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }
```

The following scenario mimics a strike:
```
game.roll(10)
game.roll(4)
game.roll(3)
rollMany(0, 16)
game.score()
```

The following scenario mimics a perfect game:
```
game = new BowlingGame()
rollMany(10, 12)
game.score()
```
(remember to initialize a new game for every scenario)

The game will return 'Nan' if you don't provide it with enough rolls a game should have, taking into account the rules mentioned below. If you provide more rolls than are allowed, the game does not take those into account while scoring.

For further test cases and scenarios, you can refer to the BowlingGameSpec.js file in the spec folder of the repo. You can type in the scenarios directly from the Spec file as they use the same functions in the BowlingGame file.

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if he knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
