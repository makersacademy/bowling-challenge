
Bowling Challenge
=================

This is a Javascript-based simulator of a typical ten-ping bowling game.

Contents

Only one class that does everything. It is in dire need of refactoring.  Also is a giant if else statement and there surely must be a better way.

There is also an interactive website built using html and jquery.

How to install

Clone or download this repo.

Using it

Open SpecRunner.html in your browser and after opening the console type: var bowling = new Bowling();
This will initiate a new game.
Scores are entered using the enterScore function eg bowling.enterScore(3);

Alternatively you can use the interactive website by opening bowling.html in your browser. Click on the buttons to enter your score.

Further Work

Refactor bowling.js
Use bootstrap to make html interface look nice
Make errors popup in html if player enters numbers that are either too high or after the game is finished
Add running total for the score with totals for each frame
