# Bowling Scorecard Challenge
----------
```
  _ 0
o'-/-\--------------------------------------------
  |\                                           . o
  / |       '.                             . o . o
             .'                              o . o
            '                                    o
__________________________________________________
```
----------
## Overview

Makers Academy weekend challenge to single page webapp, which allows a user to add in bowling scores from a game, then automatically calculates the total score.

### How to Install

The webapp has been developed on Sinatra, a rack based platform, with the majority of the functionality added through JavaScript. So to install the app, clone this repo, make sure Homebrew and Ruby 2.6.5 is installed then:
- move to the project root directory in terminal
- run ``` gem install rake ```
- run ``` rake ```
- run ```rackup``` to start server on localhost port 9292

----------
## Approach

### User Stories

Generate user stories from project requirements:
```
As a user
So I can thoughtlessly keep track of my bowling score
I want to visit a webpage and enter my scores
```
```
As a user
So I can see if I'm better than my friends
I want to my total score to be displayed at the end of a game
```
```
As a user
So I can keep playing my favourite game
I want to be able to restart my game without reloading the page
```
```
As a user
So I can't make a mistake in entering my point
I only want the option to add score which reflects previous rolls in the frame
```
```
As a project manager
To ensure continious integration
I want Travis CI to test my builds before adding them to github
```
```
As a client
So I can sell my product
I want some cool animation added to to the site
```

### Bowling Rules

Bowling has a number of scoring rules which must followed in order to calculate the correct total score for the game. The rules follow for this webapp scorecard model are those listed here: [Bowling Rules](https://www.liveabout.com/bowling-scoring-420895)

### Extract Scope
- Single page webapp, server based off Sinatra with functionality provided by JavaScript
- Page displays one game at a time with option to start --> complete --> restart
- Scores calculated as game progresses - follow offical bowling rules
- No need to maintain persistence between page refreshes
- Buttons to add score value dynamically change depending on previous roll
- Animation to make site look pretty (provide as much as time allocation allows)
- Travis CI to build, ESlint, and run Jasmine + RSpec tests

### Objects
- Controllers:
  - Sinatra: app_controller - controls routes, views, and server side models
  - JavaScript: gameController - Updates JavaScript models and views with user input
- Views:
  - Sinatra: homepage - single page HMTL including all JavaScript required for functionality
  - JavaScript: gameView - updates each section of HTML with new information from controller
- Models:
  - Sinatra: nil - no server side models requires at this stage
  - JavaScript: frameModel - calculates scores to be added returned to view

<!-- refactor system to extract gameModel from gameController -->

----------
## Process

Plan model functionaility and how system will interact on paper to develop a working design.

### Prerequisites
- Create filestructure
- Add required Gemfile and Rakefile

### TDD
- Feature test infastructure and to create working webapp
- Test and develop JavaScript with Jasmine test suite
  - FrameModel
    - (possible refactor to join all prototypes etc)
  - GameView
    - (how to test jQuery using mocks?)
    - (Add animation and end screen games)
  - GameController
    - (still requires gameModel extracting from controller)
    - (add functionality to replace strikes and spares with X and /)
    - (tests required)
- Develop HTML along with GameView
  - (requires refactor of id and class details to make selection more streamlined)
  - (CSS can be improved)








----------
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
