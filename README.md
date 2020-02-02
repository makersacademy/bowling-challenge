
Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
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

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

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


## Bowling Challenge Approach

# Setup
1) Download Jasmine file and remove files that aren't needed
2) Add Bowling.js & BowlingSpec.js files to Specrunner

# First User Story
User requirement: A Gutter Game is when the player never hits a pin (20 zero scores).

As a bowling player
So that I know when I didn't hit any pins
I would like to be able to see score 0 after 10 frames
1) Spec Test:
'use strict';

describe ('Bowling',function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it ('gives score 0 when 0 pins are hit after 10 frames', function(){
    for ( i=0; i <= 20; i++ ){
      bowling.roll(0);
    }
  expect(bowling.score()).toEqual(0);
  });
});

ERROR: Bowling is not defined
2) Implementation
'use strict';

class Bowling{

  roll(){

  }

  score(){
    return 0;
  }
}

# Second User Story
As a bowling player
So that I know when I hit 1 pin each time
I would like to be able to see score 20 after 10 times
1) Spec Test:
it('gives score 20 when 1 pin is hit each frame', function(){
  for(var i = 0; i < 20; i++) {
    bowling.roll(1)
  }
expect(bowling.score()).toEqual(20)
})
Error: expected 0 to equal 20
2) Implementation
class Bowling {
  constructor(){
  this.currentScore = 0;
  };

  roll(pins){
    this.currentScore += pins;
  };

  score(){
    return this.currentScore;
  };
};

# Third User Story
User requirement: The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

As a bowling player
So that I know when I have hit a spare
I would like to be able to see the correct score after I hit a spare

1) Spec Test:
it('calculates spares correctly', function(){
  bowling.roll(3)
  bowling.roll(7)
  bowling.roll(1)
  for(var i = 0; i < 17; i++) {
    bowling.roll(0)
  }
  expect(bowling.score()).toEqual(12);

Error: expected 11 to equal 12
2)Implementation:
score(){
  let rollIndex = 0
  //rollindex will either be 1st roll or 2nd roll
  let totalScore = 0
  //totalscore will be the total score for all the frames
  for (var frameIndex = 0; frameIndex < 10; frameIndex ++) {
    var rollScore = this.total[rollIndex] + this.total[rollIndex + 1]
    //this will add the first roll and second roll to the total score for each frame
      if (rollScore === 10){
      totalScore = totalScore + rollScore + this.total[rollIndex + 2]
      } else {
        totalScore += rollScore
      }
    rollIndex += 2
  }
  return totalScore
};
};
3) Refractoring (since have long if/else statements)

isSpare(rollScore){
  return rollScore === 10; ( make sure to include return so true/false statement is evaluated)
  }

and insert it:
if (this.isSpare(rollScore)) { (make sure to specify this so computer knows where this method is coming from)

# Fourth User Story
User requirement: The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

As a bowling player
So that I know when I have hit a strike
I would like to be able to see the correct score after I hit a strike
1) Spec Test
it('calculates strikes correctly', function(){
  bowling.roll(10)
  bowling.roll(1)
  bowling.roll(1)
  for(var i = 0; i < 16; i++) {
    bowling.roll(0)
  }
  expect(bowling.score()).toEqual(12);

})

Error: Expected NaN to equal 12.
2) Implementation
if (this.total[rollIndex] === 10) {
  totalScore = totalScore + 10 + this.total[rollIndex + 1] + this.total[rollIndex + 2]
  rollIndex ++;
  continue;

3) Refractoring
isStrike(rollIndex) {
  return this.total[rollIndex] === 10;
}
if (this.isStrike(rollIndex)) {
  totalScore = totalScore + 10 + this.total[rollIndex + 1] + this.total[rollIndex + 2]
  rollIndex ++;
  continue;

# Fifth User Story
User requirement: If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

As a bowling player
So that I know when I have hit a strike or spare in 10th frame
I would like to be able to see bonus
1) Spec tests:
it('calculates 10th frame bonus score correctly if there are three strikes', function(){
  for(var i = 0; i < 18; i++) {
    bowling.roll(0)
  }
  bowling.roll(10)
  bowling.roll(10)
  bowling.roll(10)

  expect(bowling.score()).toEqual(30);

})

it('calculates 10th frame bonus score correctly if there is a spare and strike', function(){
  for(var i = 0; i < 18; i++) {
    bowling.roll(0)
  }
  bowling.roll(1)
  bowling.roll(9)
  bowling.roll(10)

  expect(bowling.score()).toEqual(20);

})

The two above tests pass as the for loop is set to <10 so I will write a counter test as well :
it('does not allow bonus round if not a strike or spare', function(){
  for(var i = 0; i < 18; i++) {
    bowling.roll(0)
  }
  bowling.roll(3)
  bowling.roll(3)
  bowling.roll(3)

  expect(bowling.score()).toEqual(6);

})
This test passes as well

# User interface
-create index html with the most important functions:
<!DOCTYPE html>
<html>
  <head>
    <title>Bowling</title>
  </head>
  <body>
    <section>
      <h1 id="score"></h1>
    <section>
           <form id="form">
             <input id="firstroll" type="text" placeholder="First Roll"></input>
             <input id="secondroll" type="text" placeholder="Second Roll"></input>
             <input type="submit"></input>
           </form>
    </section>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="src/interface.js"></script>
    <script src = "src/Bowling.js"></script>
  </body>
</html>

-added jquery:
