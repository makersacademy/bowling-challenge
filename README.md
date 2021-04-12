## Bowling Scorecard Challenge in JavaScript

A ten-pin bowling score calculator. It's a translation of [this](https://github.com/mscwilson/bowling-challenge-ruby) Ruby project, with a jQuery UI. It's hosted [here](https://mscwilson.github.io/bowling).


### The Task
Ten-pin bowling has surprisingly [complex rules](https://en.wikipedia.org/wiki/Ten-pin_bowling#Scoring). Essentially the score is the number of pins knocked over per round (frame), but there are bonus points if all ten pins fall after only one or two consecutive rolls.

This was the 6th weekend challenge for [Makers Academy](https://makers.tech). The goal was to practise JavaScript, with a stretch goal of adding a jQuery interface.

Try it out [here](https://mscwilson.github.io/bowling).

It looks like this:
![during a game](images/bowling-dropdown.png)
![end of the game](images/bowling-ended.png)

### Technical Approach
The logic is a straight translation of my [original](https://github.com/mscwilson/bowling-challenge-ruby) Ruby project. That wasn't written with an interface in mind, so it was challenging to then display what I wanted. I looked at more examples of real scorecards and saw that results are usually shown differently from how I expected. I ended up writing several new functions, for example to calculate cumulative scores for each frame.

To keep track of bo

### Installation and Usage
* Clone this repo and navigate into it
* Open `index.html` in your browser
* Enter number of pins knocked down to see a cumulative score
* To run the unit tests, open `SpecRunner.html` in your browser

### Known Issues
* It looks bad on mobile browsers. To fix this I could create a new layout for mobile with a vertically aligned scorecard.
* There's a bug around displaying the score in the 10th frame under certain conditions.
* The code isn't the cleanest. The Frame logic around what to display in the scorecard is particularly in need of refactoring.
