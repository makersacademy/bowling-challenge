
Bowling Challenge
=================


My challenge is currently incomplete and this are the last updates regarding:

##CLASSES
I am using 2 classes at the moment.

**Frame**
It contains the following tested methods:
- pointsFirstRoll(). Visualizes the points reached with the first roll of the frame.
- pointsSecondRoll(). Same as above but for the second roll.
- firstRoll(points). Is assigning points to the first roll of the frame avoiding error: invalid amount of points for single roll.
- secondRoll(points). Same as above but for the second roll. It also checking that there are no errors in the entered points
- totPointsBeforeBonus(). Calculates the sum of points of the frame's 2 rolls.

**Game**
It contains the following tested methods:
- gameFrames(). Allow the game class to show all the frames played so far
- addFrames(). Adds a new frame to the game. It doesn't allow to add any more frames if tot frames is 10.

##NEXT STEPS
- in the frame class, create methods to establishing it the frame is a spare or a strike
- find a way to use game class to pass to frame info regarding their next and next_next frames
- in the frame class, create a method to calculate it's bonus and total points
- develop the HTML interface + jQuery for visualization and interactivity
