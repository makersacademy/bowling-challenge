# Bowling Challenge

## There are 3 elements to this challenge.

- The first is how to store the data.
  There are 10 frames so my data structure should have 10 elements
  Each frame has 2 possible turns, with the 10th turn having an additional option of a 3rd turn.
  Each frame has 10 pins so the data structure should hold the number of pins knocked down on
  each of the available turns.
  Each frame also has a number of states assigned depending on the number of pins knocked down.
  The data structure should be an array of 10 items, one for each turn
  The items in the array are the first, second and third turns, a flag if it is a spare and
  a flag if it is a strike.
  This should be populated as the game unfolds and the total score calculated

// The second element of the challenge is the rules of the game
// Strike: If all 10 pins are knocked down in the first turn then it is a strike.
//  There is no second turn and the strike flag is set
//  Unless this is the 10th turn in which case 2 further turns are allowed
// Spare: If all 10 pins are knocked down in the 2 turns then the spare flag is set

// The third element of the challenge is how to calculate the score
// The score is calculated cumulatively based on the number of pins that have been knocked down.
// There are some additional rules that affect the score
// 1. If the player has a strike then the next 2 turns are counted twice
// 2. If the player scores a spare then the next turn is counted twice
// 3. If the player scores 12 strikes then their score is 300

// Note that a score of 0 is a GUTTER score 
// and a score of 300 is a PERFECT score
