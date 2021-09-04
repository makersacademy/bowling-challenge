
Bowling Challenge
=================

## Planning

**Frame Class**
```
add(pins)
--------- 
Is frame full?
    YES: Endpoint.
    NO: Is pins an integer between 0 and number of remaining pins?
        YES: Is it last frame (frame_id = 10)?

            YES: Is roll_1 null?
                YES: Add pins to roll_1. Endpoint.
                NO: Is roll_2 null?
                    YES: Do roll_1 + pins equal 10 or more?
                        YES: Add pins to roll_2, reset remaining pins. Endpoint.
                        NO: Add pins to roll_2 and frame = full. Endpoint.
                    NO: Add pins to roll_3 and frame = full. Endpoint.
                
            NO: Is roll_1 null?
                YES: Is pins value 10?
                    YES: Add pins to roll_1 and set roll_2 to zero and frame = full. Endpoint.
                    NO: Add pins to roll_1. Endpoint.
                NO: Add pins to roll_2 and frame = full. Endpoint.
        NO: Invalid roll. Endpoint.
```

From above logic, Frame class will need to have these attributes:
frame_id (number) - class initialized with frame_id passed to it
roll_1 (number) initialized null
roll_2 (number) initialized null
roll_3 (number) initialized null if frame_id = 10
frame_full (boolean) initialized false
remaining_pins (number) initialized with a TOTAL_PINS value (10)
A frame object might include a hash consisting of these values.

Will need function to add pins to frame - this will call on a number of private functions to work through logic above.
Will also need functions to access value of frame_id, the rolls, and frame_full.
Could move valid roll logic to game class later.

**Scoring Class**
```
calculateScore(frames)

Input: frames is an array of objects, each object containing roll1, roll2, roll3, and possibly frame id data
Output: an array of numbers corresponding to each frame in order, representing the score of each frame.

i.e.
Input object data properties frame_id = 1, roll1 = 10, roll2 = 0, 
                             frame_id = 2, roll1 = 3, roll2 = 4)
Output: [17, 7]

Roll1 is null?
	YES: Return (break any iteration), incomplete frame. Endpoint.
	NO: Is roll2 null?
		YES: Return roll1 - incomplete frame. Endpoint.
		NO: Two rolls added together < 10
			YES Add scores together and return them. Endpoint.
			NO Is it last frame?
				YES: Roll2 is null?
			 		Yes: Return roll1 (10) - incomplete bonus. Endpoint.
					No: Roll3 is null?
						Yes: Return roll1 + roll2: incomplete bonus. Endpoint
						No: Return sum of roll1, roll2, roll3. Endpoint.
				NO: Roll1 is 10?	
					Yes: Implement strike logic
					No: Implement spare logic

STRIKE LOGIC
Is one_frame_ahead roll1 null?
	YES return roll1 at this point: Incomplete bonus Endpoint.
	NO  is one_frame_ahead roll1 < 10 (strike)? OR is current frame id = 9?
		YES Is one_frame_ahead roll2 null?
			YES return roll_1 + one_frame_ahead roll1. Partial incomplete bonus Endpoint.
			NO return roll_1 + one_frame_ahead roll1 + one_frame_ahead roll2. Endpoint
		NO Is two_frame_ahead roll1 null?
			YES return roll_1 + one_frame_ahead roll1 at this point. Partial incomplete bonus Endpoint.
			NO return roll1 + one_frame_ahead roll1 + two_frame_ahead.roll1. Endpoint.

SPARE LOGIC
is one_frame_ahead roll1 null?
	YES: return roll1 + roll2 at this point. Incomplete bonus endpoint.
	NO: return roll1 + roll2 + next_frame roll1. Endpoint

Possible variables to use in above logic:
@current_frame = frame[index]
@one_frame_ahead = frame[index + 1] - assign at relevant point so can't be invalid?
@two_frames_ahead = frame[index + 2] if valid? - assign at relevant point so can't be invalid?

Possible other functions:
cumulativeScore(scores)
Takes score array and calculates cumulative score per frame, i.e.:

scores = 4, 9, 16, 9, 15, 5, 13

cumulative scores = 4, 13, 29, 38, 53, 58, 61

This would negate need for total score function, as final element in list will always be total.

```

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

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
