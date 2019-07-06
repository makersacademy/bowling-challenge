# Bowling Challenge


## Specification

- Count and sum the scores of a bowling game for one player (in JavaScript).
- A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


## User Stories

From the above specification, and a further breakdown of the rolls of ten pin bowling I created the following user stories:


  - **Basics of score saving:**

    **- As a user, I want to keep a record of any rolls I input**
    **- As a user, so that I can only input a possible score, I don't want to be able to input a roll less than 0 or more than 10**


  - **General visibility:**

    **- As a user I want it to be clear if I am on my first or second roll**
    - As a user I want to know what frame I am in
    - As a user I want to know my previous rolls and score at the end of each frame


  - **Special circumstances:**

    - As a user I want to know that I got a strike, if I knock all 10 pins down in the first roll
    - As a user, I want to know if I get a spare, knock all 10 pins down over the first and second roll


  - **Number of goes per frame**

    - As a user, I want to have 2 rolls if I do not roll a strike on the first
    - As a user, if I get a strike I want to only have one roll
    - As a user, I want the 10 pins to reset at the end of each round, after a strike or 2 rolls have happened - think about what it means for them to be 'reset'


  - **Bonus scoring:**

    - As a user, if I get a strike or a spare I wont know my proper total for that round until the next round is over
    - As a user, if I get a strike my next two rolls are added as a bonus to the score for the strike round
    - As a user, if i get a spare, my next roll is added as a bonus to the score for the spare round
    - As a user, if I roll 12 strikes in a row I should score 300 points


  - **10th Frame**:

    - As a user if I have not rolled a special roll on the 10th frame, the game is over
    - As a user I want to see my final total when the game has ended
    - As a user if I get any bonus rolls they still count as being within the 10th frame, there cannot be more than 10 frames
    - As a user if I roll a strike in the 10th frame, I get to do two extra rolls to work out my bonuses
    - As a user if I roll a spare in the 10th frame, I get to do 1 extra roll to work out my bonuses
    - As a user if I get a strike in the 10th frame, I get two rolls even if one of them is a strike

## Information that needs to be recorded:
  - Number of current frame
  - Number of rolls taken
  - How many pins knocked down on all rolls
  - Running total of the score
  - Whether a spare or strike has taken place

## Proposed Classes:
- **Score class:** calculates and records scores
- **Frame class:** knows what frame the player is on and what roll within that frame
- **Game class:** handles user input and display
