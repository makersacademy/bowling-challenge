[![Build Status](https://app.travis-ci.com/valentina-maggio/bowling-challenge.svg?branch=main)](https://app.travis-ci.com/valentina-maggio/bowling-challenge)

Bowling Challenge in JavaScript
=================

## Challenge description

The aim of this challenge is to count and sum the scores of a bowling game for one player. 
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

## My approach to the challenge

* I started by defining the following stories:

```
As a bowling player
So that I can practice my skills
I want to play a full bowling game 

As a bowling player
So that I have a record of the pins I knock down
I want to keep track of my total score for each frame

As a bowling player
So that I know how the game went
I want to see my final total score
```

* I decided to create 4 classes: 
    * Frame: it initializes an object with first roll, second roll and total frame score as properties
    * TenthFrame: it has the same characteristics of the Frame class, plus an extra property for the third roll
    * Scorecard: it records the frames played and calculates the score
    * Game: it allows the player to play a bowling game - I didn't have the time to implement this class
     
* I started with the Frame class following a TDD approach:
    * the class has 3 properties:
        * firstRoll
        * secondRoll (initialized as 0)
        * frameTotalScore which sums up the firstRoll and secondRoll

* I then created a ScoreCard class with he same approach:
    * the class has 5 properties:
        * frames, an array which will store the pins rolled in each frame
        * turn, starts at 0 and keeps track of the turns
        * isStrike, false by default, it will change is there is a strike
        * isSpare, false by default, it will change is there is a strike
        * score, starts at 0 and records the cumulative score for the game
    * and 10 methods:
        * playBowling(frame), takes a new frame object as argument and calculates the score. After adding 10 frames it will stop the execution and return a message confirming the game has finished
        * saveStrike(frame) and saveSpare(frame), respectively change the value of isStrike and isSpare
        * updatePastScore(frame), update the previous frames scores in case of strikes or spares
        * lastTurnWithConsecutiveStrikes(frame), used by updatePastScore(frame) for score calculation
        * lastTurnWithOnePrevStrike(frame), used updatePastScore(frame) for score calculation
        * regularTurnWithPrevStrike(frame), used updatePastScore(frame) for score calculation
        * calculateStandardFrame(frame), calculates the score for the current frame, just for the frames from 1 to 9
        * finalFrameScore(frame), calculates the score for the tenth frame
        * calculateScore(), calculates the cumulate score

* I added a TenthFrame class to give the user the option of rolling the pins for a third time. The class inherits from the Frame class and in addition it has a thirdRoll property (initialized as 0)

* I was planning to create a Game class and extract the playBowling function from the ScoreCard class but I didn't have the time to work on this implementation.

## How to run the software

* Clone this repo
* Make sure you have Node installed - installation instructions here: [](https://github.com/nvm-sh/nvm#installing-and-updating)
* Open Node with `node`
* Load all the files with the following commands:
```
.load src/frame.js
.load src/tenthframe.js
.load src/scorecard.js
```
* At the moment to play you have to first create the ten frames you want to play, create one scorecard and call the method playBowling(frame) on it for each of the ten frames. To see the total score at the end of the game call the Scorecard property score. Below is an output example for a perfect game (strike scored in each frame):

```
> card = new ScoreCard;
ScoreCard {
  frames: [],
  turn: 0,
  isStrike: false,
  isSpare: false,
  score: 0
}
> frame1 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame2 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame3 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame4 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame5 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame6 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame7 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame8 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame9 = new Frame(10);
Frame { firstRoll: 10, secondRoll: 0, frameTotalScore: 10 }
> frame10 = new TenthFrame(10, 10, 10);
TenthFrame {
  firstRoll: 10,
  secondRoll: 10,
  frameTotalScore: 20,
  thirdRoll: 10
}
> card.playBowling(frame1);
undefined
> card.playBowling(frame2);
undefined
> card.playBowling(frame3);
undefined
> card.playBowling(frame4);
undefined
> card.playBowling(frame5);
undefined
> card.playBowling(frame6);
undefined
> card.playBowling(frame7);
undefined
> card.playBowling(frame8);
undefined
> card.playBowling(frame9);
undefined
> card.playBowling(frame10);
undefined
> card.score
300
```

## How to test the software

* Use Jest to run the test. Make sure you are in the root directory. If you don't have Jest installed yet, use the command `npm install jest`. Then run `npm test`. The output will also show a table with the test coverage.
* To check the code syntax, run `npx eslint "src/**"` or `npx eslint (FILENAME)` to run it for a specific file.

## Future improvements

* The next implementation will be creating a Game class to manage the game, without having to run the code above.
* Then some refactoring will be needed to make the code clean and more readable.
* Finally, a user interface will need to be added, perhaps using JQuery or React.

## Technologies used

* JavaScript
* Node
* Jest
* ESlint