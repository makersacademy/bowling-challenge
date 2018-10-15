
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

### Goals

Work on this challenge as conclusion of week 4, to work towards these goals:

* I version-control my projects
* I use a methodical approach to solving problems
* I test-drive my code
* I can work to a specification
* I create effective documentation
* I can design and build user interfaces
* I can write standards-compliant, clean object-oriented code

Instructions to run this at home
-----

To use the Scorecard:
```
$ git clone https://github.com/fbl11/bowling-challenge
$ cd bowling-challenge
$ npm install bootstrap@3
$ open jasmine/lib/index.html
```

To run tests:
```
$ git clone https://github.com/fbl11/bowling-challenge
$ cd bowling-challenge
$ npm install jasmine-expect --save-dev
$ open jasmine/SpecRunner.html

```

STATUS
-----
Implements and tests 'Game' and 'Frame' class.

**Notes**
Using https://github.com/JamieMason/Jasmine-Matchers to add additional testing functionality (only used for one very few tests - install if you want to run tests)
Using Bootstrap for styling

**TO DO**

- Test User Interface logic (Script.js)
- Add Domain Model
- Set up Travis CI

User stories
-----
```
As a player,
so that I know how long the game is,
I want to see how many frames the game has

As a player,
so I know how many frames I have already played,
I want to know which frame I'm currently playing

As a player,
to be assigned a score,
I want to be able to record the number of pins I hit in each roll in the correct frame

As a player,
so I don't have to remember the number of pins I've previously hit,
I want to see the history of my previous rolls.

As a player,
so I don't have to remember my score,
I want to see the history of my scores for each frame.

As a player,
so that I know who's winnig the game,
I want to see my running score (the sum of the score of all my rolls)

As a player,
so that I know who has won,
I want to see my overall score (the sum of the score of all my frames)

As a player,
to be rewarded for my skill,
I want to be credited extra scores when I bowl a strike

As a player,
to be rewarded for my skill,
I want to be credited extra scores when I bowl a spare
```

Domain Model


Author
-----
Freya Becker [fbl11](https://github.com/fbl11/)
