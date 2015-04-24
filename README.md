
Bowling Challenge
=================

    Test time: Friday, the entire day and the weekend if you need it.
    Feel free to use Google, your notes, and your books.

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).


Logic plan: 
-----------

* the game has an array of ten frames
* each frame has an array of two rolls
* if roll1 = 10, add next roll1 + roll2
  * if the next roll1 = 10, add next roll1
* if roll1 + roll2 = 10, add next roll1
* if frame10, if either roll1 or roll1 + roll2 = 10, roll3


### Optional Extra

Create a nice interactive animated interface with jQuery.

## 10th frame

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
