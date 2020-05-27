Bowling Challenge
=================

Note:  This app has been written during week 6 of the makers course and after studying JavaScript for 1 week.
The application is still in development, almost fully functional, and is a true representation of my current learning.

Description
-------

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


Instructions
-------

```
    $ git clone git@github.com:cjm106/bowling-challenge.git
    $ cd bowling-challenge
    $ open SpecRunner.html   # to run jasmine tests
    $ open index.html        # to run JavaScript app

```    

To Do
-------
  * Finish off spare frame scoring functionality.
  * Implement bonus rounds for strike and spare scores in the 10th frame.
  * Refactor and test.
  * Create a nice interactive animated interface with jQuery.
  * Set up Travis CI to run my tests.
  * Add ESLint to my codebase to ensure it conforms
  * Refactor and test.

 Technologies Used
-------

 * JavaScript
 * jQuery
 * HTML
 * Jasmine

User Stories
-------

```
1. As a player
   so that I can play a singles game of 10 Pin Bowling
   I want a scoreboard to keep track of my game.

2. As a player
   so that I know what my score is
   I want the scoreboard to display my current score.

3. As a player
   so that I know my score for each frame played
   I want the scoreboard to list my score for each frame.

4. As a player
   so that I know what frame I'm currently playing
   I want the scoreboard to list the current frame.

5. As a player
   so that I know my score is correct
   I want the scoreboard use traditional scoring.

 ```  

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
