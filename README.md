Bowling Challenge
=================

Introduction
------------

This is my attempt at the bowling scorecard challenge. Original README found [here](https://github.com/makersacademy/bowling-challenge/blob/master/README.md).  
Should be noted that this was done having been learning Javascript for one week.

At some point I'd like to revist the challenge and see how my solution would change.


To run
------
- Fork repo
- Open SpecRunner in a browser window.
- Within the tests are some feature tests with some examples games (gutter, wikipedia example, perfect game)


Successes
---------
- It works! It gives the correct score for all bowling games.
- As oppossed to one open end game file it is split into some separate 'classes' of Game, Frame, Final Frame and Roll. While this is good it maybe one too many (Roll)

Challenges / Mistakes
---------------------
- when writing the solution I tried to solve as a game would play out - roll by roll. This was done as also thought of front end that would update on each roll. 
- when looking at spare and strike bonus' the solution looks 'back' at frames and adds a bonus retrospectively.
If solving again I think a better solution might be to constantly be calculating scores and each frame (if a bonus frame) should look at frames after - hope this makes sense.
- splitting game and frame out - i haven't not created doubles / mocks of frames for the game 'class' tests. This should be done.
- builing of logic upon logic. The solution could be simplified. However, I ploughed on. In hindsight maybe I should have stopped and restarted.
- Potentially have too many classes. 


To Do
-------
- Build a front end so a user can see a game play out
- Believe there can be a refactor and simplification.
- As there is a loop going on I have a gut feeling that a recursive function could be used here to calculate total running score.


