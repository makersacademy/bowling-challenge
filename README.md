
Bowling Challenge
=================

    Test time: Friday, the entire day and the entire of lab week if you need it.
    Feel free to use Google, your notes, and your books.

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Idea behind the approach taken in Javascript
This has been a most interesting challenge.  I started to explore the scoring mechanism by first writing the scoring logic in ruby, where the scoring is done in three stages.
* Collecting frame rounds in a hash of frame arrays.
* Computing frame bonuses to store in a hash from frame rounds hash from step 1.
* Computing frame scores by adding the frame raw score hash from step1 to frame bonus hash from step2.
The initial mocking up in ruby helped me to formulate the somewhat different approach used here in Javascript.  Where I have opted for an approach of a score _updater_ which only calculate the values needed updating, and only keep those values states in memory with the intention to then update the htlm elements.  The _updater_ therefore need _only_ to remember what is happening in the current frame and the two frames previous (in case of strike in the previous previous frame).  For example, once we are at frame 8, the _updater_ should only have in memory - frames 6,7 and 8.  Frames 1 to 5 should no longer need updating, and should already be on the scoreboard and therefore the _updater_ should not need to remember it.
The application logic then uses the _updater_ to update the html scoreboard as a game progress, frame10 is deal with as if it is a normal frame, only difference is that application logic does not display frame11, frame12 etc.  This feature means the _updater_ to be used to update a game scoreboard of any number of frames other than 10.

## To Do
* Fix the display of 10th frame to sometimes show 2 rounds, sometimes show 3.  Currently always show 3, so it does not show rounds correctly when not scoring a strike or spare for the last frame.  However, frame totals and game totals are correctly shown.
* Update the frontend html and css.
* More jasmine-jquery feature tests.
* Rewrite my initial _ruby verision_ in javascript.

CI
--

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
