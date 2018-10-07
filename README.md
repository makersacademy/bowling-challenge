
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
Using https://github.com/JamieMason/Jasmine-Matchers to add additional testing functionality
```
npm install jasmine-expect --save-dev
```

Notes on use
------------------
* 
* 

STATUS
-----

**Notes**
Using https://github.com/JamieMason/Jasmine-Matchers to add additional testing functionality
```
npm install jasmine-expect --save-dev
```

**TO DO**

- 

includes


Unit tests

Feature tests


Coverage: %

User stories
-----
```
As a player,
so that I know how long the game is,
I want to see how many frames the game has

As a player,
so I know how many frames I have already played,
I want to see which frame I'm currently playing

As a player,
so I know how many rolls are left in my frame,
I want to see which roll I'm currently on

As a player,
to be assigned a score,
I want to be able to record the number of pins I hit in each roll

As a player,
to know how well I'm playing,
I want to receive a score according to the number of pins I hit in each frame

As a player,
to be rewarded for my skill,
I want to be credited extra scores when I bowl a strike

As a player,
to be rewarded for my skill,
I want to be credited extra scores when I bowl a spare

As a player,
so I don't have to remember my score,
I want to see the history of my scores for each frame throughout the game

As a player,
so I can validate my score,
I want to be able to see a history of the number of pins I hit throughout the game

As a player,
so that I know who's winnig the game,
I want to see my running score (the sum of the score of my frames played so far)

As a player,
so that I know who has won,
I want to see my overall score (the sum of the score of all my frames)

```

Domain Model



Author
-----
Freya Becker [fbl11](https://github.com/fbl11/)