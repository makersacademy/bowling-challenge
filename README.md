Makers Academy Week Five - Bowling Challenge
14-15 July 2018

fifth week (weekend) solo project, building a Bowling scorecard that allows users keep track of there scores.

Full project details and user stories here.

The Challenge details
Count and sum the scores of a bowling game for one player. A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

Bowling — how does it work?
Strikes: The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares: The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame: If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

Gutter Game: A Gutter Game is when the player never hits a pin (20 zero scores).

Perfect Game: A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

Created User stories

User story 1
As a score-manager
So I can keep an eye on the score
I want to add a score to the first roll at the first frame.'

User story 2
As a score-manager
So I can keep an eye on the score
I want to add a score to the second roll at the first frame'

User story 3
As a score-manager
So I can keep an eye on the score
I want to know if the first roll is a strike

User story 4
As a score-manager
So I can keep an eye on the score
I want to know if the second roll is a spare

User story 5
As a score-manager
So I can keep an eye on the score
I want to know the total points from one frame

User story 6
As a score-manager
So I can keep an eye on the score
I want to fill the second roll in if the first roll is not a strike


Completion
Incomplete. Please see below.

Learning Outcomes

Technical
JavaScript / Jasmine / HTML / CSS / jQuery

Implementation
Clone/download repo and navigate to directory

```sh
$ git clone git@github.com:[USERNAME]/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```

Further Improvements
