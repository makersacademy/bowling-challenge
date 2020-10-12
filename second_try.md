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
- User inputs 0 


Perfect Game = 300 points (12 Strikes - 10 * 10 for normal frame strikes, plus points from one subsequent rolls(because it is a strike),  and 10 * 2 for extra rolls)

  
           INPUT | OUTPUT
frame1     1/5      6

frame2     1/9      6 + 10(spare) + 1(bonus frame3 roll1) = 17
spare

frame3     1/5      17 + 6 = 23

frame4     5/1      23 + 6 = 29

frame5     10/-     29 + 10(strike) + 6(bonus frame roll1, roll2) = 45
strike

frame6     5/1      45 + 6 = 51
strike

frame7     

frame8

frame9

frame10   1/1

frame10   10/-
strike
xroll1
xroll2


frame10  1/9
spare
xroll1
