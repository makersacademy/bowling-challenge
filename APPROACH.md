# User stories

As a player  
So that I can keep track of my bowling score  
I want to record the number of pins knocked down in a frame

As a player  
So that I can start a game  
I want to register my name

As a player  
So that I can start tracking my score for a new game  
I want to push a new game button

As a player  
So that I can check performance  
I want to have access to a history page of previous games

As a plyer  
So that I can better plan my rolls  
I want to see the current bonus points

As a player  
So that I don't forget to roll twice  
I want to be reminded that I have another roll

As a player  
So that I do not lose the data  
I want to be able to retrieve current score if the game is not complete

As a player  
So that I do not lose the data  
I want to be able to save the results when pushing finish button

As a player  
So that I can start a new game  
I want to be able to push a restart button

**Bonus:**

As a player  
So that I can keep track of my bowling score  
I want to record a spare

As a player  
So that I can keep track of my bowling score  
I want to record a miss

As a player  
So that I can keep track of my bowling score  
I want to record a foul

As a player  
So that I can keep track of my bowling score  
I want to record a split in the pins - O around the number of pins left

# Business Logic

Game has 10 Frames  
Each frame has 2 rolls

if at Frame 10 you get a strike you get:

- 2 bonus rolls
  - if both rolls are strikes
    - extra bonus roll

Symboles:

- X = strike
- "/" = spare (remainder of the pins left standing after first rol are knocked down on the 2nd roll)
- "-" = no pins where knocked down on that roll
- "F" = Foul = part of the body went past the foul line

## Happy path

Max Score: 300
Strike = max 12 rolls - 30 points per frame

Min Score: 0
Gutter = max 20 rolls - 20 scores

## Score Calculation cases

**Case 0: Gutter Game**

**Case 1 NO BONUS: add the number of pins knocked down in each frame**

**Case 2: All strikes**

Strike Bonus: number of points for next 2 rolls (which could be in 2 different frames if first one is a strike)
Max number of points for a single frame is 30
Max number of points: 300

- 10 points for the frame
- 10 points for the first roll 2nd frame (must be a strike)
- 10 points for the second roll 3nd frame (must be a strike)

**Case 2: Strike / Spare / Incomplete with 5 points**

Frame1: 20 points

- 10 points for the frame
- 10 points for the spare

Frame 2: 15 points

- 10 points for the spare
- 5 points for frame 3

Frame 3: 5 points

- 5 points from roll 1
- 0 points from roll 2

**Case 3: Strike / Spare / Incomplete / Strike / Incomplete with 8 points**

Same as case 2 + the following

Frame 4: 18 points

- 10 points for strike
- 8 points

Case 4: Strike / Strike / Incomplete with 5 point

Frame 1: 25 points

- 10 points strike 1
- 10 points 1st roll in Frame 2
- 5 points 2nd roll in Frame 3

Frame 2: 15 points

- 10 points strike 1
- 5 points first and second roll in Frame 3

## Bonus

**Strike:**

- 10 points for strike + points of the next 2 rolls

**Spares:**

- 10 points for current frame (total of pins knocked down in 2 attempts)

* number of pins from first roll in next frame

- For a spare, the bowler gets the 10, plus the total number of pins knocked down on the next roll only.

# Approach

Initialization:

- Set up Jasmine testing
- Set up ESLint
- Set up folder structure

## User story 1

As a player  
So that I can keep track of my bowling score  
I want to record the number of pins knocked down in a frame
