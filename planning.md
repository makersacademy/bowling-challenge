Need to count and sum to scores of a bowling game for one player.

Player should enter a score for each roll they do. The scorecard should automatically increment
the frames and the score, and calculate the spares/strikes.

10 frames, which must be gone through sequentially.
10 pins which can be knocked over per frame.

In every frame, you can bowl once, twice or 3 times.

If strike:
  - All pins have been knocked down in one
  - Frame ends immediately.
  - 10 points + bonus
  - Bonus is the no. of pins knocked down by next 2 rolls (i.e. the next frame)

If spare:
  - All pins have been knocked down in two.
  - 10 points + bonus
  - Bonus is no. of pins kncoked down by next roll

10th frame:
  - If spare player gets another roll.
  - If strike, player gets another 2 rolls.
  - However never more than 3 rolls in this frame.

Perfect game:
  - 12 strikes (10 regular, 2 bonus)
  - 300 points

Bonus problem solutions:
  - Have a variable that allows each frame to track if it is being used to calculate a bonus from a previous frame.
  - 