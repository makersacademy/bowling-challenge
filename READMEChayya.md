# Bowling Challenge

About:

This weekend I will create a bowling challenge using JavaScript, Jasmine in a TDD method. 

Tasks:

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. 
In every frame the player can roll one or two times. The actual number depends on strikes and spares. 
The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. 
After every frame the 10 pins are reset.

Optional Tasks:
Create a nice interactive animated interface with jQuery.
Set up Travis CI to run tests.
Add ESLint to codebase and make code conform.
Try to start with ESLint early on in work — to help learn Javascript conventions as I go along.

# Rules for 10 pin bowling:

Strikes:

The player has a strike if he knocks down all 10 pins with the first roll in a frame. 
The frame ends immediately (since there are no pins left for a second roll). 
The bonus for that frame is the number of pins knocked down by the next two rolls. 
That would be the next frame, unless the player rolls another strike.

Spares:

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. 
The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame:

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. 
But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

Gutter Game:

A Gutter Game is when the player never hits a pin (20 zero scores).

Perfect Game:

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). 
The Perfect Game scores 300 points.

# Methodology

In each frame, a bowler gets two chances to roll. Within each frame there is the possibility of scoring a max of 30 points. Therefore in a game, each player has the potential to achieve a maximum total of 300 points (the perfect score). 

# Weekend Challenge Review:

