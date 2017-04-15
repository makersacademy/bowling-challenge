# Bowling Challenge

* 1 Player
* Launched every time we open the browser

Rules:
* 10 frames
* Roll 1 or 2 times in every frame
* Knocked down pins will be fed in by a random number generator
* Score is the number plus bonuses for strikes and spares

## STRIKE
* 10 pins - strike - one attempt - frame ends
* Bonus - knocked down pins by the next frame
* Unless another strike

## SPARES
* All 10 pins within the rolls of a frame
* Bonus - knocked down by next roll

## 10th FRAME BONUS
* If strike, roll another ball
* If another strike, roll additional ball

## GUTTED GAME
* Player doesn't hit any pins during the 10 frames

## PERFECT GAME
* 12 Strikes
* Gives 300 points

## Plan

### Initialize
* Frame: 0
* Roll: 0
* Pins: 0
* pins_knocked_down_first_roll: 0
* pins_knocked_down_second_roll: 0
* Total score: 0
* Message
* Scoreboard_first_roll = [frame, roll = 1, pins_knocked_down_first_roll]
* Scoreboard_second_roll = [frame, roll = 2, pins_knocked_down_second_roll, total_score, message]













* Method: first_roll
frame += 1
roll = 1
pins_knocked_down
pins_knocked_down_first_roll = pins_knocked_down
- if pins_knocked_down_first_roll 0 >= && < 10
pins -= pins_knocked_down
scoreboard_first_roll(frame, roll, pins_knocked_down_first_roll)
second_roll
- else if pins_knocked_down === 10
strike





pins_knocked_down
rand(pins)


second_roll
roll = 2
pins_knocked_down
if pins_knocked_down + pins_knocked_down_first_roll < 10
pins_knocked_down_second_roll = pins_knocked_down
add_score
scoreboard_second_roll(frame, roll, pins_knocked_down_second_roll, total_score, message = default)


add_score
- if scoreboard_second_roll, hash is equal to spare?
spare_score
if scoreboard_second_roll, strike?
strike_score
- else if


- if pins_knocked_down_first_roll = 10
add_score = 0
- else if total_pins < 10
add_score = total_pins
Total score = pins_knocked_down_first_roll + pins_knocked_down_second_roll


strike
pins_knocked_down_first_roll = pins_knocked_down_second_roll
scoreboard_second_roll[, frame, roll = 1, 10, total_score, "Strike"]




* Functions (strike, spare)
* Functions (10th frame bonus, gutted and perfect game)
*
