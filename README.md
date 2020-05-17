
Bowling Challenge
=================
## Summary
For this challenge I used JavaScript & JQuery to construct an interactive Bowling Score Card that's embedded with in an HTML file.

## Models
I used two models. A ScoreBoard which updates the frames scores accordingly and a seperate frame model that houses all the necessary attributes.

## Reflection
While the application does work the models have a lots of things going on. It's not a SOLID design. I should have spent more time planning before implementation. I knew half way through that my approach was ineffiecent but I was "stuck in" the code. I'm hoping that I can refactor this and break the models down so that it's more scalable and everything has a clearer purpose. 

### ScoreBoard
| Attributes                | Methods  |
|-------------              | ----- |
| this.index                | addScore(number) |
| this.frames               | _assignFrame(number) |
| this.currentFrame         | _assignLastFrame(number) |
|                           | _nextFrame()) |
|                           | _constructFrames()) |

### Frame
| Attributes                | Methods  |
|-------------              | ----- |
| this.index                | set firstRoll(number) |
| this.first                | set secondRoll(number) |
| this.second               | set thirdRoll(number) |
| this.third                | hasSpare()) |
| this.prevFrame            | hasStrike()) |
| this.nextFrame            | score()) |
|                           | isLastFrame()) |
|                           | _checkBonusRolls()) |
|                           | _canDisplay()) |

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
