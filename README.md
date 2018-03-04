
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

## My Approach

My plan was to have a Game array, which begins empty.
You could then roll and pass in two parameters (first roll and second roll of each frame), and this would add a Frame to the array. <br/>
My program is able to calculate basic scoring (i.e. no bonuses for strikes etc.), and scores for each frame.<br/>
However, using frames meant that the logic for calculating strike/spare bonuses ended up getting very complex and is currently unfinished.

## Still to do

- Finish logic for bonuses
- Account for edge cases (e.g. user says they've knocked down more than 10 pins, only 10 frames per game etc.)
- Create a front-end UI with jQuery
