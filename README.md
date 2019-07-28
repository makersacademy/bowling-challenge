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
    1. .update_scorecard (adds the latest roll to the scorecard)
    2. .update_frame_running_totals (loops over the frames to check if they are complete, if so, add frame score to frame_running_totals)

Game:
  * Attributes:
    * frames = e.g. [[10,5,5], [5,5,2], [2,3]]
  * Methods:
    * .start - start a for loop for 10 iterations (one for each frame), 10th one being different. Each iteration instantiates new Frame object.

Frame:
  Attributes:
    * rolls = []
    * .roll_one(user_input):
    1. rolls.push(user_input)
    2. check if previous frame strike or spare (if so, add roll value to previous frame)
    3. check if previous, previous frame a strike (if so, add roll to previous, previous frame)
    4. score.update
    5. if roll == 10: frames.push(frame)
    6. if roll == 10: break out of loop to next frame

    * .roll_two(user_input):
    1. frame.push(user_input)
    2. check if previous frame a strike (if so, add roll value to previous frame)
    3. frames.push(frame)
    4. score.update

  * Differences for Frame 10
    * Do not end the frame when you get a strike or spare. Only end the frame if first two rolls don't add up to ten, or after 3 rolls. Just input all scores ( 2, or 3 if spare or strike) and add them to the total.
```
### Process example for 3 frames in pseudo-JavaScript code):
  * game.start
  * frames = []
  * for loop of 10 frames starts...
  * --- FRAME 1 ---
  * frame = []
  * for loop of 2 rolls
  * --ROLL 1--
  * .roll_one(10)
  * frame.push(10)
  * check if previous frame strike or spare (false)
  * check if previous previous strike (false)
  * score.update
  * roll == 10 so frames.push(frame) - frames: [[10]]
  * roll == 10 so break out of for loop and go to next frame

  * -- FRAME 2 ---
  * frame = []
  * --ROLL 1--
  * .roll_one(7)
  * frame.push(7)
  * check if previous frame strike or spare (true)
  * therefore, frames[i-1].push(7) (frames = [[10,7]])
  * check if previous previous strike (false)
  * score.update
  * --ROLL 2--
  * roll_two(3)
  * frame.push(3)
  * Check if previous frame a strike (yes)
  * therefore, frames[i-1].push(3) - frames = [[10,7,3]]
  * frames.push(frame) - frames = [[10,7,3], [7,3]]
  * score.update
