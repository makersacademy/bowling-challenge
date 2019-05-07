# Bowling Challenge #

This program uses JavaScript (and Jasmine for test writing) to create a scorecard for a single player in bowling by counting and totalling the scores of that player throughout a bowling game.

Following an agile product development process, I first started by noting the requirements. From the requirements I used diagrams to model the program (diagrams uploaded in images folder on this repository). Once I knew my direction I was able to test drive the features of the scoring system and was able to move on to test driving frames. 

Ideally I would have liked to have finished test driving how a frame would work. Although I am quite happy with the progress I have made on this weeks Makers Academy Weekend Challenge. 

To use this program, on the command line:
```
git clone git@github.com:domw30/bowling-challenge.git
open SpecRunner.html
```
Once SpecRunner.html has opened this is where you can see testing, and run the program using the console.


## The Rules of Bowling

- A game of bowling consists of 10 frames, in which the player tries to knock down 10 pins.
- In every frame, the player can roll one or two times (depending on whether the player gets a strike or spare).
- The score of a frame is the amount of knocked down pins plus any bonuses for strikes and spares.
- After every frame the 10 pins are reset.

### Strikes

The player has a strike if they knock down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

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

