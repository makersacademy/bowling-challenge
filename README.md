[![Build Status](https://travis-ci.org/missamynicholson/bowling-challenge.svg?branch=master)](https://travis-ci.org/missamynicholson/bowling-challenge)


Bowling Challenge
=================

This is the Week5/6 weekend challenge for Ronin. The instructions can be found [here]. (https://github.com/makersacademy/bowling-challenge/blob/master/README.md)

The challenge is to create a simple ten-pin bowling game.

I have used Javascript and Jasmine for the business logic.

The state of the game is saved using Sinatra sessions via AJAX post/get calls.

The game uses jQuery to update the html page after each "roll" of the ball.

[Standard game play] (screenshotStandard.png)

[Perfect game play] (screenshotPerfect.png)

[Gutter game play] (screenshotGutter.png)


#Technologies
1. Sinatra
2. Javascript
3. Jasmine
4. jQuery
5. AJAX


#Installation
1. Clone this repo to your local machine
2. run `$ bundle` in your command line
3. run `$ ruby server.rb` in your command line
4. Open the [page] (http://localhost:4567/)
