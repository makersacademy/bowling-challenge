# Bowling Challenge

This is my solution to the bowling kata challenge. Although this is a working program, I am aware much more work is needed in refactoring to get follow better OOP. I found it difficult to see the benefits here on where to extract things into separate classes and so feedback would be greatly appreciated on this.

## Instructions for use

- Clone project
- Run `npm install` to download dependencies
- Open `bowlingGame.html` to play
- Run `npm test` to run the tests

## Features

- A working bowling game including calculation for all strikes and spares, and bonus rounds.
- Basic UI implementation using JQuery
- [ESLint](http://eslint.org/) used with `javascript standard` profile
- [Jasmine](https://jasmine.github.io/) used to test (node.js)
- [Travis CI](https://travis-ci.org) continuous integration tool set up,

When using the UI, the user will select the button of how many pins are knocked down:

![Screenshot](https://i.imgur.com/X89rnFN.png)

- When the user choses the pins knocked, a new row will be added to the score card with the new total.
- If a user tries to roll over 10 pins in the same frame, the roll will not be able to take place.
- If the user wants to start again, they can hit `reset` and a new game instance will be created and score card wiped clean.

## Improvements that need to be made

- Refactoring the bowlinggame method so that the scorecard is a construnctor function could be done. Further refactoring of methods could potentially also be done, although feedback welcome on this.
- User can currently roll more than 10 pins for the last two rolls in the final frame if the first frame was a strike.
