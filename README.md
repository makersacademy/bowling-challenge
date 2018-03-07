Bowling Challenge
=================

Brief Summary of Approach
-------
I really enjoyed this challenge.  I spent a lot of time diagramming. I worked through the sample bowling game and wrote out the calculations that needed to take place after every bowl and frame etc.  This helped me to group behaviour and thus shape the code. I built the code via TDD in small steps.  It all works properly but I know that the code can be improved.  Initially everything was in one class and the app worked, but I then refactored it to extract responsibility.  I also enjoyed working on the CSS and JQuery and played around a lot.  During the code review we discussed more approaches to this problem.  After the course I hope to play around a bit more and complete the challenge in different ways in order to increase my confidence with and knowledge of Javascript.

Points for development:
* ensure SRC principle through extracting logic to further classes
* rework code based on code review by Makers coach
* further improve user interface
* Set up [Travis CI](https://travis-ci.org) to run tests.

Instructions
-------
* Clone this repository
* cd bowling-challenge
* go to the full path of index.html in your browser and play!

Technologies Used:
--------
* Jasmine
* HTML
* CSS
* JQuery

## Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

[code review rubric](docs/review.md).
