# Bowling Challenge 2

## There are 4 elements to this challenge.

## The first is how to store the data.
 - There are 10 frames so my 'game' data structure should have 10 elements
 - Each frame has 2 possible turns, with the 10th turn having an additional option of a 3rd turn.
 - Each frame has 10 pins so the data structure should hold the number of pins knocked down on
 - each of the available turns.
 - Each frame also has a number of states assigned depending on the number of pins knocked down.
 - The data structure should be an array of 10 items, one for each turn
 - The items in the array are the first and second turns, a flag if it is a spare or a strike
 - Note that the bonus turn is probably rarely used so should not have an undue influence
   on the data structure itself but treated as a bonus turn.
 - This should be populated as the game unfolds and the cumulative score calculated

## The second element of the challenge is the rules of the game
- Strike: If all 10 pins are knocked down in the first turn then it is a strike.
  - There is no second turn and the strike flag is set
  - Unless this is the 10th turn in which case 2 further turns are allowed
- Spare: If all 10 pins are knocked down in the 2 turns then the spare flag is set

## The third element of the challenge is how to calculate the score
- The score is calculated cumulatively based on the number of pins that have been knocked down.
- There are some additional rules that affect the score
  - If the player has a strike then the next 2 turns are counted twice
  - If the player scores a spare then the next turn is counted twice
  - If the player scores 12 strikes then their score is 300

Note that a score of 0 is a GUTTER score and a score of 300 is a PERFECT score

## The forth element is the user interface.
- This is a score card and not a bowling game so the user should be able to enter the number
  of pins knocked down and the program will recalculate the total, giving a final score at the end.

## User Stories
- The maximum score for the first try in a frame is 10 frame
- It is not possible to have a negative score
- The player should not be able to enter a second score in a frame if the first score was 10
- The maximum score for the second try is 10 minus the score in the first try
- It should not be possible to enter a third score in a frame
- The player should only be able to play 10 frames if the first score on the tenth frame is not 10
- If the first score on the tenth frame is 10 then the player gets to play one more try if this try doesn't score 10.
- If the first try on the eleventh frame is 10 then the player gets to try again
- If the first try on the eleventh frame is not 10 then the game is over

- If a 10 is scored on the first try then that frame is a strike
- If the first and second tries add up to 10 then that frame is a spare

- The score is the cumulative total of the tries
- If the last frame was a strike then then both tries on the next frame are doubled
- If the last frame was a spare then then the first try on the next frame is doubled
- If the total score = 120 then it is a perfect score and the score is set to 300

## Data Structures
Each frame is an array of length 2, for each score.
As the scores are entered they are checked to be valid and the game status is changed from 'Play',
to 'Spare' or Strike' as necessary.

If the frame is valid then it it pushed onto the game array, which is an array of array score pairs.
If the frame is a 'Strike' then the incomplete array is pushed onto the game array and the game moves on.

If the game array is length 10 then 10 frames have been played and unless the last frame is a 'Strike' then the game is over.
If the last game is a 'Strike' then a further frame can be played, if this too is a 'Strike' then one final frame can be played.

The score is calculated as play continues.
