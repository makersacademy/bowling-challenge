
Bowling Challenge
=================

## The Task

To create a score calculator for ten-pin bowling.

### Progress

1. Basic scoring functionality
  1. Score starts at 0
  2. Starts with an empty score card
  3. Adds scores to scorecard
  4. Scoring starts at frame 1
  5. Records score for non-strike / spare rolls
  6. Has 10 frames
2. Strike Logic
  1. Roll 2 defaults to 0 if strike rolled in frame
  2. adds bonus points to score if Strike rolled on first roll
  3. Adds bonus points if strike rolled after first roll

### Remaining work
1. Refactoring
  1. Currently this is in one mega-class
  2. SRP is being violated EVERYWHERE! There are some big methods and the BowlingGame class is currently doing everything.
  3. Refactor to:
    1. Game class
    2. Scoring / Frame class
2. Normal Logic
  1. 2nd roll is restricted by the first roll (i.e. number of pins remaining)
  2. Shows system messages (e.g. You got a strike!)
  3. 10th frame logic (3 goes if roll strike)
3. Strike
  1. 2 strikes in a row
4. Spare
  1. bonues points for Spare

### Challenges
1. Designing the data structure to store the scores was challenging and underwent multiple redesigns
2. understanding the logic of bowling to write the tests and ensure they were correct
3. accessing the data structure to update the bonus points for strikes and spares is challenging and has led to inelegant, hard to read code
