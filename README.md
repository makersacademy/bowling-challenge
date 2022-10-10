
Bowling Challenge
=================

<div>
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Unit_tests_coverage:_100-blue?style=for-the-badge&logo=Rspec&logoColor=white" alt="Rspec"/>
</div><br>

This a Maker's challenge with the following requirements:

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
    
Please [view an example of the game here](https://github.com/EvSivtsova/bowling-challenge/tree/main/images).

## TechBit

    * Node
    * NPM
    * Jest(4.2.0)
    * eslint(28.1.3)
    
To install the project, clone the repository and install node.js and the dependencies within the project's folder:

```
git clone https://github.com/EvSivtsova/bowling-challenge.git
cd bowling-challenge
npm install bundle
```

To play bowling game run:

```
node bowlingGame.js
```

To run tests use:
```
npm test
```
There are unit tests for three classes: BowlingScorecard, BowlingBoard and InputValidation. Test coverage: 100%. Please view screenshots [here](https://github.com/EvSivtsova/bowling-challenge/tree/main/outputs).

The output for the example game:

<img src='https://github.com/EvSivtsova/bowling-challenge/blob/main/outputs/bowlingGameCLIOuput.png'>
