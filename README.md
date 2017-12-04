
Bowling Challenge
=================
Business logic implementation only - the business logic is written so that the interface will only do 2 things 1 take in a points score from user input (based on eg a button click)
2 return the points for roll, frame and total after each roll

As such - all functionality is triggered by recordRoll. There are three 'objects' - the scorecard, the frame, and the roll. The scorecard holds one frame in play at any one time, that itself is initialised with two rolls.

Each frame is initialised with a bonusMode based on the the result of the previous frame. This bonus mode controls how (or if) bonuses are scored for this frame. This is the case for all frames, expect for bonuses on frame 10 (which are recorded as points on an 11th frame) where the program is passed to a special addBonus10 function that ensures that if there is a strike bonus on the last frame it does not add 10 extra points

What Would I Improve?
