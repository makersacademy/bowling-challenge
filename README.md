
Bowling Challenge
=================

See below (Makers Academy Bowling Challenge) for details of epic user story.

Epic
----

As a tutor at Makers Academy I want to use a user online ten pin bowling score board to record a normal two player game.


Backlog
-------

As a bowler I want to see score for two or more players so that I can see who wins or loses for a game of 10 frames per player.

As a bowler I want to see the score per frame, one to ten, for each player.

As a bowler I want to see the score per roll, one and two (except for frame upto three rolls), for each player per frame.

As a bowler I want to score the sum of pins down for my two rolls in an open game.

As a bowler I want to score pins down in first roll (max of 9), plus spare bonus of 10 (pinfall on second roll), plus the score of my next roll (maximum of 10),  after a spare game (pinfall in two rolls) giving a maximum of 29 points.

As a bowler I want to score bonus of 10 , plus the score of my next two rolls (max of 20) after a strike game (pinfall in first roll) giving maximum of 30 points.

As a bowler I want frame 10 to have a maximum of 3 rolls to take account of strike on first roll.

As a bowler I want score board to show a strike ('X'), in roll 2, for frame when I bowl a strike (pinfall on first roll).

As a bowler I want score board to show a spare ('/'), in roll 2, for frame when I bowl a spare (pinfall on second ball).

As a bowler I want score board to show a miss ('-'), in roll 1 or 2 , for frame when no pins knocked down on roll.

As a bowler I want score board to show a foul ('F'), in roll 1 or 2, for frame when lane fouled by bowlers body went over foul line.

As a bowler I want score board to show a split ('(score)'), in roll 1, for frame when pins left standing after roll 1 have 'split' formation.

As a bowler I want score board to show the cumulative score for frames complete for each frame. So the score for frame can be calculated by:
 1. Adding roll 1 and 2 for open game;
 2. Adding roll 1 score and spare bonus of 10 and roll 1 score for next frame for a spare and,
 3.  Adding strike bonus of 10 and roll 1 and 2 score of next frame for a strike.

As a player I want score board to show a "double" for two strikes in a row; a "turkey" for three in a row, and a "perfect game" for 12 strikes in a row.

For a one player game add JS bowling game that takes up part of the page and automatically updates scoreboard after each bowl.

Allow users to login and save progress.

Allo user to login and retrieve progress.

Domain Model
------------
1. tournament has 3 games.
2. a game can have up to 6 players.
3. a player has 10 frames; players has name, photo and cumulative score for game; and tournament score.
3. a frame has normally 2 rolls and maximum of 3 for frame 10.
4. roll: can be  number 1, 2 or 3 in frame 10 if 1 is a strike;
5. roll[1]: can be "miss", "split" or score; max score is 10; min is 0.
6. roll[2]: can be "spare" or "strike"
7. roll[1] or roll[2]: can be a "foul", score 0.
8. frame: can be number 1 to 10.
9. frame[number] normally has roll[1] and roll[2].
10. frame[10] has can have roll[3] as well if roll[1] is a strike
11. score for frame[number] if roll[1] is a strike, and not frame[10], then roll[2] records stike and score is bonus of 10 plus score of frame[number]roll[2] plus frame[number+1]roll[1].
12. score for frame[10] if roll[1] is a strike, and frame[10], then roll[1] records stike and score is bonus of 10 plus score of frame[10]roll[2] plus frame[10]roll[3]; If strike scored on roll[2] or roll[3] then these can also record strike as well as roll[1].
13. score for frame[number] if roll[2] is a spare, then roll[2] records spare and roll[1] a score and score is roll[1] score plus bonus of 10 plus score of frame[number+1] roll[1], unless frame[10] when there is no frame[11] so plus score of frame[10]roll[3].
14. score for frame[number] if roll[1] is not a strike AND roll[2] is a not spare, is sum of frame[number]roll[1] and frame[number]roll[2] scores.
players take turns to play frames.

object(model):

tournament{
  [game
  {[
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}},
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}]}
  ]},
},
game
  {[
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}},
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}]}
  ]},
},
game
  {[
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}},
    {player{frame{roll{[{rollscore},{rollscore},{rollscore}],number},{framescore}},{currentframe}]}
  ]},
}]


Write feature  tests and then unit tests and code to make them pass for smalles to biggest object for user stories.



















**Makers Academy Bowling Challenge**

    Test time: Friday, the entire day and the entire of lab week if you need it.
    Feel free to use Google, your notes, and your books.

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Filling out your learning plan self review for the week: https://github.com/makersacademy/learning_plan_september2015 (if you haven't already) - note that next week is lab week, so please include information about the projects you plan to work on
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

We are running JSHint on our CI server - save yourself having to wait for a build to happen by linting your code on your machine first. [Here are installations for most popular editors](http://jshint.com/install/). Grab the `.jshintrc` from this repo and have better JS!

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
