# Bowling Challenge

This is my attempt at the [Makers Academy Week 5 Bowling Challenge](https://github.com/makersacademy/bowling-challenge)

## Approach

I built the bowling scorer in Javascript using TDD.  

## Domain Model/Plan

### Objects
```
Game:
  * Attributes:
    * this.frames = [[Frame object], [Frame object], etc..]
    * this.scorecard = e.g. [[X], [7, /], [0, 0], [5, 2], etc]
    * this.frame_running_totals = e.g. [20, 35, 45, etc]
    * this.running_total = 0

  * Methods:
    * get_scores (in order to display on web page)
    * update_scores (consisting of three functions...)
    1. update_scorecard (adds the latest roll to the scorecard)
    2. update_frame_running_totals (loops through the frame objects to check if .is_complete, if so, add frame score to frame_running_totals)
    3. update_running_total (loops through frame objects, if is.complete add to the running_total)

Frame:
  * Attributes:
    * this.rolls = [] - consists of 3 rolls if is_spare or is_strike, otherwise consists of 2
    * this.frame_score = 0
    * this.is_strike = false
    * this.is_spare = false
    * this.is_complete = false
  * Methods:
    * set_to_complete (if 2 rolls if normal frame, 3 if strike or spare)
    * .strike (sets this.is_strike to true and ends the frame unless 10th Frame)
    * .spare (sets this.is_spare to true)
    * is_previous_spare_or_strike (also checks if previous frame is_complete, for first roll only)
    * is_previous_previous_strike (also checks if previous previous frame is complete, for first roll only)
    * is_previous_strike (for second roll of frame only, also checks is previous frame complete)
    * add_to_frames (push Frame object to game.frames)

  * Roll 1 procedure:
    * add roll to .rolls
    * call .strike if roll == 10
    * is_previous_spare_or_strike (if so, add roll value to previous frame.rolls)
    * is_previous_previous_strike (if so, add roll to previous, previous frame.rolls)
    * add_to_frames if .strike
    * game.update_scores
    * next frame if .strike

  * Roll 2 procedure:
    * add roll to .rolls
    * call .spare if rolls.sum == 10
    * is_previous_strike (if so, add roll value to previous frame.rolls)
    * add_to_frames
    * game.update_scores
    * next frame

  * Differences for Frame 10
    * Do not end the frame when you get a strike or spare. Only end the frame if first two rolls don't add up to ten, or after 3 rolls. Just input all scores ( 2, or 3 if spare or strike) and add them to the total.
```
### Process example for 3 frames in pseudo-JavaScript code):
  * game = new Game object
  * for loop of 10 iterations starts...(i = index of current frame)
  * --- FRAME 1 ---
  * this = new Frame object
  * --ROLL 1--
  * user_input = 10
  * this.rolls.push(user_input) (this.rolls = [10])
  * this.strike
  * this.is_previous_spare_or_strike (false)
  * this.is_previous_previous_strike (false)
  * game.frames.push(this)  (game.frames = [[10]])
  * game.update_scores (roll is added to scorecard, frame is not complete so frame_running_total and running_total not updated)
  * this.frame_score == 10, therefore move onto next frame...


  * -- FRAME 2 ---
  * this = new Frame object
  * --ROLL 1--
  * user_input = 7
  * this.rolls.push(user_input) (this.rolls = [7])
  * this.is_previous_spare_or_strike (true)
  * game.frames[i-1].push([this.rolls[0]]) (game.frames = [[10, 7]]
  * this.is_previous_previous_strike (false)
  * game.update_scores (roll added to scorecard, neither this frame, nor frame 1 is complete, so frame_running_total and running_total not updated)
  * this.frame_score != 10, therefore, need a second roll...
  * --ROLL 2--
  * user_input = 3
  * this.rolls.push(user_input) = (this.rolls = [7, 3])
  * this.spare
  * this.is_previous_strike (true)
  * game.frames[i-1].push(this.rolls[1]) (game.frames = [10, 7, 3])
  * this.is_previous_previous_strike (false)
  * game.frames.push(this) (game.frames = [[10, 7, 3], [7, 3]])
  * game.update_scores (game.frames[0] is now complete to gets added to frame_running_totals and running total)
  * game.frame_running_totals = [20]
  * game.running_total = 20
  * two rolls have been completed, so move onto next frame...

  *  ---FRAME 3---
  * this = new Frame object
  * --ROLL 1--
  * user_input = 5
  * this.rolls.push(user_input) (this.rolls = [5])
  * this.is_previous_spare_or_strike (true)
  * game.frames[i-1].push(this.rolls[0]) (game.frames = [10, 7, 3], [7, 3, 5])
  * game.udpate_scores (game.frames[1] is now complete so gets added to frame totals and running total )
  * game.frame_running_totals [20, 35]
  * game.running_total = 35
  * this.is_previous_previous_strike (false)
  * --ROLL 2--
  * user_input = 0
  * this.rolls.push(user_input) (this.rolls = [5, 0])
  * this.is_previous_strike (false)
  * this.set_to_complete (because rolls.sum != 10)
  * game.frames.push(this) (game.frames = [10, 7, 3], [7, 3, 5 ], [5, 0])
  * game.update_scores (latest frame added to totals as it is complete)
  * game.frame_running_totals [20, 35, 40]
  * game.running_total = 40
