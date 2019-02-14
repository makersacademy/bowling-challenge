
```
                                        (O)           (O)
                                        ||     (O)    ||
   .----.                               ||     ||     ||
  /   O O\                             /  \    ||    /  \
  '    O  '                           :    :  /  \  :    :
  \      /                            |    | :    : |    |
 __`----'______________________________\__/__|    |__\__/____pjb
                                              \__/
```
------------------------------------------------

Bowling Challenge
=================

This repo functions as a bowling scorecard that can be used from the command line.

You can enter 10 frames (made up of two rolls each) and it will keep track of your score. It should properly apply the bonuses for a strike, spare and perfect game, as well as allowing the user up to three rolls in the final frame.

## Installation Instruction

To install the Bowling scorecard simply clone this repo to your local computer:

```
 $ git clone git@github.com:rednblack99/bowling-challenge.git
 $ cd bowling-challenge
```

## User Guide

To run the tests you should run: `open SpecRunner.html` which will run the tests and display the results in your default browser.

To use the app you should run: `open BowlingChallenge.html`, right click anywhere on the page, click 'inspect' and visit the 'console' tab which will allow you to enter the following commands:

* `game = new Game()` - creates a new scorecard
* `game.addFrame(roll1, roll2)` - Adds a new frame with your rolls. Replace roll1 and roll2 with the number of pins you knock down on each roll. Note: Individually, not cumulative. Eg. game.addFrame(4, 6) would be a Spare. 
* `game.addFrame(roll1, roll2, roll3)` - If you're skilled enough to score 2 strikes in the final frame, simply replace roll3 with the pins knocked down in your final roll to add it to the total. 
* `game.totalScore()` - Calculates and returns the total you scored in your game.

A sample game may look like this:

```
game = new Game()
game.addFrame(0,0) - Gutter Ball
game.addFrame(4, 5)
game.addFrame(10) - Strike adds 10 bonus points
game.addFrame(5,5) - Spare adds 3 bonus points 
game.addFrame(3, 5)
game.addFrame(2, 8) - Spare adds 10 bonus points
game.addFrame(10) - Strike adds 2 bonus points
game.addFrame(2, 3)
game.addFrame(1, 2)
game.addFrame(10, 10, 4) - Bonus round adds 24 points for cumulative strikes
game.totalScore() - returns 114 as your total score
```
