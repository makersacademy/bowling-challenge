IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS

Count and sum the scores of a bowling game for one player

Game structure

BowlingGame <- Frame <-- Rolls <-- Pins

Maybe Frame can be responsible for Rolls and Pins/Points
- describe Frame: holds number of Rolls/Pins
- Rolls take pins as arguments
- Points will be equal to pins plus bonus
BowlingGame takes the points and creates scorecard - has a default amount of Frame?

BowlingGame = 10 frames (20 * 10 frames)
Frame = 2 rolls (20 pins)
Roll = 10 pins
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


