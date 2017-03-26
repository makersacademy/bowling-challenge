
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

Strikes
----
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares
----
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame
----
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## User Stories

Based on the spec above, I worked out the following user stories that my scoring programme should fulfil.

```
As a player
So I can keep track of my score
I want to fill in the number of pins I knocked down after each roll

As a player
So I can see if I'm winning or losing
I want to be able to see my total score

As a player
So I know how many turns I have left
I want to see which frame I am on

As a player
So I know whether my next roll will count towards a bonus
I want to be alerted if I win a strike or a spare

As a player
So I can win bonus points
I want bonus points for strikes and spares to be calculated and added to my score

As a player
So I can see how well I played
I want to see a list of scores for all previous frames
```

## Using the application

You can interact with my application by:
- Downloading the source code
- Opening the scorecard.html file at bowling-challenge/src/index.html in the browser (best to use Chrome)
- Enter a number in the far left dropdown and an initial score should appear in the table
- Note that the interface has not yet been fully implemented, so you can only view the pins knocked down in the table without adding bonuses
- You can run my tests by opening the SpecRunner.html file in Chrome


## Technologies used

- Code was written using JavaScript
- Code was tested using the Jasmine testing framework (developed by Pivotal Labs)
- User interaction was partially implemented using jQuery

## Approach taken

- When writing the user stories, I assumed that the user should be able to see a running total of their score, and see their bonus points updated in real time, i.e. as soon as the points for the following frame are input.
- Implemented first user story using Game and Frame classes to add points
- Implemented second user story allowing Game to sum running total points assuming normal game, based on total points in each frame
- Implemented third user story by allowing a frame to decide whether it is a strike or spare
- Implementing bonus points - here it got tricky as I rethought the way Game tracked points. I decided that in order to retroactively add bonus points to a frame based on the following frame's points, I would have Game keep a record of frames within an array, and could recalculate frame scores using indices
- I had trouble counting bonus points when it got to the tenth frame. I implemented the final scoring bit by bit, first adding a BonusFrame class that could decide how many rolls it should have based on whether the player scored a strike or spare. I then extended the Game logic to account for whether the player scored a strike in the 9th frame followed by a strike in the 10th frame, meaning they should be awarded a single bonus roll.
- I then added checks on the user input to ensure they can not add a score that adds up to greater than 10 for a frame.
- I attempted to add an interface using html and jQuery, but ran out of time before completing it. I created a table using jQuery but then had trouble with dynamically filling it out with the user's input values.

## Possible extension

- I would like to finish the user interface, allowing the user to view their running total and bonus points as they fill in their scores
- I would also like to simplify my business logic, as there is some repetition within the BonusFrame class and the Frame class.
- I would also like to extract the responsibility of scoring out of the game class. I took the approach that the function Game.addPoints(points) would complete all further Game and Frame actions such as tracking frame and roll and checking bonus points. Although this makes the app cleaner to interact with in the console, I think I would have found the interface easier to implement if I had called these functions one by one.
- I would like to inject the BonusFrame into the Game class rather than instantiating it directly within a Game function
- I want to clean up the calculation of bonus points - particularly that of the 'double strike bonus'. My solution, was to write a function to check if there have been two strikes in a row, and if so, adding the first roll points of the following frame to the 'previous previous' frame. I think this can be cleaned up but would possibly need a rethink of the objects I'm using.
