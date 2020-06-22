
Bowling Challenge
=================


My challenge is currently incomplete and this are the last updates regarding:

##CLASSES##
I am using 3 classes at the moment.

**Frame**
It contains the following tested methods:
- pointsFirstRoll(). Visualizes the points reached with the first roll of the frame.
- pointsSecondRoll(). Same as above but for the second roll.
- firstRoll(points). Is assigning points to the first roll of the frame avoiding error: invalid amount of points for single roll.
- secondRoll(points). Same as above but for the second roll. It also checking that there are no errors in the entered points
- calculateScore(). Calculates the sum of points of the frame's 2 rolls.
- getNextRoll(frame). It gives a value(another frame) to the nextFrame attribute. It is called by the game class through the sharingInfoWithFrames() method
- getNextNextRoll(frame). Same reasoning as the above method.
- calculateBonus(). Uses private methods strikeBonus and spareBonus in order to calculate the bonus for the current frame
- totalFrameScore(). Gives back the total points for the single frame.

**Game**
It contains the following tested methods:
- gameFrames(). Allow the game class to show all the frames played so far
- addFrames(). Adds a new frame to the game. It doesn't allow to add any more frames if tot frames is 10.
- sharingInfoWithFrames(). Is sending info regarding next and next next frames to every single frame (Don't really know if this is LEGAL in JS).
The following methods are not tested:
- getFramesScores(). The idea is to get info from every single frame regarding its own total score and append it to the array frames_scores. Not sure it's working. I wasn't able to test it.
- finalScore(). This is calculating the sum of the elements of array frames_scores. Test not working. I need to understand if there is something wrong with the getFramesScores() method or with this specific one.


**FinalFrame**
Is very similar to frame class but:
- has 3 rolls. 2 normal ones and 1 bonusRoll.
- calculates the frame bonus and totalFrameScore in a different way.

##IMPROVEMENTS##
- I wasn't able to use the jasmine SpyObj in order to test the specific class stubbing the behaviour of other objects
- Since I've tested the ability of a frame to calculate its own bonus (given specific types of frames as next frame and next next frame). I assume that the reason why the game final score is not coming out as expected is because I am not correctly passing info through the game's sharingInfoWithFrames() method. I need to find a way to pass them correctly.
- I was waiting for completing the business logic before implementing the HTML/jQuery part. I need to find a solution for the previous two problems and, then, I'll be working on that.
