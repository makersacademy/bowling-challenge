#Bowling Scorecard
##Features:

The scorecard counts and sums the scores of a bowling game for one player (in JavaScript) and displays it.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

It will only allow the player to click a legal amount of pins.

E.g. If the player is in frame 1 and bowled a 7 on the first roll, then they will only be allowed to enter a 3,2,1 or 0 for their next roll.

####Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

####Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

####10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

####Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores). Try it for a bonus 'feature'.

####Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points. Try it for a bonus 'feature'.

![alt text](./images/bowling_screen1.png "Bowling Scorecard screenshot1")
![alt text](./images/bowling_screen2.png "Bowling Scorecard screenshot2")

##Installation:

You can try the Bowling Scorecard online:

COMING SOON!!

or install it locally:

From the command line...

* $ git clone git@github.com:jelgar/bowling-challenge.git
* $ cd bowling-challenge
* $ bundle
* $ open index.html

##Technologies:

* JavaScript
* JQuery
* html
* CSS
* Jasmine

##Contributors:

Jonathan Gardiner
