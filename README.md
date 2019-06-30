# :bowling: Bowling Challenge :bowling:

[![Build Status](https://travis-ci.org/petraartep/bowling-challenge.svg?branch=master)](https://travis-ci.org/petraartep/bowling-challenge)

This is not a bowling game, it is a Bowling Scorecard. The user inputs the rolls. It counts and sums the scores of a bowling game for one player.

---

## Technologies used
- Javascript
- Node.js
- Jasmine

---

## Features
  * [ ] Gutter game
  * [ ] One frame
  * [ ] Multiple frames
  * [ ] Spares
  * [ ] Strikes
  * [ ] Final Frame

* Bonus Features
  * [ ] UI

---

## Functionality

---

## Approach 

- Plan
- Creating user stories
- Setting up the environment
- Testing
- Implementing
- Refactoring
- Styling

---
## User Stories

```
As a user
So that I can see my scores
I would like to display my current score in each rolls in each frames.

As a user
So that I can keep track of my score
I would like to calculates the total.

As a user
So that I can calculate the total score
I would like to record the frames.

As a user
So that I can record when I score a strike
I would like to recognize a strike.

As a user
So that I can record when I score a spare
I would like to recognize a spare.

As a user
So that I can record my strike scores correctly
I would like to calculate the bonus scoring for strikes.

As a user
So that I can record my spare scores correctly
I would like to calculate the bonus scoring for spares.

As a user
So that I can get extra rolls in 10th frame
I would like 1 extra roll when I score spare in 10th frame.

As a user
So that I can get extra rolls in 10th frame
I would like 2 extra rolls when I score strike in 10th frame.

As a user 
So that I can calculate the total score
I would like to calculate the total score with no strick or spares.

As a user 
So that I can calculate the total score
I would like to calculate the total score with strick and/or spares.

As a user
So that I can calculate a perfect game
I would like to calculate when I score 10 for every roll.

As a user
So that I can calculate a gutter game
I would like to calculate when I score 0 for every roll.

```
---

## Challenges

- Setting up Eslint
- Travis CI not recognizing JS

---

## How to use

```sh
$ git clone git@github.com:[USERNAME]/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```


---

## Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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


![Ten Pin Score Example](https://github.com/petraartep/bowling-challenge/blob/master/images/example_ten_pin_scoring.png)