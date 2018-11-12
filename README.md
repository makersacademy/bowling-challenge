Bowling Score Card
=================
This program is an interactive score card for bowling. It allows a user to enter the number of pins they nocked down in each frame, and calculates the score for them.

This program is written using JavaScript, JQuery, HTML and CSS. Jasmine is the testing framework.

## NOTE ##
The scoring for strikes and splits is currently inaccurate. When writing a test for multiple strikes I realised that how I understood the scoring to work for strikes and splits was incorrect. Currently unit tests for strikes and splits pass because they do not occur in succession. If there are multiple strikes and/or splits together the scoring is wrong.

The updateAllBowls and #allBowls in RunningScore is my first step in trying to correct this scoring error, but I have not had time to implement it fully. I imagine that the this.strikes and this.spares in RunningScore will probably be redundant once the correct scoring mechanism is implemented.

## Getting started ##
- Clone this repo: `git clone git@github.com:JL-J/bowling-challenge.git`
- To start the program, open `index.html` in your browser.

## Running tests ##
- To run tests open `SpecRunner.html` in your browser.

## Features to implement in further development ##
Once the scoring is corrected I plan to implement the following features:  
- Error message on the interface if a user inputs an incorrect bowling score. I have written a test in frameScore to ensure that the sum of the two bowls entered by the user equals no more than 10, but currently this message does not appear on the front-end.
- The third bowl on the 10th frame.
- Stubbing in the frameSpec. Spy objects have been created but these have not been implemented in the tests.
