# Bowling Challenge
### Makers Academy Weekend Challenge No. 5

### Instructions

We were given the weekend and the evenings during the following week to complete the challenge.

### Task

**Count and sum the scores of a bowling game for one player (in JavaScript) and a nice interactive animated interface with jQuery as a bonus.** A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

**Rules of the game:**
* The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.
* The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).
* If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.
  * 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
  * 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).
* A Gutter Game is when the player never hits a pin (20 zero scores).
* A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

### Using my application

### Dependencies

### Steps in my development process

* **Researched the problem**
  * Initial reaction on reading the task was confusion about the task itself. It didn't seem clear to me whether we were supposed to develop the whole game, including aiming a ball and knocking down pins, or just develop the score card.
  * Did a little research online and realised that the bowling challenge seems to be quite a well-known kata with the focus just being on the scoring. Apparently, the reason that it is such a famous kata is because the algorithms for bowling scores seems tricky but when using TDD can be actually quite simple.
  * Was really useful to do this research first to prevent me from over-complicating the problems.
* **Setting up my project**
  * Next task was all the administrative set up for the project. Added in standalone Jasmine to the directory for testing.
  * Set up the initial structure of this README.md

### Ideas for extension
