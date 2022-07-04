Bowling Challenge (JavaScript)
=================

This is a bowling scorecard calculator. The user inputs an array of scores for each 'frame' (of which there should be 10 in total), each of which is a sub-array with the length of 1, 2 or 3 depending on the score / frame number. The output is the total score.

The calculator will handle bonuses from strikes and spares, plus the rules around the 10th frame. It will also calculate a total score for an incomplete game without throwing errors. Scroll down to see the rules of bowling.

To complete this challenge, I followed TDD principles to guide me to my final result. I started with a single method as this was adequate to handle my initial test cases (i.e a gutter game), but as the cases became more complex, I felt it was necessary to move to a single class to take advantage of initialization and private methods. 

I could have refactored my tests to have fewer in the final version, but decided to leave all tests in place to clearly show the TDD process that I followed.

I have assumed that the input will always be an array of arrays containing integers, as this would typically be handled at the point of user input (which was not required for this challenge)



## Planning - handling the rules




                                     ┌───────────────┐
                                     │               │
                                     │ SCORES ARRAY  │
                                     │               │
                                     └───────┬───────┘
                                             │
                                             ▼

                                     Sum of each frame

                                             │
                                             │
                                             │
                                             ▼

                          spare if frame == 10 && frame.length == 2
                 ┌───────
                 │        strike if frame == 10 && frame.length == 1
                 │
                 │                              │   │
                 │                              │   │
                 │                              │   │
                 │              SPARE    ◄──────┘   └───────────────►    STRIKE
                 │
                 │    if spare, add the first roll               if strike, add the first roll of the
                 │    of the next frame onto score               next frame onto the score
                 │
                 │                                                       │             │
                 ▼                                                       │             │
                                                          ┌──────────────┘             └────────────┐
              10TH FRAME                                  ▼                                         ▼

      3rd roll if first 2 rolls include      if strike, add the first roll            if not strike, add 2nd
      strike(s) or spare                     next frame on                            roll of next frame on



## I/O examples

| input | output |
|-------|--------|
| Gutter game - all 0 | 0 |
| complete game - no X or / [[1,1] * 10]| 20 |
| complete game - one spare [[1,1] * 8, [5,5], [1,1]] | 29 |
| complete game - two spares [[1,1] * 4, [5,5], [1,1] * 3, [3,7], [1,1]] | 38 |
| complete game - one strike [[1,1] * 8, [10], [1,1]] | 30 |
| complete game - two strikes [[1,1] * 4, [10], [1,1] * 3, 10, [1,1]] | 40 |
| complete game - two spares in a row [[5,5], [5,5], [1,1] * 8] | 42 |
| complete game - two strikes in a row [[10], [10], [1,1] * 8] | 49 |
| complete game - mixed [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [4,2]] | 143 |
| complete game - spare in 10th frame [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [4,6,3]] | 154 |
| complete game - strike on first roll of 10th frame [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [10,6,3]] | 166 |
| complete game - two strikes in 10th frame [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [10,10,3]] | 174 |
| perfect game [[10] * 10] | 300 |


## Bowling — how does it work?

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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## The Task - instructions from Makers

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD PROGRAM. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player. For this challenge, you do _not_ need to build a web app with a UI, instead, just focus on the logic for bowling (you also don't need a database). Next end-of-unit challenge, you will have the chance to translate the logic to Javascript and build a user interface.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. 

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

## Focus for this challenge
The focus for this challenge is to write high-quality code.

In order to do this, you may pay particular attention to the following:
* Using diagramming to plan your approach to the challenge
* TDD your code
* Focus on testing behaviour rather than state
* Commit often, with good commit messages
* Single Responsibility Principle and encapsulation
* Clear and readable code
