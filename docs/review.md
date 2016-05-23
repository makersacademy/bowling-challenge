# Introduction

Welcome to the code review for the Bowling Challenge!  Again, don't worry - you are not expected to have all the answers. The following is a code-review scaffold for Bowling Challenge that you can follow if you want to.  These are common issues to look out for in this challenge - but you may decide to take your own route.

If you can please use this [form](http://goo.gl/forms/cuObDCzC4v) to tick off where your reviewee has successfully has successfully incorporated these guidelines!  This form helps us get an overall picture of how the whole cohort is doing - it's not an assessment of an individual student.

# Step 0: Checkout and Run tests

Please checkout your reviewee's code and run their tests. Read the code and try and use the app through the web interface (if they have made one).  You can also experiment with the engine in the console. How easy is it to understand the structure of their code? How readable is their code? Did you need to make any cognitive leaps to 'get it'?  Is it more complicated than it needs to be?

# Step 1:  How far did they get?

* Features
  * [ ] Gutter game
  * [ ] One frame
  * [ ] Multiple frames
  * [ ] Spares
  * [ ] Strikes
  * [ ] Final Frame

* Bonus Features
  * [ ] UI

The relevance of the subsequent steps may depend on how far the reviewee got with their challenge.

# Step 2: Structure and supporting files

## Installation/Usage Instructions in README

As we have seen previously, the README is a great place to show the full story of how your app is used (from a user's perspective).  Include instructions for how to download and run the tests, e.g.:

```sh
$ git clone git@github.com:[USERNAME]/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```

If you created a UI maybe include some screenshots?  For more info on embedding images in a README: https://guides.github.com/features/mastering-markdown/

e.g.:
```
![Screenshot](https://path_to_your_image)
```

You will need to host your images somewhere, e.g.:
* http://imgur.com/
* http://dropbox.com/

## Read Over Your Pull Request Before Submitting

Watch out for things like having any unnecessary files, e.g. your Bowling.js in both `src/` and `public/` folders.  Remove all commented code.  Remove all logging statements, e.g. `console.log`

## Following Style Guidelines

Hound uses [jshint](http://jshint.com/about/) to point out important style violations.  Having your code follow style conventions is essential if you want to pass a tech test in order to get an interview with a company for a job, so look over the hound comments for issues like:

- Inappropriate semi-colon use
- Deeply nested conditionals
- Consistent indentation

# Step 3: Tests (\*Spec.js files)

## Ensure tests are comprehensible and laid out correctly

Tests should be organized under appropriate `describe` blocks, with descriptive titles and should be DRY.  They are unDry if they are repeating themselves in the test in a way that could be extracted). Can you understand exactly how to use the solution solely by reading the tests?

## Little or no testing of edge cases

Many solutions rely on a 'virtuous consumer' - i.e. they do not validate inputs or check for out of range values etc.  In the bowling challenge this includes checking for odd corner cases such as the gutter game and the perfect game, and odd combinations of strikes and spares.  But also defending against non-numeric or meaningless values being passed in to the engine.

# Step 4: Application code (\*.js files)

## Not modeling the rules

One of the commonest problems in the bowling challenge is not understanding and/or modeling the rules!  Check that the code correctly handles spares, strikes and - as an added bonus - the final frame!

## Poor Encapsulation

Avoid relying on implementation details. It's common to see objects relying on the internals of other objects or their implementation of low-level types (particularly arrays).

not so good

```javascript
function Game(){
  this.frames = [];
}

game = new Game();
game.frames.push(new Frame());
```

better

```javascript
function Game(){
  this._frames = [];
}

Games.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

game = new Game();
game.addFrame(new Frame());
```

## Poor function naming

Function names should ideally start with a verb so it's clear that they _do something_ to something else.  

For example, a function that calculates the score should be named `calculateScore`.  A function named `score` should probably only return a score that was already calculated.

In all cases we should try to ensure that each function has a single responsibility that is clearly indicated by it's name.

## Single Responsibility Principle and other SOLID issues

Ensure your objects are [solid](https://github.com/makersacademy/course/blob/master/pills/code_reviews.md#oop---are-your-objects-solid)?

For example, have you separated responsibilities of...
  * knowing whether a frame is a strike / spare
  * keeping track of the progress of a game
  * calculating bonuses

In particular you should avoid having a single monolithic object that does everything.

## Unnecessary use of Exceptions

Throw exceptions for exceptional behaviour, not for normal activity.  E.g.

```javascript
if(this.noFramesLeft()) { throw Error(this.GAMEOVER_ERROR); }
```

A game ending is a normal event, rather than an exceptional one.

## Avoid long functions

```javascript
Game.prototype.strikeBonus = function(index) {
  var bonus = 0;
  var frames = this.frames;
  if (frames[index+1].outcome === 'X') {
    if (frames[index+2].outcome === 'X') {
      bonus = 20;
    } else {
      bonus = 10 + frames[index+2].firstBowl;
    };
  } else {
    bonus = frames[index+1].total;
  };
  return bonus;
};
```

A function like the above can be refactored like so:

```javascript
Game.prototype.strikeBonus = function(index) {
  var bonus = this.frames[index+1].total;
  var frames = this.frames;
  if (this.isAStrike(index+1)) {
    bonus = isAStrike(index+2) ? 20 : 10 + this.frames[index+2].firstBowl;
  }
  return bonus;
}

Game.prototype.isAStrike(index){
  return this.frames[index+1].outcome === 'X';
}
```

Of course this would all be much easier to separate out if we were using a separate Frame object.

## DRY things out

```javascript
BowlingGame.prototype.currentMove = function(pins) {
  if ( this.isFirstRoll() ) {
    if ( this.isStrike() ) {
      this.strikeScoring(pins);
    } else if ( this.isSpare() ) {
      this.spareScoring(pins);
    } else {
      this.incrementRoll();
      this.addToScore(pins);
    }
  }
  else {
    if ( this.isStrike() ) {
      this.strikeScoring(pins);
    } else if ( this.isSpare() ) {
      this.spareScoring(pins);
    } else {
      this.addToScore(pins);
      this.resetFrame(pins);
    }
  };
};
```

The above code has a lot of replication across the two branches of the if/else statement.  We could refactor like so, pulling the outer if/else statement into the final element of the internal if/else statement.

```javascript
BowlingGame.prototype.currentMove = function(pins) {
  if ( this.isStrike() ) {
    this.strikeScoring(pins);
  } else if ( this.isSpare() ) {
    this.spareScoring(pins);
  } else {
    this.addToScore(pins);
    if ( this.isFirstRoll() ) {
      this.incrementRoll();
    } else {
      this.resetFrame(pins);
    }
  }
};
```

## Duck Punch carefully

If you are adding new function to existing JavaScript objects then do check you are not overwriting an existing function.

```javascript
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
```

## Example Solutions

* [Leo](https://github.com/pitchinvasion/bowling)
* [Ben](https://github.com/silvabox/bowling_js)
* [Spike](https://github.com/spike01/bowlingJS)
* [Henry](https://github.com/henrygarner/BowlingNode)
