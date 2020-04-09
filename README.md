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

## How to Install

### Prerequisites

The webapp has been developed on Ruby Sinatra, a rack based platform, so to install make sure you have the following installed:
- RVM (follow instructions [here](https://rvm.io/rvm/install))
- Ruby 2.6.5 (```rvm install 2.6.5```)
- Bundler 2+ (```gem install bundler```)

### Install Application

Then clone or download this repository, move to root directory and run ```bundle install``` to install the application for all environments. 

### How to Run the Tests

After install, to check the application is working correctly navigate to the root directory and run the tests using the following command:
```bash
rspec
```

### How to Start the Server

The default application server is Puma. The application is currently configured to listen for requests on a unix socket ```shared/sockets/puma.sock```. To change this to listen on the localhost, edit the puma configuration file ```config/puma.rb```, commenting out the line starting with ```bind ...``` and un-commenting the line starting with ```port ...```, selecting the port you wish to host on.

To start the server, navigate to the root directory and run the following command:
```bash
puma
```

## Development Process

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
So I can keep playing my favorite game
I want to be able to restart my game without reloading the page
```
```
As a user
So I can't make a mistake in entering my point
I only want the option to add score which reflects previous rolls in the frame
```
```
As a project manager
To ensure continuous integration
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
- Scores calculated as game progresses - follow official bowling rules
- No need to maintain persistence between page refreshes
- Buttons to add score value dynamically change depending on previous roll
- Animation to make site look pretty (provide as much as time allocation allows)
- Travis CI to build, ESlint, and run Jasmine + RSpec tests

### Objects
- Controllers:
  - Sinatra: app_controller - controls routes, views, and server side models
  - JavaScript: gameController - Updates JavaScript models and views with user input
- Views:
  - Sinatra: homepage - single page HTML including all JavaScript required for functionality
  - JavaScript: gameView - updates each section of HTML with new information from controller
- Models:
  - Sinatra: nil - no server side models required at this stage
  - JavaScript: frameModel - calculates scores to be added returned to view

### Create Application

Plan model functionality and how system will interact on paper to develop a working design.

#### Prerequisites
- Create file structure
- Add required Gemfile and Rakefile

#### TDD
- Feature test infrastructure and to create working webapp
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

## License

This application is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License