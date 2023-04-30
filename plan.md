A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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

F = frame. Frame 1 to 10
FX represents a generic frame. F1 represent the first frame and so on.
R = rolls. 2 rolls per frame, unless a strike in first roll. R1 = first roll.
10th frame can have 3 rolls, but only if they roll a strike or a spare

# Ordinary score, i.e both rolls knock down less than 10 pins
if score FX.R1 + FX.R2  < 10
  score = FX.R1 + FX.R2

# Players scores a spare, i.e both rolls knock down 10 pins
elsif score FX.R1 + FX.R2 = 10
  score = 10 + FX + 1.R1

# Players scores a strike, i.e knocks down all 10 pins in first roll
elsif score FX.R1 = 10
  score = 10 + FX + 1.R1 + FX + 1.R2

elsif in 10th frame if the players score a strike or a spare, they can roll a 3rd time. All of the 3 rolls are added togethernpm add jest