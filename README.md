
Bowling Challenge
=================

## The Task As Completed



The program is a Javascript based program.  It will takes a score for each frame which is then stored in a Frame object.  For the final frame there is, not surprisingly, a finalFrame object.

The Frame object can undertake the following functions:   
* Store roll details.  
* Return a 'raw score' - i.e. the score without any bonus.  
* Return the value of the first roll.  
* Return the 'type' of frame - i.e. ordinary (no bonus), spare or strike.   
* Validate Rolls - the frame checks for the following:   
  * No item entered - inserts a zero.  
  * X or x - frame is marked as a strike.  
  * / - frame is marked as a spare.  
  * Negative rolls or a number greater than 10.   
  * Frames greater than 10.
  * No entry in a roll - assumed to be zero and marked accordingly.

The FinalFrame object can undertake all of the functions above, except for the 'type' of frame.

The Game Object calculates the score it has four functions:

loadFrame - this loads a Frame Object into an array, frameHolder

getGameScore - this calculates the game score!  To do this, it iterates through frameHolder.  It adds the raw score of each frame to gamescore.  If a frame type is not 'ordinary' i.e. a spare or strike it calls getBonusScore.  The loop finishes at the penultimate frame.  For the final frame, getGameScore adds the raw score to the gamescore variable.

getBonusScore - calculates the bonus score.  This calculates a bonus for a spare - for a strike it asks...

getStrikeScore - This will do one of the following three things for a strike:   
* Where the next frame is not a strike, set the bonus to equal the raw score for the next frame (or the next two rolls for the penultimate frame).   
* Where the next frame is a strike, set the bonus to equal the raw score for the next frame and the first roll for the next frame but one ('frame plus two').

ESLint was used as a plugin for the Atom editor.

### TODOS:

In any order you like:

* Create a nice interactive animated interface with jQuery
* Set up [Travis CI](https://travis-ci.org) to run tests.
