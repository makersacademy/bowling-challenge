How To Play!
=================

* Clone the github repo to your own local repository
* Run the SpecRunner.html in order to check the tests
* Run index.html in your favourite browser to check your bowling score!
* One note - the game is not yet validated - for that reason please enter in 0's where you have rolled a gutterball

Bowling Challenge
=================

This is my attempt at the very famous *Bowling Game Kata* - designed to test both logical thinking and TDD. The user story was very simple-

```
As a bowler
So I can what score I've got
I want to be able to enter my scores into a scorecard and recieve my sore
```

I was primarily tasked with building the logic for the game in Javascript. After several different iterations I found a solution that I was pleased with - and one that was relatively simple to read. Further to this I then built a fully functional front-end where users can type in their scores and get their total score in return

### Screenshots

<img src="images/game_logic.png?" width="400px">

A screenshot of the game logic - I tried to follow SRP and DRY principles as much as possible

<img src="images/slicing_the_array.png?" width="400px">

In order for my application I needed to take the entered numbers and turn them into an array of arrays - this shows you how I did it

<img src="images/index.png?" width="400px">

A simple front-end allowing users to enter in their scores

<img src="images/tests.png?" width="400px">

A small shot of the testing spec

<img src="images/passing_tests.png?" width="400px">

20/20 passing tests

Technologies Used
-----

* Ruby
  * I built my application with Ruby - using the command line to allow users to build their own airports and planes
* Rspec
  * My testing framework was rspec - my final test suite had 14/14 passing tests

A Sample of the IRB
-----

```
2.6.0 :001 > require './lib/airport.rb'
2.6.0 :002 > require './lib/plane.rb'
2.6.0 :003 > require './lib/weather.rb'

2.6.0 :004 > gatwick = Airport.new
 => #<Airport:0x00007f9aaa079af8 @capacity=20, @plane_array=[]> 

2.6.0 :005 > virgin = Plane.new
 => #<Plane:0x00007f9aaa0aa568 @has_landed=false> 

2.6.0 :006 > easyjet.land(gatwick, Weather.new)
 => [#<Plane:0x00007f9aab845a10 @has_landed=true>] 

2.6.0 :007 > gatwick.takeoff(easyjet, Weather.new)
 => #<Plane:0x00007f9aab845a10 @has_landed=false> 

2.6.0 :025 > gatwick.takeoff(easyjet, Weather.new)
RuntimeError (Sorry - this plane is not at the airport)

2.6.0 :035 > easyjet.land(gatwick, Weather.new)
RuntimeError (Sorry - poor weather) # The application gives this error 1/10 times as per the Weather class
```


Installation
-----

* Git clone the project into your own local repository
* Run bundle install in order to download the relevant gems
* Run irb in your local repo in order to start the application
* Add the following into you IRB IRB

```
2.5.0 :001 > require './lib/takeaway.rb'
2.6.0 :002 > require './lib/plane.rb'
2.6.0 :003 > require './lib/weather.rb'
```

Tests
-----

After bundle install has been run you will be able to run rspec to test the application. Just run rspec in your terminal to do so.


How To Play!
=================

* Clone the github repo to your own local repository
* Run the SpecRunner.html in order to check the tests
* Run index.html in your favourite browser to check your bowling score!
* One note - the game is not yet validated - for that reason please enter in 0's where you have rolled a gutterball


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
