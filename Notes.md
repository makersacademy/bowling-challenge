
# Objectives
Count and sum the scores of a bowling game for one player

# Game structure
Strike = 10 pins down in the first roll of frame (no more rolls allowed)

Strike Bonus points => Points from frame =+ 1 (in the 2 rolls)

Spare = 10 pins down in two rolls (i.e. 4 pins in 1st roll, 6 pins in 2nd roll)

Spare Bonus points => Points from frame =+ 1 (in the 1st roll)

10th frame => if Strike or Spare

10Strike => 10 pins down in the first roll of frame, plus 2 extra rolls and it’s points (Points = 10 + n + m)
10Spare => 10 pins down in two rolls (i.e. 4 pins in 1st roll, 6 pins in 2nd roll) and points for 1 extra  roll (Points = 4+6, plus i.e.5)

Gutter Game = zero points, never hits pins

Perfect Game = 300 points (12 Strikes - 10 * 10 for normal frame strikes, plus points from one subsequent rolls(because it is a strike),  and 10 * 2 for extra rolls)

10 +10(f2)
10(f2.1) + 10(f3)
10(f3.1) + 10(f4)…. 10(f10) + 10bonusroll + 10bonusroll.






BowlingGame <- Frame <-- Rolls <-- Pins

-- Rolls/Pins is the smallest problem (define state)
-- Frame contains Rolls/Pins (define first state, then behaviour)
-- BowlingGame contains Frame

Maybe Frame can be responsible for Rolls and Pins/Points
- describe Frame: holds number of Rolls/Pins
- Rolls take pins as arguments
- Points will be equal to pins plus bonus
BowlingGame takes the points and creates scorecard - has a default amount of Frame?

BowlingGame = 10 frames (20 * 10 frames)
Frame = 2 rolls (20 pins)
Roll = 10 pins (can't be morethan 10, can't be lower than 0)
Point = Pins + BonusPoints from Strike, BonusPoints from Spare

Points

F1
if roll1 == 10
strike /  end frame
points == 10 plus frame =+ 1 (roll1+roll2)

F2
if roll1 == 5 && roll2 == 5 (or roll1+roll2 == 10)
spare / end frame
points == 10 plus frame =+ 1 (roll1)

F3
if roll1+roll2 < 10
Points == roll1+roll2


     INPUT(roll1/roll2)           |         OUTPUT (points)
            0 / 0                              0
            10 / 0

Frame1  
10
-

Frame2  
2
3

Frame3  
5
5

Frame4  
5
1

Frame5  
0
10

Frame6  
0
1

Frame7  
10
-

Frame8  
10
-

Frame9  
0
1

Frame10
  


# Start with Roll Class
1. Create environment
2. Start with the smallest problem possible, which in this case is the Roll/Pins
3. Unit test for Roll taking pins as parameter -> first test state: how many pins can one roll put down?
4. Then initialize @pins and insert condition to be between 0 - 10 (invalid inputs are errors)

# Continute with Frame Class
1. What can Frame do - what is frame responsible for?
 - Frame has a mnumber between 1-10 (10 Frames = 1 Game)
 - Invalid inputs if Frame < 0 && Frame > 10
 - Frame can add rolls (each frame made of 2 rolls, so roll count has to be < 2 and the frame score has to be <= 10)
 
2. Unit test for the state of frame and its invalid inputs
3. Initialize the variables and raise invalid inputs as errors



 - Frame max is 10, which finishes the game (complete)
 - Invalid inputs if Frame < 0 && Frame > 10
 - Frames 1-9 are the same (one context)
 - Frame 10 has different number of rolls depending on Strike or Spare (if Strike or Frame, roll count goes up) (another context)
 - 











