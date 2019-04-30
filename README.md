# Bowling Challenge

Solving the Makers Bowling Challenge, to make an interactive scorecard for a game of 10-pin bowling.

A user can input their scores during a game of bowling and have their score calculated as they go.

The application uses Javascript (with JQuery) to calculate the scores and update the scorecard as scores are entered.

Testing is written in jasmine.

## How to use this

Open the `index.html` file in a browser, and enter scores as if you were playing a game of bowling.

For turns where a strike is scored, the 2nd cell can be left blank, without affecting the score.

## How to run tests

Open `SpecRunner.html` in a browser to run tests and see a summary of results.

## Limitations

Some things I'd like to improve when I have more time:

* Because of the way I originally set up the id values in the table, the array to hold each roll score has an extra 0 at the beginning (with the index 0). This is removed when calculating end scores, and not seen by the user but still something I'd like to return to refactor in the future.

* When a user scores a strike on the first roll of a frame, the input for the 2nd roll is still available. Users can leave it blank and their score will still be accurate, however given more time I'd like to implement blocking out a second roll after a strike.

* The scorecard only accepts integer values and shows an error message when the player inputs an invalid score. I'd like to make the process of showing an error a bit more user friendly, by looking at the whole input value before processing the score. For example inputting 50, processes 5, then 50 as the keys are pressed.
