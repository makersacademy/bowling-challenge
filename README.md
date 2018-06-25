Bowling ScoreCard Challenge!
==================

 ![Alt text](https://media.giphy.com/media/xldwLDL59sBWg/giphy.gif)


This project is our 5th and 6th weekend challenge. We started to learn javascript in our 5th week. Completed solo on 23rd-24th June 2018. We were tasked with creating a bowling scorecard.

## Instructions:  
```
Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.
In every frame the player can roll one or two times. The actual number depends on strikes
and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes
and spares. After every frame the 10 pins are reset.
```

## The main rules of bowling
```
### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame.
The frame ends immediately (since there are no pins left for a second roll). The bonus
for that frame is the number of pins knocked down by the next two rolls. That would be the
next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The
bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls
for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional
rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes
for the bonus in the 10th frame). The Perfect Game scores 300 points.
```

## Motivation

This project has been created so that somebody could use it to generate their scores in a bowling game by entering each frame.

## Getting started

* Fork this repo
* Open the scoreCard.html document in chrome and navigate to the console in developer tools

## Usage

Once you've navigated to the console, you can follow the below instructions:

* __Create a scorecard__ by assigning a new instance of the Scorecard object to a variable
* __Check your score__ by invoking the method .showScore()
* __Enter scores__ by invoking the method .addFrameScore()</br>
  __For spares or frames under 10__: .addFrameScore(firstBall, secondBall)</br>
  __For strikes__: .addFrameScore(10)</br>
  __For 10th Frame if you get a strike first ball__: .addFrameScore(10, secondBall, finalBall)</br>
  __For 10th Frame if you get a spare with first 2 balls__: .addFrameScore(firstBall, secondBall, finalBall)</br>

Here is an example of usage:</br>
<img src="/images/exampleusage.png" width="250px" />

## Tech/Framework used

Built in Javascript<br />
Tested using Jasmine<br />

## Running tests

Open the SpecRunner.html in chrome and tests will run automatically.

## Credits

[This little bowling score checker.](http://www.bowlinggenius.com/)<br />

## Skills I used creating thing project

* Javascript
