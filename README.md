Bowling Challenge
=================

## Description
This is a bowling scorecard app using JavaScript, Node.JS, express, and jQuery.

Testing has been completed using Jasmine (unit tests) and Zombie with Mocha (feature tests).

Users are able to log their rolls for each frame in turn. Where applicable, bonuses are calculated 2 frames after each frame, or at the end of the game for the last couple of frames. The grand total is calculated at the end of the game.

## Setup
Clone this repo:
`git clone git@github.com:julesnuggy/bowling-challenge.git`

Install Node and Node Package Manager (npm):
`brew install node`

If you don't have Homebrew, install by:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install the dependencies:
`npm install`

## Usage
To run the app:
`nodemon index.js`

Navigate to http://localhost:3000

For each frame, enter your two roll scores in the input boxes and click 'Submit'. How your scores tally up are shown in the Game Logic image below.

## Game Logic
![Bowling Logic Chart](/images/bowling_logic.png)

## Running Tests
To run the Jasmine unit tests, open the 'SpecRunner.html' file in your browser. The file is located in the project root directory.

To run the Zombie/Mocha feature tests, simply run the command `mocha` in the terminal with your pwd at the project root directory.
