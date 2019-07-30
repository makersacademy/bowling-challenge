# Bowling Challenge

This is my attempt at the [Makers Academy Week 5 Bowling Challenge](https://github.com/makersacademy/bowling-challenge)

## Approach

I built the bowling scorer in Javascript using TDD.  

## Domain Model/Plan

### Objects
```
Score:
  * Attributes:
    * scorecard = e.g. [[X], [7, /], [0, 0], [5, 2], etc]
    * frame_running_totals = e.g. [20, 35, 45, etc]

  * Methods:
    * .get_scores (in order to display on web page)
    * .update (consisting of three functions...)
    1. .update_scorecard (adds the latest throw to the scorecard)
    2. .update_frame_running_totals (loops over the frames to check if they are complete, if so, add frame score to frame_running_totals)

Game:
  * Attributes:
    * frames = e.g. [[frame object], [frame object], [frame object], etc]
  * Methods:
    * .start - start a for loop for 10 iterations (one for each frame), 10th one being different. Each iteration instantiates new Frame object.

Frame:
  Attributes:
    * throws = []
    * is_complete = true/false
  Methods:
    * .throw_one(user_input):
    1. throws.push(user_input)
    2. check if previous frame strike or spare (if so, add throw value to previous frame)
    3. check if previous, previous frame a strike (if so, add throw value to previous, previous frame)
    4. score.update
    6. if throw == 10: move onto next frame (i.e next iteration in for loop)

    * .throw_two(user_input):
    1. throws.push(user_input)
    2. check if previous frame a strike (if so, add throw value to previous frame)
    4. score.update

  * Differences for Frame 10
    * Do not end the frame when you get a strike or spare. Only end the frame if first two throws don't add up to ten, or after 3 throws. Just input all scores ( 2, or 3 if spare or strike) and add them to the total.
```
### Process example for 3 frames in pseudo-JavaScript code):
  * game = new Game
  * game.start
  * frames = []
  * for loop of 10 frames starts...
  * --- FRAME 1 ---
  * throws = []
  <!-- * for loop of 2 throws -->
  * --throw 1--
  * .throw_one(10)
  * throws.push(10)
  * check if previous frame strike or spare (false)
  * check if previous previous strike (false)
  * score.update
  * throw == 10 so break out of for loop and go to next frame

  * -- FRAME 2 ---
  * frame = []
  * --throw 1--
  * .throw_one(7)
  * frame.push(7)
  * check if previous frame strike or spare (true)
  * therefore, frames[i-1].throws.push(7) (frames = [[10,7]])
  * check if previous previous strike (false)
  * score.update
  * --throw 2--
  * throw_two(3)
  * throws.push(3)
  * Check if previous frame a strike (yes)
  * therefore, game.frames[i-1].throws.push(3) - frames = [[10,7,3]]
  * frames.push(frame) - frames = [[10,7,3], [7,3]]
  * score.update
