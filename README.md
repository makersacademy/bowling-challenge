
Bowling Challenge
=================

![screenshotBrowser](https://content.screencast.com/users/Pablo_Zendesk/folders/Jing/media/1a5302ba-84cf-4960-97e6-d9477657327e/00000017.png)


## The Task

This repository contains a home assignment (Makers Academy). To complete the task, the app needs to count and sum the scores of a bowling game for one player (in JavaScript).

### Technology used

* Javascript was used for the coding of the bowling game logic (game.js)

* The design was test driven with Jasmine tool. All tests are green.

* Jquery for the interaction on the browser; it also allows to link Javascript logic with user actions.

* Bootstrap for page styling (forms, buttons, color, background)


### What could be improved

* There could be some animations, images.
* I hard coded the whole form, but there is probably a more efficient way to do it in order to recursively add each line of the table.
* I have only used one class to build it (Game). Maybe a more OOD approach should have prevailed.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
