Bowling Challenge
=================

The [Makers Academy][b35016d5] week 5/6 weekend challenge.

Create a ten-pin bowling game in Javascript, with complete functionality and adherence to the rules and scoring of ten-pin bowling.

The Challenge:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Rules

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

### Optional Extra

Create a nice interactive animated interface with jQuery.

More about ten pin bowling here: [Wikipedia](http://en.wikipedia.org/wiki/Ten-pin_bowling)

___

### Instructions for use

Open a command line terminal and follow the below instructions:

```
$ git clone git@github.com:treborb/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```

From there, you can open the Chrome developer console and run the following example commands to play:

```javascript
game = new Game;
game.start;
game.bowl(5);
game.bowl(3);
```

### Or to play the game in the browser using jQuery:

```
$ open index.html
```
## Screenshot

![Bowling Challenge in the browser](public/img/screenshot.png)

[b35016d5]: http://www.makersacademy.com/ "Makers Academy"
