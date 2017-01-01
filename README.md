
Calculator for Ten Pin Bowling
=================

![Home](https://github.com/fenglish/images/blob/master/Calculator_Home.png)


Technology for this App
-------
- Javascript
- JQuery
- html
- CSS

For tests
- Jasmine

For checking Javascript syntax
- JShint



Settings to use
-------

1. Clone this repository to your local
2. Open your terminal
3. Move into the folder which you cloned
4. Run this command```open index.html```

How to use
-------

- Follow the instruction on the screen

![NewGame](https://github.com/fenglish/images/blob/master/Calculator_NewGame.png)

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

![Strikes](https://github.com/fenglish/images/blob/master/Calculator_Strike.png)

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

![Spares](https://github.com/fenglish/images/blob/master/Calculator_Spare.png)

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

![GutterGame](https://github.com/fenglish/images/blob/master/Calculator_GutterGame.png)

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

![PerfectGame](https://github.com/fenglish/images/blob/master/Calculator_PerfectGame.png)
