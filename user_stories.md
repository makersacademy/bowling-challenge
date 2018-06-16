* Features
  * [ ] Gutter game
  * [ ] One frame
  * [ ] Multiple frames
  * [ ] Spares
  * [ ] Strikes
  * [ ] Final Frame

  The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

As a user,
So that I can keep track of my game,
I need to enter my score after each bowl,  

As a user,
So that I can see how I'm doing,
I need to be able to see my running score

- STRIKE: When 1st ball is 10 pins
  * no second ball
  * Next frame is given bonus

- SPARE: When 1st ball + 2nd ball = 10 pins
  * 1st ball of next frame is given bonus

- FINAL FRAME - When 10th frame
  - if 1st ball is 10 pins
    * Given another ball.
    * Next ball is bonus  
      - If ball is 10 pins
        * Given another ball
        * Next ball is bonus
      - If ball is less than 10 pins
        * Given another ball, with number of pins standing = 10 - previous balls pin knocked down


- 10 frames
- Each frame (before 10) has 2 balls (unless strike)

User flow
## 1st - 9th Frame
Current_frame = 1
Current_frame_score = null;
Total_score = null;
previous_games_score = null;
  If current_frame < 10
    1st_ball_score = null;
    2nd_ball_score = null;
    - 1st_ball_score == the user entry
      - If 1st_ball_score == 10:
        * Wait until the next frame, when it's complete: total_score +=  (10 + next games frame score)
        * Break (No second ball)
      - Else
        - current_frame_score += 1st ball
        - 2nd_ball_score == the user entry
        - IF (the current_frame_score == 10)
          * Wait until the next frame, when it's complete, add the current_frame_score + the next ball
          - ELSE
          * current_frame_score += 1st ball + 2nd ball
          * Total_score += 1st ball + 2nd ball

    If current_frame == 10
      - 10th_frame_score = 0
      - 10th_frame_ball = 1
      - If (1st ball == 10) && (10th_frame_ball < 3)
        * current_frame_score += 10
        Wait until the next ball, when it's complete add the current_frame


// resets for next round
previous_games_score == current_frame_score
Current_frame_score == 0
1st_ball_score == 0
2nd_ball_score == 0

10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

Options for capturing the next frames score to add the bonus
Its current_frame_score += the next (1 or 2) clicks
If the 1st click is 10
  * current_frame_score += 10
Else
  * current_frame_score += 1st_click + 2nd_click
