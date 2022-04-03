````
EXAMPLE OUTPUT 1: For a perfect game 

Your Score for frame : 1 is 10
[ [ 10, 0, 10 ] ]
Your Score for frame : 2 is 30
[ [ 10, 0, 20 ], [ 10, 0, 30 ] ]
Your Score for frame : 3 is 60
[ [ 10, 0, 30 ], [ 10, 0, 50 ], [ 10, 0, 60 ] ]
Your Score for frame : 4 is 90
[ [ 10, 0, 30 ], [ 10, 0, 60 ], [ 10, 0, 80 ], [ 10, 0, 90 ] ]
Your Score for frame : 5 is 120
[ [ 10, 0, 30 ], [ 10, 0, 60 ], [ 10, 0, 90 ], [ 10, 0, 110 ], [ 10, 0, 120 ]]
Your Score for frame : 6 is 150
[ [ 10, 0, 30 ],[ 10, 0, 60 ],[ 10, 0, 90 ],[ 10, 0, 120 ], [ 10, 0, 140 ],[ 10, 0, 150 ]]
Your Score for frame : 7 is 180
[ [ 10, 0, 30 ],[ 10, 0, 60 ],[ 10, 0, 90 ], [ 10, 0, 120 ],[ 10, 0, 150 ],[ 10, 0, 170 ],
  [ 10, 0, 180 ]]
Your Score for frame : 8 is 210
[[ 10, 0, 30 ], [ 10, 0, 60 ],[ 10, 0, 90 ],[ 10, 0, 120 ],[ 10, 0, 150 ],
  [ 10, 0, 180 ],[ 10, 0, 200 ],[ 10, 0, 210 ]
]
Your Score for frame : 9 is 240
[ [ 10, 0, 30 ],[ 10, 0, 60 ],[ 10, 0, 90 ],[ 10, 0, 120 ],[ 10, 0, 150 ],
  [ 10, 0, 180 ],[ 10, 0, 210 ],[ 10, 0, 230 ],[ 10, 0, 240 ]
]
Your Score for frame : 10 is 270
[ [ 10, 0, 30 ],[ 10, 0, 60 ],[ 10, 0, 90 ],[ 10, 0, 120 ],[ 10, 0, 150 ],
  [ 10, 0, 180 ], [ 10, 0, 210 ], [ 10, 0, 240 ],[ 10, 0, 260 ],
  [ 10, 0, 270 ]
]
The Game has Ended! Your END OF GAME SCORE IS 300
[[ 10, 0, 30 ], [ 10, 0, 60 ], [ 10, 0, 90 ],[ 10, 0, 120 ], [ 10, 0, 150 ],
  [ 10, 0, 180 ], [ 10, 0, 210 ], [ 10, 0, 240 ],[ 10, 0, 260 ],
  [ 10, 0, 300 ]
````
````
EXAMPLE OUTPUT 2: For a standard game 
Your Score for frame : 1 is 8
[ [ 4, 4, 8 ] ]
Your Score for frame : 2 is 16
[ [ 4, 4, 8 ], [ 4, 4, 16 ] ]
Your Score for frame : 3 is 24
[ [ 4, 4, 8 ], [ 4, 4, 16 ], [ 4, 4, 24 ] ]
Your Score for frame : 4 is 32
[ [ 4, 4, 8 ], [ 4, 4, 16 ], [ 4, 4, 24 ], [ 4, 4, 32 ] ]
Your Score for frame : 5 is 40
[ [ 4, 4, 8 ], [ 4, 4, 16 ], [ 4, 4, 24 ], [ 4, 4, 32 ], [ 4, 4, 40 ] ]
Your Score for frame : 6 is 48
[[ 4, 4, 8 ], [ 4, 4, 16 ],[ 4, 4, 24 ],[ 4, 4, 32 ], [ 4, 4, 40 ],
  [ 4, 4, 48 ]
]
Your Score for frame : 7 is 56
[ [ 4, 4, 8 ],[ 4, 4, 16 ],
  [ 4, 4, 24 ], [ 4, 4, 32 ],[ 4, 4, 40 ],
  [ 4, 4, 48 ],[ 4, 4, 56 ]
]
Your Score for frame : 8 is 64
[[ 4, 4, 8 ],[ 4, 4, 16 ],[ 4, 4, 24 ],[ 4, 4, 32 ],
  [ 4, 4, 40 ], [ 4, 4, 48 ],[ 4, 4, 56 ],[ 4, 4, 64 ]
]
Your Score for frame : 9 is 72
[[ 4, 4, 8 ],[ 4, 4, 16 ],[ 4, 4, 24 ], [ 4, 4, 32 ], [ 4, 4, 40 ],
  [ 4, 4, 48 ], [ 4, 4, 56 ],[ 4, 4, 64 ],[ 4, 4, 72 ]
]
Your Score for frame : 10 is 80
[[ 4, 4, 8 ],  [ 4, 4, 16 ],[ 4, 4, 24 ], [ 4, 4, 32 ],[ 4, 4, 40 ], [ 4, 4, 48 ],
  [ 4, 4, 56 ], [ 4, 4, 64 ],[ 4, 4, 72 ], [ 4, 4, 80 ]]
The Game has Ended! Your END OF GAME SCORE IS 80

````
````
JEST TESTS:
1. For the Scorecard:
'can rolls pins'
'can tally a frame'
'can roll a gutter game'
'can roll a standard game'
'can roll a strike'
'can roll two strikes'
'can roll three strikes'
'can roll four strikes'
'can roll a 10 strikes'
'can roll a 3 strikes and a standard roll'
'can roll 2 strikes and a standard roll'
'can roll a spare'
'can roll two spares'
'can roll 10 spares'
'can roll 5 spares and two strikes and 1 standard roll'
'can roll 12 strikes - two bonus balls'
'can roll 10 spares - one bonus ball'

2. For the Frame:
'can rolls pins'
'can roll a standard roll'
'can negate a standard roll' (rolls a strike)
'can negate a standard roll' (rolls a spare)
'can roll a strike'
'can roll a not roll a strike'
'can complete a frame'
'can not complete a frame'
'can roll a spare'
'can negate a spare'


Test Suites: 2 passed, 2 total
Tests:       27 passed, 27 total
Snapshots:   0 total
Time:        0.229 s, estimated 1 s
````

Bowling Challenge
=================

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. 

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

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

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
