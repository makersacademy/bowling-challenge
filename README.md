Bowling ScoreCard Challenge!
==================

 ![Alt text](https://media.giphy.com/media/26DOMQa5Ib2SmaRZm/source.gif)


This project is our 5th and 6th weekend challenge. We started to learn javascript in our 5th week. Completed solo on 23rd-24th June 2018. We were tasked with creating a bowling scorecard.

Instructions:  
```
Count and sum the scores of a bowling game for one player (in JavaScript).

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

```

## Motivation

This project has been created so that somebody could use it to generate their scores in a bowling game by entering each frame.

## Getting started

* Fork this repo
* Open the scoreCard.html document in chrome and navigate to the console in developer tools

## Usage

Once you've navigated to localhost, you can follow the instructions on the screen.

## 1. Register (optional) by clicking Register and entering your email and a password

### Homepage
<img src="/public/before-sorted.19.29.png">

### After you click Register
<img src="/public/register.08.57.png">

### After you've completed registration
<img src="/public/registered.56.51.png">

## 2. Add a film by clicking 'add film'

### After you've clicked Add Film
<img src="/public/add_film.08.19.png">

## 3. Add comments

### After clicking Comment button
<img src="/public/add-comment.33.24.png">

## 4. Sort alphabetically

###ß After clicking Sort A-Z
<img src="/public/SortA-Z.07.37.png">


## Tech/Framework used

Built in Javascript<br />
Tested using Jasmine<br />

## Running tests

Open the SpecRunner.html in chrome and tests will run automatically.

## Credits

[This little bowling score checker.](http://www.bowlinggenius.com/)<br />

## Skills I used creating thing project

* Javascript
