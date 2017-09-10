# Bowling Challenge #

## My approach ##

I prepared for the challenge by reading all of the instructions and supporting material throughly.

Following this I listed all aspects to be tested to verify I have covered them all along with any other additional notes on code I will need to use and any other requirements of my program/tests.

I diagrammed the logic of how the game will work and the scoring system.

I TDD'd my program from small feature tests to build the functionality of the game and tested using Jasmine as well as Chrome developer tools to ensure my program worked in addition to tests passing.

In my tests I defended against edge cases to ensure my tests were robust.

In order to finish the challenge my next step would be to refactor my tests and code to be DRY.

I would then move onto the scoring logic of the game eg. how a strike/spare is scored and implement a running total and final total.

Then I would have tackled the final scoring system (based on 3 rolls if you score a strike or spare) and TDD'd this.

Additionally I would have created routes and views directories (containing index.js and .ejs files for templating html) so that the game could be played in a web browser, possibly using jQuery too.


## Contents ##

Lib folder containing:
  1. Jasmine

Spec folder containing:
  1. frameSpec.js
  2. gameSpec.js
  3. spec_helper.rb

Src folder containing:
  1. game.js

SpecRunner.html

## Authors ##

Olivia Frost

This repository was forked and then cloned from makersacademy/bowling-challenge


* Features to be tested:

  * [ ] Gutter game
  * [ ] One frame
  * [ ] Multiple frames
  * [ ] Spares
  * [ ] Strikes
  * [ ] Final Frame
