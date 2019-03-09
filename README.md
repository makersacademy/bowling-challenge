# Bowling Challenge

Solving the Makers Bowling Challenge, to make an interactive scorecard for a game of 10-pin bowling. Original readme can be found in this repository.

# How to use this

Open the `index.html` file in a browser, and enter scores as if you were playing a game of bowling.

For turns where a strike is scored, the 2nd cell can be left blank, without affecting the score.

# Limitations

* This application assumes users are honest and accurate (i.e. only input values between 0-10). Users are able to input values outside this, but won't receive an appropriate score.

* An extra 2 cells appear when a strike or spare is scored on the final turn. The user is able to interact with the 2nd extra cell even if they only hit a spare - however this won't affect their score, it will still accurately reflect their game.

* There is a stange - but very minor - bug in the program. If a user scores a strike on their final game, the total score will show as `NaN` until they complete all their remaining roles. When I have time I'll come back to address this.
