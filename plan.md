### Bowling score card

* Game
  - .frames

* Frame
 - .rolls
 - .total

#### User journey

- User can view box to input first score
- User inputs score from first roll
- User clicks submit:
  1. score is calculated
  2. score is added to total
- If first roll total < 10
  - a. User can input score from second roll
  - b. Else, the user moves on to the next frame
- If first roll total is 10
  - User moves on to next frame
  - Score from next two rolls is added to total as bonus
- If second roll total is < 10
  - User moves on to next frame
- If second roll total is 10
  - User moves on to next frame
  - Score from next roll is added to total as bonus
- 10th frame:
  - if total is < 10 after 2 rolls
    - No bonus rolls
  - if total is 10 after first or second roll
    - A bonus roll (spare) or two bonus rolls (strike)
  - No more than 3 rolls in 10th frame.
