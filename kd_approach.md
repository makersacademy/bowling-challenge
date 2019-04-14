## Project Overview
## Processes & Approach

#### REQUIREMENTS

This project is part of Week 5 and 6 of the Makers Academy 12-week software engineering programme. 

The aim of this project is to build a bowling scorecard using JavaScript. The bowling score will enable a simple count and sum the scores of a bowling game for one player.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Features (USER STORIES)

```
/* BUSINESS LOGIC */

//ROLL INPUT

User inputs the number of pins rolled via the interface
The scorecard will keep track of the score :)

//STRIKES

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

USER STORY 2
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


//SPARES

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

USER STORY 3
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

//10th frame

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


//Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

USER STORY 1
> As a player
when I roll 0 for every frame
I play a gutter game

Score is: 0

//Perfect Game

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

### DOMAIN MODEL

As well as breaking down the requirements, I watched a youtube video: https://www.youtube.com/watch?v=oSUi1d5sAb0 which helped me visualise the bigger picture of the aim of the project. I did some research and found the reduce method super powerful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce.

#### TECHNICAL IMPLEMENTATION

Last weekend, 7th April 2019, I went for the approach of having separate frame, player, bowlingGame and scoreCard objects, but this proved to be quite complicated. I had to go back and remodel my domain several times.

A week later, 14th April 2019, I went back to the drawing board and simplified my approach. This week, learning about the minimum viable product (MVP) was useful to achieve my aims in a focused way, without overcomplicating it.

For the MVP, I split the aim of this project into two versions:

VERSION 1 - Simple Bowling Game
The user will input all the rolls of a bowling game and get a total score back at the end of the game

VERSION 2
A Frame object will manage each frame and their status (strike, spare, normal) and the game object will manage the gameplay (contain frames) and score while the user is playing. This is a better model as it gives feedback to the user at the end of each frame and resets a frame, rather than at the end of the whole game.



-----------------------------
## VERSION 1 - Simple Bowling Game


### USER STORY 1

### Gutter Game

USER STORY
[X] > As a player
when I roll 0 for every frame
I play a gutter game

##### TEST CASES

1.  [X] Version 1: Return final score with gutter game

### USER STORY 2

> [X] As a player,
so that I can get the final score
I can input my pins knocked over for the whole game


##### TEST CASES

1.  [X] Version 1: Return final score for random games (no strikes/spares)








##### BUSINESS LOGIC

##### OBJECTS/FUNCTIONS (MODEL)

```
# pseudocode

A Gutter Game is when the player never hits a pin (20 zero scores).
Score is: 0

scorecard = new Scorecard()

20.times do
  scorecard.roll(0)
end

assertEquals(scorecard.total(), 0)
assertEquals(scorecard.isComplete(), true)
```

- Player
  Manages: 
  - [X] User input of number of pins rolled (??? - refactored this and included in frame object)

Justification: Useful if the one-player scorecard is expanded to two-player scorecards

- Frame
  - [X] User input of number of pins rolled - play?
  - [X] Manages pins rolled by the player in a frame
  - [X] Determines the type: strike, spare, normal

Once `player` plays a roll, the frame will determine the score, it will determine the overall type for the frame. The frame tracking is delegated to the `BowlingGame` object which contains an array of frames.`BowlingGame` manages the 10th frame management. `ScoreCard` manages the scoring mechanism (?)

- BowlingGame
  Manages:
  - [X] Keeping track of frame e.g. frame i
  - Keeping track of roll number(???)
  - Game start
  - Game stop
  - 10th frame management

- Scorecard
  Manages:
  - Score array
  - Scoring mechanism


##### USER JOURNEY

Player input number of pins rolled, the frame will determine the score, it will determine the overall type for the frame. The frame tracking is delegated to the `BowlingGame` object.`BowlingGame` manages the 10th frame management. `ScoreCard` manages the scoring mechanism, user sees the number of pins rolled and score for the frame in the user interface.

----------------------

### USER STORY 1

### Gutter Game

USER STORY
[X] > As a player
when I roll 0 for every frame
I play a gutter game

##### TEST CASES

1.  [X] Version 1: Return score with gutter game

---

### USER STORY 2

> [X] As a player
when I knock down all 10 pins on the first roll of a frame
I score a strike

B/A/C:
[X] GIVEN: The player knocks down all 10 pins on the first roll of a frame (e.g. frame i)
[X] WHEN: A strike is scored
[X] THEN: The frame ends

[X] GIVEN: The player knocks down all 10 pins on the first roll of frame i
[X] WHEN: A strike is scored
THEN: Combined total number of pins knocked down by the next two rolls (of frame i+1) will be added onto the total of frame i (10) to get y

Calculation:
 frame i score = (frame i-1 score) + y
 frame i+1 score = (frame i score) + (total number of pins knocked down by the next two rolls (of frame i+1))

##### TEST CASES


### USER STORY 3

### SPARES

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

USER STORY
[X] > As a player
when I knock down all 10 pins with two rolls of a frame
I score a spare

B/A/C:
[X] GIVEN: The player knocks down all 10 pins with two rolls of a frame
[X] WHEN: A spare is scored
[X] THEN: The frame ends

[X] GIVEN: The player knocks down all 10 pins with two rolls of a frame
[X] WHEN: A spare is scored
THEN: The total number of pins knocked down by the next roll (frame i+1) is added onto the total for frame i (10) to get y

Calculation:
 frame i score = (frame i-1 score) + y
 frame i+1 score = (frame i score) + (total number of pins knocked down by the first roll (of frame i+1))





## Improvements/enhancements:

Next time I come round to looking at this I want to:

- 
- 