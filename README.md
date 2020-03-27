This fortnight challenge was the bowling challenge. I was happy with my effort last week, it took me a few hours to first learn the rules of bowling, and then try to diagram a model of how it would look.

My first approach (which i ended up renaming scoreCard from bowling) was based on a frame object adding two balls into a games array in order to keep track of the current score and add the score as it went.

This posed a big problem though, it became hard to add the bonus balls fromt he following frame, and accessing that frame, whilst keeping the score of the current game rolling posed hard.

This week i decided to take a different approach and try to wrap up the logic as simply as possible. I decided to view the game as 20 rolls instead of 10 frames of 2 rolls. This made it far easier to access the rolls as they were at the index of the game array, and therefore made it easier to add the bonus. This however could only be done at the end of the game, and relied on the user calling the score function at the correct time, otherwise it would not return the score.

I am happy i completed all of the requirements for the task, but feel i would liek to combine my first and second efforts to create a scorecard that accumulated as it went.

Currently, the 'bowling' game has the following functionality:

- Gutter game
- One frame
- Multiple frames
- Spares
- Strikes
- Final Frame

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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
