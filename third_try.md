## AFTER PROCESS REVIEW

## Objectives

_Count and sum the scores of a bowling game for one player_


-------------------
INPUT        |    OUTPUT

20.times 1         20


- This is the simplest problem in the whole challenge
- So if I input 20 rolls of 1 pin down, my game should equal 20
- Where do I store the pins down? Initialize an array @rolls, then insert all pins down to that array
- Unit test: create a new game, add roll(pins), expect the _score_ to equal 20
- Rspec, no method score
- Create method score, hard code first output 20 to make tests pass
- But if I want my score to be counted related to number of rolls and pins down, I have to change my method _score_ to be able to count how many rolls and the referred pins down
- So, in my method _score_, I add _total_, so I can show the total points, which is my rolls array all summed up
- Same methodology for testing a _gutter game_

_Gutter Game_

INPUT        |    OUTPUT

20.times 0          0

-------------------

- Now I want to define what a strike is:
  - 1. Strike is when a user rolls 10 pins in the first roll
    - Unit test for rolling 10 pins in the first roll, rest of game rolls 1
    - Implement method strike?(roll_index) if it is a strike, the @rolls will grab the points of the roll strike
    - For this, I need to implement a roll_index in the score method, so I can fetch the points from that position of the array - strike takes roll_index as argument because the position of the roll is a 'determinator' - strike is always counted for the first roll of the frame
  - 2. If it is a strike, I expect to be able to sum the points of the roll, which is 10, plus the points of the two subsequent rolls + the points of the rolls themselves --> roll_index
  - Unit test for _strike_score_    
  - Add method for _strike_score_

- I feel the need to create a frame_score as the tests are asking for it
  - Unit test for frame_score, where two rolls are rolled and the output is the total of this two rolls 

- I want to create a spare? method
  - 1. Unit test for spare, where frame_score == 10, but in two rolls, rest of game rolls 1
  - 2. Unit test for spare_score
    
-----------
## Time for refactoring before inserting 10th frame!
- the code is long and looking confusing
- there is a need for separation between frames 1-9
- handle frame 10 separately
-----------

- Add 10th frame context to tests
- what are my possibilites of the frame10
  - can be a normal frame
  - can have strike as roll1
  - can have spare in roll1+roll2
------------

## Second refactor time!
- there is a need of adding a current_score to be able to track the whole score points
- which might be responsibility of another class to count the entire score of the game??? (not sure how to do it)
- current_score should be defined as taking the number of frames and summing up the score, according to roll index
- take into account strikes, spares and normal rolls
- take into account also the length of the @rolls to know if it is inside frames 1-9 
- RUBY UNFINISHED!

-----------------------------------------
# JS

- It is a good practice to review the code logic and try to implement different classes and responsibilities
- Set up the the environment first, add Jasmine and create file structure

## Create Frame.js

- What is Frame?
  - It starts with 10 pins, so expect a new Frame to have a pinCount toEqual 10, and it will reduce according to the number of pins down
  - Create Frame Class and initialise pinCount 

- WHat is it responsible for?
 
 1. it can receive a max of 2 rolls, if more than 2 rolls, invalid
   - set a variable pinCount = 10, initialised previously and subtracted in the function
   - set a variable this.rollCount = 0, initialised, then incremented in the function

   Invalid case: receive more than 2 rolls
   

 2. it can receive only 2 rolls with total points of 10
   - create test for error if trying to hit more than 10 pins
   - receiveRoll function modified to lower pinCount and, if pinCount - pins < 0, error shows up. -> inverted from my ruby code

   Invalid case: tries to roll more than 10 pins in a frame


 3. it knows the score for each roll  
   - set variables for roll1 and roll2
   - initialise as null, intentionally absence of value as values will be incorporated later on
   - change the receiveRoll function to accept pins down as roll1 and roll2, since score is the number of pins down
   
 
 4. it should know if it is spare
   - if pinCount is 0, meaning all pins were down and roll2 has a value (there were pins down here), then it is a spare (true)

 5. it should know if it is strike
   - same inplementation logic as spare


 6. if on 10th frame, should accept 2 rolls if not strike or spare
   - Create new file FrameTen.js, which will handle the 10th Frame, then implement tests in FrameSpec.js by creating frameTen variable
   - first test to accept 2 rolls if not strike or spare




 - if on 10th frame, should accept 3 rolls if strike
 - if on 10th frame, should accept 3 rolls if spare 


 








# Game structure
Strike = 10 pins down in the first roll of frame (no more rolls allowed) X

Strike Bonus points => Points from frame =+ 1 (in the 2 rolls) X

Spare = 10 pins down in two rolls (i.e. 4 pins in 1st roll, 6 pins in 2nd roll) X

Spare Bonus points => Points from frame =+ 1 (in the 1st roll) X

10th frame => if Strike or Spare

10Strike => 10 pins down in the first roll of frame, plus 2 extra rolls and it’s points (Points = 10 + n + m) x
10Spare => 10 pins down in two rolls (i.e. 4 pins in 1st roll, 6 pins in 2nd roll) and points for 1 extra  roll (Points = 4+6, plus i.e.5) x

Gutter Game = zero points, never hits pins X



Perfect Game = 300 points (12 Strikes - 10 * 10 for normal frame strikes, plus points from one subsequent rolls(because it is a strike),  and 10 * 2 for extra rolls) x