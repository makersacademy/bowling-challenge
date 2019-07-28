
Bowling Challenge
=================

![Screenshot](https://github.com/Timdavidcole/bowling-challenge/blob/master/images/bowling-challenge.png)

## The Task

To make my first javascript project, an interactive bowling scoreboard!

## My Approach

- I kicked off making sure the model of the game worked. I initially started simple with one game object, then went far too deep down the OOP rabbit hole, with a WAY too complicated spagetti junction of SRP and forwarding.  So retraced back to an old commit and finalised from there.
- Main file is bowling.js, which has 4 main functions ``` enterBallScore(score) ``` 
```calculateTotalScore()```
```newGame()```
```isGameOver()```
- Tests are using Jasmine.
- JSLint and Beautify used in Atom to make sure the code is up to snuff.
- Having completed the task, I decided to have a go at a UI, for which I used HTML, CSS & Jquery.  Seems to all be working fine.
- Hosting was done in Ruby with Sinatra.
- Tested it in Chrome, Safari and Firefox.  Working fine!

### Installation

- In your terminal
```
git clone git@github.com:Timdavidcole/bowling-challenge.git
cd bowling-challenge
//TO LAUNCH//
open index.html
//OR HOST IT LOCALLY//
bundle install
rackup
open http://localhost:9292/
```
- I've tried to host it on herokuapp but unfortunately it doesn't seem to be loading the css/jQuery.
```
https://bowlingscorecardtim.herokuapp.com/
```
- If you're feeling extra curious you can load my Jasmine tests.
```
open SpecRunner.html
```

## How to use the site

- It's extremely simple, load the page and start clicking the pin buttons at the bottom of the page to enter your scores.
- The page won't allow you to enter a non-viable score.
- When the round is finished your final score will be displayed at the bottom.
- Simply click 'Start New Game' any time you want to clear the scorecard and start.

### Final thoughts

- This was a lot of fun to make.  I would like to implement a database system, maybe to store results for multiple rounds with multiple players.  If I get time I'll definitely have a go.
- I probably should have refactored out another main object Frame, as my Bowling object is doing an awful lot at the moment.  But I think my code is fairly clear, so I decided to go with simplicity rather than the Single Responsibility Principle.
- I spent HOURS trying to get that bloody 10 button's text aligned properly, but it defeated me.  I would love to know how to fix it!
- I'm particularly pleased with animations on the Start New Game button.
- Would like to tweak the UI to display a more traditional bowling scorecard design.
- Maybe implement Node.js rather than Sinatra.
