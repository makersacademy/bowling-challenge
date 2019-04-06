## Project Overview
## Processes & Approach

#### REQUIREMENTS

This project is part of Week 5 and 6 of the Makers Academy 12-week software engineering programme. 

The aim of this project is to build a bowling scorecard using JavaScript. The bowling score will enable a simple count and sum the scores of a bowling game for one player.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Features (USER STORIES)

```

/* BUSINESS LOGIC */

## ROLL INPUT

User inputs the number of pins rolled via the interface
The scorecard will keep track of the score :)

### STRIKES

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

USER STORY
> As a player
when I knock down all 10 pins on the first roll of a frame
I score a strike

B/A/C:
GIVEN: The player knocks down all 10 pins on the first roll of a frame (e.g. frame i)
WHEN: A strike is scored
THEN: The frame ends

GIVEN: The player knocks down all 10 pins on the first roll of frame i
WHEN: A strike is scored
THEN: Combined total number of pins knocked down by the next two rolls (of frame i+1) will be added onto the total of frame i (10) to get y

Calculation:
 frame i score = (frame i-1 score) + y
 frame i+1 score = (frame i score) + (total number of pins knocked down by the next two rolls (of frame i+1))


### SPARES

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

USER STORY
> As a player
when I knock down all 10 pins with two rolls of a frame
I score a spare

B/A/C:
GIVEN: The player knocks down all 10 pins with two rolls of a frame
WHEN: A spare is scored
THEN: The frame ends

GIVEN: The player knocks down all 10 pins with two rolls of a frame
WHEN: A spare is scored
THEN: The total number of pins knocked down by the next roll (frame i+1) is added onto the total for frame i (10) to get y

Calculation:
 frame i score = (frame i-1 score) + y
 frame i+1 score = (frame i score) + (total number of pins knocked down by the first roll (of frame i+1))

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

USER STORY
> As a player
when I roll a strike or spare in my 10th frame
I roll additional balls for the bonus

GIVEN: The player is on the 10th frame
WHEN: A spare or strike is scored
THEN: The player can roll additional balls for bonus

3 balls in 10th frame


    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).


### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

USER STORY
> As a player
when I roll 0 for every frame
I play a gutter game

Score is: 0

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

USER STORY
> As a player
when I roll 12 strikes (10 regular strikes and 2 strikes for both the bonus rolls in the 10th frame)
I play a perfect game and score 300 points

```

With my notes, I will go through the TDD process.

- USER STORY
- FEATURE TEST
- UNIT TEST
- CODE IMPLEMENTATION
- FEATURE TEST


### USER STORY 1

### Gutter Game

USER STORY
> As a player
when I roll 0 for every frame
I play a gutter game

#### TECHNICAL IMPLEMENTATION


##### BUSINESS LOGIC

A Gutter Game is when the player never hits a pin (20 zero scores).
Score is: 0

##### OBJECTS/FUNCTIONS (MODEL)



##### USER JOURNEY


##### TEST CASES

1. 

---




## Improvements/enhancements:

Next time I come round to looking at this I want to:

- 
- 