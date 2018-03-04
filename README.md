Marcus' README Edits - My approach and mini code review
=================

To use
---------
* git clone repository
* Open 'SpecRunner.html' for tests
* Open 'index.html' for the bowling scorecard itself

My approach
---------
* I used the first weekend to work out the logic of the model, with the second week for the front end, css and testing out jQuery
* I also split the logical tasks into: score calculator and game runner. This enabled me to only consider each aspect and reduce the cognitive load
* CSS and jQuery are new to me, so I ensured to practice both extensively on the second weekend, challenging myself with styling the table and making a strike animation
* I aimed to have deep understanding of my code, diagrammed extensively and stuck to the coding processes that I am refining e.g. TDD, Debugging process, algorithmic thinking, simplest step to MVP first


Mini personal code review: My appraisal of my attempt at the weekend challenge
---------
* I really enjoyed the bowling challenge. My first weekend was satisfying logic, my second weekend focussed on testing out jQuery and having the front end working.
* I think the real key to finding what could be a hard challenge fun and easy was thinking through my understanding of the code, diagramming extensively and most importantly sticking to the coding processes that I am refining e.g. TDD, Debugging process, algorithmic thinking, simplest step to MVP first
* I also set up extensive tests for the back end model, which I found made it easy to refactor the code and ensure I was covering all scenarios. This was the first time I really felt myself letting the tests LEAD development
* Taking the time to properly refactor was also essential to improving the quality of my code. I extracted a lot of logic and changed the scoring logic to be backward looking rather than forward looking, which vastly simplified my code
* I enjoyed learning a new language in JS, a new testing framework in Jasmine, CSS, HTML and the extension jQuery in completing this exercise
* I also spent the extra time it took to deepen my understanding of JS to answer some of the elements I got stuck on, including researching how scope and hoisting works for JS so that I could effectively refactor and extract coding logic

Learnings/Things I would do better next time
---------
* One of the lessons I really learned was prioritising tasks to take on the essential functionality first, before any styling or additional features. For example, I got stuck on making a button a bowling ball, but jQuery had an issue with this being in a form. If I made the button work first, then moved it to a form, I would have known it was the form causing the issue.
* At a couple of points I could have committed my code more often. This would have made it easier to go back and see changes if I got stuck.

Elements I would like to improve in the codebase:
---------
* Features I would continue to add would be spare/ gutter ball animations, and a reset button for the game. I could also add support for multiple players
* From a code perspective, there were some additional changes I considered but decided were not worth the effort at this point e.g. further refactoring the model logic, calculating the score by frame rather than looping through for score calculation each time (would make the code slightly quicker but bowling is a relatively small game so computer load is not an issue)

Outstanding questions from the exercise:
---------
* Transcending scopes discussion: attaching data to objects and using dependancy injection (I used both here - dependency injection in the interface, attaching data to objects in the score calculator)
* What are the implications of function expression vs declaration, other than hoisting
* Check my understanding of hoisting, global, local and local nested scope
* I also had a set of questions after the first weekend of completing logic that I answered, including: How to raise error messages using jQuery, checking the logical approach I had taken to take to run the game (I chose rolls that run game rather than game that runs roll), checking where I could refactor the code and how JS works with undefined errors


Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

Also, don't generate random rolls. Trust us on this one.

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
