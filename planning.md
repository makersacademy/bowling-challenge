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
  - Bonus is no. of pins knocked down by next roll

10th frame:
  - If spare player gets another roll.
  - If strike, player gets another 2 rolls.
  - However never more than 3 rolls in this frame.

Perfect game:
  - 12 strikes (10 regular, 2 bonus)
  - 300 points

Error checking for illegal scores.

Bonus problem solutions:
  - Have a variable that allows each frame to track if it is being used to calculate a bonus from a previous frame.
  - Recursion on the bonus function if the previous previous frame was spare/strike.
    - Maybe this does weird things though? Might need to make it print out what stage of recursion it is at the understand properly.

10 - frame 1
  - 'strike', no bonus as frame 1. (becomes next frame)
10 - frame 2
  - frame score records as 'strike'
  - bonus is called:
    - Last frame is frame 1
    - Last frame - 1 (frame 0) is undefined, so it does not call bonus again.
    - It is not a spare
    - Last frame is a strike, and this frame tally is 2.
      - This frame is a strike
        - set last frame score to 10 + 10
          - This is not what I want to happen. I want the strike to know that it is ten plus ten, but that it should wait for the next score before it records it's score properly.
          - Ideas:
            - Strike object's score is an array. First item in the array is 10. When there is another 10, add to the array. When there is another score, add to the array. At every step, measure the array's length and collapse it down to an integer if it is 3 items long.
            - I want it to do ten, if strike 10, also next thing. It needs to know to call bonus on this
            part again (it will call bonus automatically, so that's fine?))
              - Another variable that says 'strike'? Erased only after the third time through? Enforced through a counter variable?
4 - frame 3
  - frame score records as 3
  - bonus is called:
    - last frame is frame 2
    - last frame - 1 is defined, but it is not a strike (it is 20). No calling bonus again.
    - last frame is a strike, but this frame tally isn't 2. Ignore.
4 - frame 3
  - frame score records as 3
  - bonus is called:
    - last frame is frame 2
    - last frame - 1 is defined, but it is not a strike (it is 20). No calling bonus again.
    - last frame is a strike, frame tally is 2.
      - this is not a strike.
      - therefore add this frames score (6) to 10 and assign it to the previous frame's score.

!!! Something about tallies? !!!
!!! Are there any circumstances under which it calls itself again !!!
!!! I don't have to enforce separation between the frames? Therefore can just use summing or something? !!!
