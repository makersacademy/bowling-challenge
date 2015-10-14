
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Two methods
I have ended up writing two completely different _solutions_ to this challenge (yes I loved this challenge _that_ much!). The first solution I will refer to as _first version_ or _updater version_. The second solution I will refer to as _second version_ or _writer version_.

## Idea the _first version_ or _updater version_
I started to explore the scoring mechanism by first writing the scoring logic in ruby, where the scoring is done in three stages.

* Collecting frame rounds in a hash of frame arrays.
* Computing frame bonuses to store in a hash from frame rounds hash from step 1.
* Computing frame scores by adding the frame raw score hash from step1 to frame bonus hash from step2.

The initial mocking up in ruby helped me to formulate the somewhat different approach used here the _first version_ in Javascript (BowlingScoreUpdater.js and Application.js, used for index.html).  Where I have opted for an approach of a score _updater_ which only calculate the values needed updating, and only keep those values states in memory with the intention to then update the htlm elements.  The _updater_ therefore need _only_ to remember what is happening in the current frame and the two frames previous (in case of strike in the previous previous frame).  For example, once we are at frame 8, the _updater_ should only have in memory - frames 6,7 and 8.  Frames 1 to 5 should no longer need updating, and should already be on the scoreboard and therefore the _updater_ should not need to remember it.

The application logic then uses the _updater_ to update the html scoreboard as a game progress, frame10 is deal with as if it is a normal frame, only difference is that application logic does not display frame11, frame12 etc.  This feature means the _updater_ to be used to update a game scoreboard of any number of frames other than 10.

## Idea the _second version_ or _writer version_

The main feature of the first version is to be as _efficient_ as possible in terms of storing as a few things as possible from one round to the next.  Imagine we had a bowling game of 10000 frames, and imagine we already had the similar html score card to accept those frame scores as they come in, this is where the _updater version_ will do very well, since it will still only be updating up-to three frames each round.  Where as with my initial ruby mockup, we will be passing around unwieldy large hashes with thousands of key value pairs.  _However_, in our normal world, a game of bowling consists of 10 frames only! So I thought, the first ruby mockup seemed more elegant, so why not give it life by writing it in javascript!

Thus the _second version_ or _writer version_ was born (BowlingScore.js and Application2.js, used for index2.html).  The overall idea is that each time a new score of a new round comes in, it is processed in the following way:

* Appended to rawScores array (which look like [1,2,4,6,10,3]).
* frameScores (Array of frame scores e.g. [[1,2],[4,6],[10],[3]]) is then recalculated (not updated) from the updated rawScores array.
* frameBonus (e.g. for the above frameScores, frameBonus = [0,10,3,0]) is then recalculated (not updated) from the recalculated frameScores.
* frameTotals (e.g.[3,20,13,3]) is then recalculated (not updated) from the recalculated frameScores and frameBonus.
* gameTotal (e.g. 39) is the recalculated (not updated) from the recalculated frameTotals.

Application2.js uses this engine to populate _everything_ each time a new scores for a new round comes in.  Validation of new score occurs in application, the new score is immediately checked for validation (need to be less than or equal to number of pins left of a frame), if invalid, the function terminates immediately - before the score goes into the game engine.

## To Do
* Refactor the _updater version_ 's application methods.
* Fix the display of 10th frame for _updater version_ to sometimes show 2 rounds, sometimes show 3.  Currently always show 3, so it does not show rounds correctly when not scoring a strike or spare for the last frame.  However, frame totals and game totals are correctly shown.
* Continue with on a front-end that uses divs rather than tables (indexdivs.html).

CI
--

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
