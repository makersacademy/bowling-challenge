# Bowling Challenge

- Feel free to use google, your notes, books, etc. but work on your own
- If you refer to the solution of another coach or student, please put a link to that in your README
- If you have a partial solution, **still check in a partial solution**
- You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

- Forking this repo

- Finally submit a pull request before Monday week at 9am with your solution or partial solution. However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.

**_STRONG HINT, IGNORE AT YOUR PERIL:_** Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

- Create a nice interactive animated interface with jQuery.
- Set up [Travis CI](https://travis-ci.org) to run your tests.
- Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

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

- All tests passing
- The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md). Note that referring to this rubric in advance may make the challenge somewhat easier. You should be the judge of how much challenge you want.

# Notes and Thoughts

Setup:
(- fork repo + git clone)

- npm init
- npm install jest
- first test
- simplest code to pass test
- npm install --save-dev eslint (save lint as a dev dependency)
- ./node_modules/.bin/eslint --init (self initialize)

ESLint Quickstart: https://www.youtube.com/watch?v=qhuFviJn-es

Specifications for Bowling Scorecard Program:

- [x] can start a game (bowl 10 frames)
- [x] count number of pins knocked down: .roll(number_of_knockdown_pins)
- [ ] get user's input to enter the number of pins knockdown for each roll
- [x] caculates the final score (sum)
- [x] checks for gutter game (0pts)
- [x] checks for spares (1 bonus from the 1st roll of next frame)
- [x] checks for strikes (2 bonus from the two rolls of next frame)
- [x] shows 300pts for a perfect game
- [x] shows 150pts for a 'all' spares game

! ESLint:

```
/Users/Swa/Desktop/Projects/solo-challenges/bowling-challenge/test/bowlingGame.test.js
   4:1  error  'describe' is not defined  no-undef
  11:5  error  'expect' is not defined    no-undef
  18:5  error  'expect' is not defined    no-undef

```

https://eslint.org/docs/rules/no-undef
I used `/* eslint-disable no-undef */`, to disable it in the whole file, and hopefully not in my bowlingGame.js file.
Not sure how this all works, usually VSCode + Prettier adds missing `;` and greys out methods that are not defined and variables that haven't been used yet.

getFinalScore flow : pseudo code + ruby mix
[index of rollList use] (https://github.com/s-dousse/bowling-challenge_JS/blob/main/images/diagram2.png)

```
getFinalScore()
calculate score frame by frame
    10 frames (use index of rollList)
        (i = 0)
        if strike ? (checking first roll of the frame : rollList[i] = 10)
          sum = 10pts (strike) + bonus1 (first roll next frame => rollList[i+1]) + bonus2 (second roll next frame => rollList[i+2])
          i + 1 (there is no 2nd roll : move to next frame)
        else
          if spare? (checking both rolls of the frame : rollList[i] + rollList[i+1] == 10 )
            sum = 10ps + bonus1 (first roll next frame => rollList[i+1])
          else
            sum = total of both rolls: rollList[i] + rollList[i+1]
          end
          i + 2 (skip second roll of the current frame + move to the next frame (1st roll))
        end
    end
```

not so sure what's happening here, having a nightmare to get place the return at the right line to get sum back... and not undefined or NaN

also I tried to use a function from the Class within another function of the same Class and it said undefined function so I will have to look into this.

I uninstalled ESLint, it was bloking prettier and as I am new to JS prettier is just a lifesaver and I don't feel confortable working without it yet..

Hard time debugging this one, my loop for iterating over all the 10 frames wasn't working:
I need to return the value of sum in the if statement after calculatin the score for each frame. but then I couldn't change the index of my rollList after the return. so I created another variable (frameI) that I could change frame before calculating the score and return it.
after struggling a bit it look like I can use this.sum when declare in the constructor function => I don't need to return the sum to update it

Yay all tests passing : let's see how I can refactor my big chunky method getTotalScore to have clear responsability for each method + break in shorter methods:

- isAStrike(i) => check the first roll of a frame
- isASpare(i) => check if the sum of both rolls of a frame equal to 10
- calulateStrikeScore()
- calculateSpareScore()
- caculateBasicScore()
- moveToNextFrame(str)

We can call these functions as methods within the getTotalScore function, but we use the `this` keyword!
I think this is how it works:
so `this` will point to the object that is calling the method
in tests we do `game.getTotalScore()` (before const game = new BowlingGame())
so in getTotalScore() we do
`this.isAStrike(i)` will be like `game.isAStrike(i)`?
also `this` behaves differently with arrow functions, I haven't used them here , but that's just luck and the tests are still passing after refactoring

also not sure that having `this.sum` as class property is the best? but then I can pass it around the different function without using a argument
or this is bad practice ? or I should do the same for the `this.rollList[?]`?

### adding a CLI

so I've done it with my thermostat project and setting it up was not as difficult as I expeted
I now have a weird error:

```
Swa@Swas-MacBook-Pro bowling-challenge % node cli.js
Enter command > 11
sorry, enter a valid roll or command
Enter command > -2
sorry, enter a valid roll or command
Enter command > 10
added roll #1
Enter command > 10
added roll #2
Enter command > 10
added roll #3
Enter command > 10
added roll #4
Enter command > 10
added roll #5
Enter command > 10
added roll #6
Enter command > 10
added roll #7
Enter command > 10
added roll #8
Enter command > 10
added roll #9
Enter command > 10
added roll #10
Enter command > 10
added roll #11
Enter command > 10
added roll #12
Enter command > my rolls
[
  '10', '10', '10',
  '10', '10', '10',
  '10', '10', '10',
  '10', '10', '10'
]
Enter command > score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
strike
calculating strike score
0101010101010101010101010101010101010101010101010101010101010
0101010101010101010101010101010101010101010101010101010101010
Enter command >
```

to debug this I tried to add a few console.log in my getTotalScore (console.log("strike") when in isAStrike is true) and calculateStrikeScore (console.log("calculating strike score")) methods
maybe `this.sum` is not updated
I am unsure as doing `game.rollList` in the cli.js file let me access the class property
when I console.log `game.sum`, I get the same as console.log `game.getTotalScore` which I expected but didn't solve the problem
