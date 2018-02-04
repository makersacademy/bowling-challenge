This weekend I am going to build the logic needed to model a bowling game. Next weekend I am going to design and build the interface.

Specification for Jasmine tests

1. We start with 10 frames.
2. Each frame you are allowing one or two goes.
3. There are two edge cases (if the ball falls into the gutter and if the ball does not hit any pins).
4. The score are added for each frame after the second roll for that frame immediately, if the ball is neither a strike or a spare.
5. If the ball hits a strike which effectively means all pins fall down then that score is added to BONUS of the next two goes.
6. If the ball hits a spare which effectively means you hit down all ten on your second go, then you add a BONUS which is the score of the next roll of the ball.
7. The scores for the end are added together to get the total score.


In this project I have used Jasmine to Test-Drive the Development of my bowling game.

The way I approached this challenge was to -
1. Translate the first specification above into a test (the simplest one)
2. Then to pass this test by writing productions code.
3. Then to translate the next specification.
4. Then to repeat until I am out of tests.
 
