# Bowling Challenge

Solving the Makers Bowling Challenge, to make an interactive scorecard for a game of 10-pin bowling. Original readme can be found in this repository.

# How to use this

Open the `index.html` file in a browser, and enter scores as if you were playing a game of bowling.

For turns where a strike is scored, the 2nd cell can be left blank, without affecting the score.

# Limitations

* This application assumes users are honest and accurate (i.e. only input values between 0-10). Users are able to input values outside this, but won't receive an appropriate score.

* Because of the way I originally set up the id values in the table, the array to hold each roll score has an extra 0 at the beginning (with the index 0). This is removed when calculating end scores, and not seen by the user but still something I'd like to return to refactor in the future.

* When a user scores a strike on the first roll of a frame, the input for the 2nd roll is still available. Users can leave it blank and their score will still be accurate, however given more time I'd like to implement blocking out a second roll after a strike.
