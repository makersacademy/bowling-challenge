
Bowling Challenge
=================

###Rules

First I ventured to Wikipedia for the rules of bowling as it's not often that I go.

```

- Player bowls 10 frames in a single match (each frame is up to 2 rolls and up to 3 in the final frame).

- If a player knocks down less than 10 pins in 2 rolls, they receive as many points for the frame.

- If a player knocks down 10 pins in 1 roll, they receive bonus points for their next 2 rolls. 

- If a player gets a spare (knocks down 10 pins in 2 rolls), they receive bonus points for their next roll.

- A player has a maximum of 21 rolls, 9 x 2 rolls (no strikes) and a strike in their final frame allowing 2 further rolls.

- A player has a minimum of 11 rolls, 9 x strikes and 2 rolls without a spare or strike in their final frame.

- A perfect game includes 10 strikes for the 10 frames and then 2 strikes from the bonus rolls giving a total of 300 points.

- A gutter game is 20 rolls and no pins knocked over giving a total of 0 points, or nil points if you're a Eurovision fan.

- Right, think that's the scoring sorted, let's bowl!

```

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
