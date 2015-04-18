class   |   input     |  output           | notes
---------------------------------------------------
overall | pins downed |  summed score     |
        |             |                   |
roll    | pins downed | pko, strike       |
        |             |                   |
frame   |roll1,roll2  | score for frame   | needs to also decide
        |             |                   | if there is a spare
game    | frames?     | summed score?     |


game/scorer takes as it's input an array of rolls.
it checks consequtive rolls for their values and places their total into a frame score object.
If the total for a frame is equal to 10 it adds to the frames score obj the value of the next consequitive roll!!. recursion?

If a roll object returns a strike the game object adds an empty roll of 0 points to the frame score obj and also the value of the next frame!!!

have a frame and a score for frame object
