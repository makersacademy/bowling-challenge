
Bowling Challenge
=================

- A ten pin bowling scorecard - designed to take in pin numbers and generate the scorecard, rather than generate random rolls like a game would.
- Works for all of the ten pin bowling rules (as I understand them...). You roll, with the number of pins as an argument, and you can call scoreArray or frameScores at any time to see the individual roll scores or the score for each frame. The frame scores update with bonuses as you go along. The total score comes out at the end.
- Had difficulty refactoring. Not happy with how the code looks but ran out of time.
- Done as static html page with very basic ui that isn't quite finished yet. The plan is to have a button for each possible number of pins. Those can be pushed to record rolls and the scores pop up automatically.
- One quirk is that you have to tell it to roll again after you roll at strike, so that it will record a 10 and a 0 for that frame. This could be fixed but wanted to refactor first.
- One more thing to fix is that it's currently an honour system...you can roll more than 10 in one frame if you want to. Maximum roll and frame scores need to be built in, and some kind of error/notification for the UI so the user knows they are trying to record an impossible score.



Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Filling out your learning plan self review for the week: https://github.com/makersacademy/learning_plan (if you haven't already) - note that next week is lab week, so please include information about the projects you plan to work on
* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

CI
--

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
