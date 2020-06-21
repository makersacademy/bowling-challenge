
Bowling Challenge
=================

Just a scorecard for a game of bowling.

# How to Use

Open index.html in a browser

``` open index.html ```



# Plan

work on getting scorecard for a 0 spare/strike game first.

## Needed files

index.html - for display
jquery.js - to interact between model and page
frame.js - hold num pins knocked over in frame and rolls used
score.js - to deal with the calculation of the score (deals with the spare/strike complications)
scorecard.js - to deal with displaying the scores

### frame.js

takes rolls as input - outputs total knocked over to score and how many in each roll

### score.js

calculates the score for the given frame, (using input of extra frames when needed)

### scorecard.js

holds the score object for each frame and puts out the running total of the game

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery. [ Yeah...? ]
* Set up [Travis CI](https://travis-ci.org) to run your tests. [ As this in just JS not node I don't think its possible]
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform. [ Yes, but it doesn't like to run files in isolation ]

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.


## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
