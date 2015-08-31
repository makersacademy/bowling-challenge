
Bowling Challenge
=================
[![Build Status](https://travis-ci.org/adrianw1832/bowling-challenge.svg?branch=master)](https://travis-ci.org/adrianw1832/bowling-challenge)

How I approached the challenge
------------------------------

I initally started by implementing all the basic features first, without considering spares and strikes. After that, I considered adding spares and strikes and at the end, the tenth frame, and game ending conidtions. I stuck to SRP as much as possbile but the game logic did get a bit much near the end, especially considering the fact that in my implementation, I am also tracking the frame total. I did underestimate it at the beginning but I came through in the end. There was actually one big design change which drove me to change how I tracked the frame number, when I was implementing the GUI for the scorecard. In my original implementation, the frame number would automatically increase at the end of a strike or two rolls, but this caused some problems when I tried to log the rolls and scores on the table. The reason was that I would always be trying to log things from the previous frame number, and this would cause further complications in the tenth frame. My code would be a lot cleaner if I changed it to increase the frame number only when the next ball is rolled. I felt this challenge really reinforced the importance of TDD, MVP, and SRP, and the importance to write robust tests that really cover the different possiblities to ensure that everything is working as intended.

    Test time: Friday, the entire day and the weekend if you need it.
    Feel free to use Google, your notes, and your books.

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
