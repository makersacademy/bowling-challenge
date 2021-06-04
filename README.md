Bowling Challenge
=================

The Task
------

A weekend challenge to count and sum the scores of a bowling game for one player (in JavaScript)
Initially coded in ruby in this [repo](https://github.com/taran314/bowling-challenge-ruby).

How to use
-------

- To run the app, click the deployment link on github pages in this repo.
- To run tests, clone the repo and run SpecRunner.html

Implementation
-------
- Coded in JavaScript and jQuery
- Jasmine for unit testing
- Basic frontend in HTML and CSS.

User Stories
---------

- Creating new frames after two rolls
- Bonus points for spares are updated
- Strikes create a new frame
- Bonus points for strikes for next two rolls, no consec strike
- Tenth frame logic
- Update scores method
- Interface shows cumulative scores and each roll for each frame

TODO
-------
- Implement a reset button so a user can play another game and a game is finished alert
- Hide buttons so user cannot roll a 9 and another 9, if a 9 is rolled, user can only click 0 or 1
- Improve layout, a table might be a good way to display the scorecard
- Refactor code and logic, unsure if the update scores method should go in the interface
