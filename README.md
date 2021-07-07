# Bowling Challenge

## About

This program calculates the score of a bowling game given the rolls. A user can input the rolls sequentially as they occur:

```javascript
game = new Game();
game.bowl(5);
game.bowl(3);
game.score(); // => 8
//
```

The `game.score()` method returns the current total score, following [traditional ten-pin bowling rules](https://en.wikipedia.org/wiki/Ten-pin_bowling#Traditional_scoring). There is no need to enter `game.bowl(0)` after a strike; the game will be automatically closed when a strike occurs.

### Design

This program follows Object-oriented design pattern, and consists of two classes: Game and Frame. Game holds an array of Frame objects. Game knows about its frames, the order of those frames and overall game score. Since Game knows the position of its frames, it is responsible for distributing their bonuses to the right frames. Frame knows about its rolls, whether it is a spare or a strike, and whether it is closed or open.

## Features

- Gutter game
- One frame
- Multiple frames
- Spares
- Strikes
- Final Frame

### How to run

```bash
Git clone https://github.com/GunelMC/bowling-challenge.git
cd bowling-challenge
npm install
```

### How to test

```
Git clone this repository
Install dependencies `npm install`
Run test `npm run test`
```

### Built with

- ES6 Javascript
- Jasmine for test
- ESLint for code style

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Bowling — how does it work?

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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
