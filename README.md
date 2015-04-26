Bowling Challenge
=================

A one weekend challenge to create a calculator to work out the total of a bowling game using javascript and html!

Screenshot:
-----

![Screenshot](images/ScreenShot.png)


User Stories Extracted From Brief:
-----

MVp1:

As a bowler
So that I can play a frame
I would like to play a frame, and know if i get a strike or spare

As a bowler
So that I can play a frame fairly
I would like to receive an error if i bowl too many times.

MVp2:

As a bowler
So that i can play a complete game
I'd like to be able to get the total of 10 frames

As a bowler
So that i can play a complete game
I'd like to be to add bonus bowls if i strike or spare in the final frame

As a bowler
So that i can worry less
I'd like to see an error if i have added too many frames to a game

As a bowler
So that i can get satisfaction
I'd like to be see gutter or perfect if i roll my stones in a 0 or top score situation


MVP:

Complete game via jquery, game requests frames until complete.


Classes & Responsibilities:
-----

Frame
  - Knows if spare or strike
  - persists result of rolls

Game:
  - Can total scores for every frame
  - Returns error if too many frames
  - If ten rolled in final frame will allow bonus roll.
  - Will return 'Gutter or Perfect' if either applies, else returns score.


Given Tasks:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

How to use:
-----

Simply download then open app.html!

To run the jasmine tests, start the sinatra server by typing rackup, then visit: localhost:9292/SpecRunner.html

:)

How to contribute:
-----

As this was a challenge to test my comfort with developing and testing using JS. I'm not anticipating any contributions.

However as ever any feedback, suggestions or comment is welcome, just leave a comment, or create a pull request!