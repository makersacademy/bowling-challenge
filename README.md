
Bowling Challenge
=================

Makers Academy week 05 challenge. Forked from https://github.com/makersacademy/bowling-challenge.

Task: 
-----

In Javascript, count and sum the scores of a bowling game for one player (see rules below).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


My approach
-----------

I chose to see this challenge as an opportunity to practice object-oriented JavaScript. Thus, I based my program on the interaction of a ```Game``` object with various ```Frame``` objects (in bowling, a game consists of 10 frames).


How to use
---

- clone this repo
- open ```/src/game.js``` and ```/src/frame.js``` in the console of your choice. E.g. for Chrome Devtools console, open ```new-game.html``` in Chrome and open Devtools (Command + Option + J).
- in the console, create a new game using ```var game = new Game('yourNameHere');```
- play the game by calling ```game.currentFrame.bowl(yourScore);```, passing it the number of pins you bowled (10 max). 
- call ```game.nextFrame();``` to move on to the next frame (helpful error messages should let you know if your current frame hasn’t been completed)
- repeat until all ten frames have been bowled (you still have to call ```game.nextFrame();``` after the tenth frame to finalize the scores, but you won't be able to bowl again
- at the end of every ```bowl()```, the program returns the current score for the current frame
- every time ```nextFrame()``` is called, the program returns the current total score for the game
- at any time you can check your score by calling ```game.score;```


To do
---

Consider better ways of implementing private methods (currently using the ```_privateMethod``` convention). Douglas Crockford <a href="http://javascript.crockford.com/code.html">says</a>:
>Do not use _ underbar as the first or last character of a name. It is sometimes intended to indicate privacy, but it does not actually provide privacy. If privacy is important, use closure. Avoid conventions that demonstrate a lack of competence. 


Rules of Ten-Pin Bowling
---

<b>Strikes</b>

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

<b>Spares</b>

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

<b>10th frame</b>

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

<b>Gutter Game</b>

A Gutter Game is when the player never hits a pin (20 zero scores).

<b>Perfect Game</b>

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

